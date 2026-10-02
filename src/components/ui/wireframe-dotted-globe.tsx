"use client";

import { useEffect, useRef, useState } from "react";
import { geoGraticule, geoOrthographic, geoPath, timer } from "d3";
import { loadLandPoints, loadWorldData, type GlobeFeatureCollection, type GlobePoint } from "@/lib/globe-data";

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
    let isMounted = true;
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

    const projection = geoOrthographic()
      .scale(radius)
      .translate([containerWidth / 2, containerHeight / 2])
      .clipAngle(90);

    const path = geoPath().projection(projection).context(context);
    const graticule = geoGraticule()();
    let allDots: GlobePoint[] = [];
    let landFeatures: GlobeFeatureCollection | null = null;

    const render = () => {
      if (!isMounted || !context) return;
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
        context.beginPath();
        path(graticule);
        context.strokeStyle = "#ffffff";
        context.lineWidth = 1 * scaleFactor;
        context.globalAlpha = 0.25;
        context.stroke();
        context.globalAlpha = 1;

        context.beginPath();
        landFeatures.features.forEach((feature) => {
          path(feature);
        });
        context.strokeStyle = "#ffffff";
        context.lineWidth = 1 * scaleFactor;
        context.stroke();

        allDots.forEach((dot) => {
          const projected = projection(dot);
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

    const loadData = async () => {
      try {
        if (isMounted) setIsLoading(true);
        const [worldData, landPoints] = await Promise.all([loadWorldData(), loadLandPoints()]);
        if (!isMounted) return;
        landFeatures = worldData;
        allDots = landPoints;
        render();
        setIsLoading(false);
      } catch (err) {
        if (isMounted) {
          setError("Erro ao carregar os dados geográficos. Por favor, verifique sua conexão.");
          setIsLoading(false);
        }
      }
    };

    const rotation: [number, number] = [0, 0];
    let autoRotate = true;
    const rotationSpeed = 0.5;
    let isInViewport = true;

    const rotate = () => {
      if (autoRotate && isInViewport && isMounted) {
        rotation[0] += rotationSpeed;
        projection.rotate(rotation);
        render();
      }
    };

    const rotationTimer = timer(rotate);

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
      if (canvas) canvas.style.cursor = isHoveringGlobe ? "grab" : "default";
    };

    const handleMouseMoveHover = (event: MouseEvent) => {
      isHoveringGlobe = isPointOverGlobe(event.clientX, event.clientY);
      updateCursor();
    };

    const handleMouseLeave = () => {
      isHoveringGlobe = false;
      updateCursor();
    };

    let currentHandleMouseMove: ((e: MouseEvent) => void) | null = null;
    let currentHandleMouseUp: (() => void) | null = null;

    const handleMouseDown = (event: MouseEvent) => {
      if (!isPointOverGlobe(event.clientX, event.clientY)) return;
      autoRotate = false;
      canvas.style.cursor = "grabbing";
      const startX = event.clientX;
      const startY = event.clientY;
      const startRotation: [number, number] = [rotation[0], rotation[1]];

      const handleMouseMove = (moveEvent: MouseEvent) => {
        if (!isMounted) return;
        const sensitivity = 0.5;
        const dx = moveEvent.clientX - startX;
        const dy = moveEvent.clientY - startY;
        rotation[0] = startRotation[0] + dx * sensitivity;
        rotation[1] = Math.max(-90, Math.min(90, startRotation[1] - dy * sensitivity));
        projection.rotate(rotation);
        render();
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        currentHandleMouseMove = null;
        currentHandleMouseUp = null;
        if (canvas) canvas.style.cursor = isHoveringGlobe ? "grab" : "default";
        setTimeout(() => {
          if (isMounted) autoRotate = true;
        }, 10);
      };

      currentHandleMouseMove = handleMouseMove;
      currentHandleMouseUp = handleMouseUp;
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

    let touchStart: { x: number; y: number } | null = null;
    let touchStartRotation: [number, number] = [0, 0];
    let pinchStartDistance = 0;
    let pinchStartScale = radius;
    let isTouchGestureActive = false;

    const touchDistance = (t: TouchList) => {
      const dx = t[0].clientX - t[1].clientX;
      const dy = t[0].clientY - t[1].clientY;
      return Math.hypot(dx, dy);
    };

    const isTouchMidpointOverGlobe = (touches: TouchList) => {
      const firstTouch = touches[0];
      const secondTouch = touches[1];
      if (!firstTouch || !secondTouch) return false;

      return isPointOverGlobe(
        (firstTouch.clientX + secondTouch.clientX) / 2,
        (firstTouch.clientY + secondTouch.clientY) / 2,
      );
    };

    const resetTouchGesture = () => {
      isTouchGestureActive = false;
      touchStart = null;
      pinchStartDistance = 0;
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        const firstTouch = event.touches[0];
        if (!firstTouch || !isPointOverGlobe(firstTouch.clientX, firstTouch.clientY)) {
          resetTouchGesture();
          return;
        }

        event.preventDefault();
        isTouchGestureActive = true;
        autoRotate = false;
        touchStart = { x: firstTouch.clientX, y: firstTouch.clientY };
        touchStartRotation = [rotation[0], rotation[1]];
      } else if (event.touches.length === 2) {
        if (!isTouchGestureActive && !isTouchMidpointOverGlobe(event.touches)) {
          resetTouchGesture();
          return;
        }

        event.preventDefault();
        isTouchGestureActive = true;
        autoRotate = false;
        touchStart = null;
        pinchStartDistance = touchDistance(event.touches);
        pinchStartScale = projection.scale();
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isTouchGestureActive || !isMounted) return;

      event.preventDefault();

      if (event.touches.length === 1 && touchStart) {
        const sensitivity = 0.5;
        const firstTouch = event.touches[0];
        if (!firstTouch) return;
        const dx = firstTouch.clientX - touchStart.x;
        const dy = firstTouch.clientY - touchStart.y;
        rotation[0] = touchStartRotation[0] + dx * sensitivity;
        rotation[1] = Math.max(-90, Math.min(90, touchStartRotation[1] - dy * sensitivity));
        projection.rotate(rotation);
        render();
      } else if (event.touches.length === 2 && pinchStartDistance > 0) {
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
      if (!isTouchGestureActive) return;

      if (event.touches.length === 0) {
        resetTouchGesture();
        setTimeout(() => {
          if (isMounted) autoRotate = true;
        }, 10);
      } else if (event.touches.length === 1) {
        const firstTouch = event.touches[0];
        if (!firstTouch) return;
        pinchStartDistance = 0;
        touchStart = { x: firstTouch.clientX, y: firstTouch.clientY };
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

    loadData();

    return () => {
      isMounted = false;
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

      if (currentHandleMouseMove) {
        document.removeEventListener("mousemove", currentHandleMouseMove);
      }
      if (currentHandleMouseUp) {
        document.removeEventListener("mouseup", currentHandleMouseUp);
      }
    };
  }, [width, height]);

  if (error) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="text-center">
          <p className="text-red-500 font-semibold">Não foi possível carregar o globo</p>
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
        <p className="text-sm text-gray-400 mt-2">Carregando globo…</p>
      )}
      <p className="text-xs text-gray-500 mt-2">Arraste para girar • Role para ampliar</p>
    </div>
  );
}
