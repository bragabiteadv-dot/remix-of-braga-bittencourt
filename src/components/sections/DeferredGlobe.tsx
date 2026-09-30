import { lazy, Suspense, useEffect, useRef, useState } from "react";

const RotatingEarth = lazy(() => import("@/components/ui/wireframe-dotted-globe"));

export function DeferredGlobe() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "500px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="flex min-h-[360px] w-full items-center justify-center md:min-h-[600px]">
      {shouldLoad ? (
        <Suspense fallback={<div className="h-[360px] w-full md:h-[600px]" aria-hidden="true" />}>
          <RotatingEarth width={600} height={600} />
        </Suspense>
      ) : null}
    </div>
  );
}