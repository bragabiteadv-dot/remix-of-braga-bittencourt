"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface RotatingEarthProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function RotatingEarth({
  width = 800,
  height = 600,
  className = "",
}: RotatingEarthProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const containerWidth = Math.min(width, window.innerWidth - 40);
    const containerHeight = Math.min(height, window.innerHeight - 100);
    const radius = Math.min(containerWidth, containerHeight) / 2.5;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = containerWidth * dpr;
    canvas.height = containerHeight * dpr;
    canvas.style.width = `${containerWidth}px`;
    canvas.style.height = `${containerHeight}px`;
    context.scale(dpr, dpr);

    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([containerWidth / 2, containerHeight / 2])
      .clipAngle(90);

    const path = d3.geoPath().projection(projection).context(context);

    const pointInPolygon = (point: [number, number], polygon: number[][]): boolean => {
      const [x, y] = point;
      let inside = false;
      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i];
        const [xj, yj] = polygon[j];
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
          inside = !inside;
        }
      }
      return inside;
    };

    const pointInFeature = (point: [number, number], feature: any): boolean => {
      const geometry = feature.geometry;
      if (geometry.type === "Polygon") {
        const coordinates = geometry.coordinates;
        if (!pointInPolygon(point, coordinates[0])) return false;
        for (let i = 1; i < coordinates.length; i++) {
          if (pointInPolygon(point, coordinates[i])) return false;
        }
        return true;
      } else if (geometry.type === "MultiPolygon") {
        for (const polygon of geometry.coordinates) {
          if (pointInPolygon(point, polygon[0])) {
            let inHole = false;
            for (let i = 1; i < polygon.length; i++) {
              if (pointInPolygon(point, polygon[i])) {
                inHole = true;
                break;
              }
            }
            if (!inHole) return true;
          }
        }
        return false;
      }
      return false;
    };

    const generateDotsInPolygon = (feature: any, dotSpacing = 16) => {
      const dots: [number, number][] = [];
      const bounds = d3.geoBounds(feature);
      const [[minLng, minLat], [maxLng, maxLat]] = bounds;
      const stepSize = dotSpacing * 0.08;
      for (let lng = minLng; lng <= maxLng; lng += stepSize) {
        for (let lat = minLat; lat <= maxLat; lat += stepSize) {
          const point: [number, number] = [lng, lat];
          if (pointInFeature(point, feature)) dots.push(point);
        }
      }
      return dots;
    };

    interface DotData {
      lng: number;
      lat: number;
      visible: boolean;
    }

    const allDots: DotData[] = [];
    let landFeatures: any;

    const render = () => {
      context.clearRect(0, 0, containerWidth, containerHeight);
      const currentScale = Math.max(0, projection.scale());
      const scaleFactor = currentScale / radius;

      context.beginPath();
      context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI);
      context.fillStyle = "#000000";
      context.fill();
      context.strokeStyle = "#ffffff";
      context.lineWidth = 2 * scaleFactor;
      context.stroke();

      if (landFeatures) {
        const graticule = d3.geoGraticule();
        context.beginPath();
        path(graticule());
        context.strokeStyle = "#ffffff";
        context.lineWidth = 1 * scaleFactor;
        context.globalAlpha = 0.25;
        context.stroke();
        context.globalAlpha = 1;

        context.beginPath();
        landFeatures.features.forEach((feature: any) => {
          path(feature);
        });
        context.strokeStyle = "#ffffff";
        context.lineWidth = 1 * scaleFactor;
        context.stroke();

        allDots.forEach((dot) => {
          const projected = projection([dot.lng, dot.lat]);
          if (
            projected &&
            projected[0] >= 0 &&
            projected[0] <= containerWidth &&
            projected[1] >= 0 &&
            projected[1] <= containerHeight
          ) {
            context.beginPath();
            context.arc(projected[0], projected[1], 1.2 * scaleFactor, 0, 2 * Math.PI);
            context.fillStyle = "#999999";
            context.fill();
          }
        });
      }
    };

    const loadWorldData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json",
        );
        if (!response.ok) throw new Error("Failed to load land data");
        landFeatures = await response.json();
        landFeatures.features.forEach((feature: any) => {
          const dots = generateDotsInPolygon(feature, 16);
          dots.forEach(([lng, lat]) => {
            allDots.push({ lng, lat, visible: true });
          });
        });
        render();
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load land map data");
        setIsLoading(false);
      }
    };

    const rotation: [number, number] = [0, 0];
    let autoRotate = true;
    const rotationSpeed = 0.5;
    // Performance only: skip frames while the canvas is off-screen.
    // Visual appearance and rotation speed while visible are unchanged.
    let isInViewport = true;

    const rotate = () => {
      if (autoRotate && isInViewport) {
        rotation[0] += rotationSpeed;
        projection.rotate(rotation);
        render();
      }
    };

    const rotationTimer = d3.timer(rotate);

    let viewportObserver: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      viewportObserver = new IntersectionObserver(
        (entries) => {
          isInViewport = entries.some((entry) => entry.isIntersecting);
        },
        { rootMargin: "100px" },
      );
      viewportObserver.observe(canvas);
    }


    // Only enable drag/scroll interactions while the pointer is over the globe
    // circle so page scrolling is never blocked outside the globe.
    const getGlobeCenter = () => {
      const rect = canvas.getBoundingClientRect();
      return {
        cx: rect.left + rect.width / 2,
        cy: rect.top + rect.height / 2,
      };
    };

    const isPointOverGlobe = (clientX: number, clientY: number) => {
      const { cx, cy } = getGlobeCenter();
      const dx = clientX - cx;
      const dy = clientY - cy;
      return Math.hypot(dx, dy) <= projection.scale();
    };

    let isHoveringGlobe = false;
    const updateCursor = () => {
      canvas.style.cursor = isHoveringGlobe ? "grab" : "default";
    };

    const handleMouseMoveHover = (event: MouseEvent) => {
      isHoveringGlobe = isPointOverGlobe(event.clientX, event.clientY);
      updateCursor();
    };

    const handleMouseLeave = () => {
      isHoveringGlobe = false;
      updateCursor();
    };

    const handleMouseDown = (event: MouseEvent) => {
      if (!isPointOverGlobe(event.clientX, event.clientY)) return;
      autoRotate = false;
      canvas.style.cursor = "grabbing";
      const startX = event.clientX;
      const startY = event.clientY;
      const startRotation: [number, number] = [rotation[0], rotation[1]];

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const sensitivity = 0.5;
        const dx = moveEvent.clientX - startX;
        const dy = moveEvent.clientY - startY;
        rotation[0] = startRotation[0] + dx * sensitivity;
        rotation[1] = startRotation[1] - dy * sensitivity;
        rotation[1] = Math.max(-90, Math.min(90, rotation[1]));
        projection.rotate(rotation);
        render();
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        canvas.style.cursor = isHoveringGlobe ? "grab" : "default";
        setTimeout(() => {
          autoRotate = true;
        }, 10);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleWheel = (event: WheelEvent) => {
      if (!isPointOverGlobe(event.clientX, event.clientY)) return;
      event.preventDefault();
      const scaleFactor = event.deltaY > 0 ? 0.9 : 1.1;
      const newRadius = Math.max(
        radius * 0.5,
        Math.min(radius * 3, projection.scale() * scaleFactor),
      );
      projection.scale(newRadius);
      render();
    };

    // Touch support: one finger drags to rotate, two fingers pinch to zoom.
    // Gestures only start when the first touch is inside the globe circle.
    let touchStart: { x: number; y: number } | null = null;
    let touchStartRotation: [number, number] = [0, 0];
    let pinchStartDistance = 0;
    let pinchStartScale = radius;

    const touchDistance = (t: TouchList) => {
      const dx = t[0].clientX - t[1].clientX;
      const dy = t[0].clientY - t[1].clientY;
      return Math.hypot(dx, dy);
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        if (!isPointOverGlobe(event.touches[0].clientX, event.touches[0].clientY)) {
          touchStart = null;
          return;
        }
        autoRotate = false;
        touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
        touchStartRotation = [rotation[0], rotation[1]];
      } else if (event.touches.length === 2) {
        if (!touchStart) {
          pinchStartDistance = 0;
          return;
        }
        touchStart = null;
        pinchStartDistance = touchDistance(event.touches);
        pinchStartScale = projection.scale();
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 1 && touchStart) {
        event.preventDefault();
        const sensitivity = 0.5;
        const dx = event.touches[0].clientX - touchStart.x;
        const dy = event.touches[0].clientY - touchStart.y;
        rotation[0] = touchStartRotation[0] + dx * sensitivity;
        rotation[1] = Math.max(-90, Math.min(90, touchStartRotation[1] - dy * sensitivity));
        projection.rotate(rotation);
        render();
      } else if (event.touches.length === 2 && pinchStartDistance > 0) {
        event.preventDefault();
        const ratio = touchDistance(event.touches) / pinchStartDistance;
        const newRadius = Math.max(
          radius * 0.5,
          Math.min(radius * 3, pinchStartScale * ratio),
        );
        projection.scale(newRadius);
        render();
      }
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (event.touches.length === 0) {
        touchStart = null;
        pinchStartDistance = 0;
        setTimeout(() => {
          autoRotate = true;
        }, 10);
      } else if (event.touches.length === 1) {
        pinchStartDistance = 0;
        touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
        touchStartRotation = [rotation[0], rotation[1]];
      }
    };

    canvas.addEventListener("mousemove", handleMouseMoveHover);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("wheel", handleWheel);
    canvas.addEventListener("touchstart", handleTouchStart, { passive: false });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchcancel", handleTouchEnd);

    loadWorldData();

    return () => {
      rotationTimer.stop();
      viewportObserver?.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMoveHover);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("wheel", handleWheel);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchcancel", handleTouchEnd);
    };


  }, [width, height]);

  if (error) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="text-center">
          <p className="text-red-500 font-semibold">Error loading Earth visualization</p>
          <p className="text-sm text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <canvas
        ref={canvasRef}
        className="touch-auto"
      />
      {isLoading && (
        <p className="text-sm text-gray-400 mt-2">Loading globe…</p>
      )}
      <p className="text-xs text-gray-500 mt-2">Drag to rotate • Scroll to zoom</p>
    </div>
  );
}