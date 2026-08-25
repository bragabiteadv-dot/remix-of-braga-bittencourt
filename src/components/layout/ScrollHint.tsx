import { useEffect, useState } from "react";

type ScrollHintProps = {
  /** distance from the top of the viewport in px (desktop) */
  topOffset?: number;
};

export function ScrollHint({ topOffset = 84 }: ScrollHintProps) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const footer = document.querySelector("footer");
      let atFooter = false;
      if (footer) {
        const rect = footer.getBoundingClientRect();
        atFooter = rect.top <= window.innerHeight * 0.9;
      } else {
        atFooter =
          window.scrollY + window.innerHeight >= doc.scrollHeight - 120;
      }
      setHidden(atFooter);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`fixed left-1/2 -translate-x-1/2 z-40 pointer-events-none transition-all duration-500 ${
        hidden ? "opacity-0 -translate-y-2" : "opacity-100"
      }`}
      style={{ top: topOffset }}
    >
      <div className="flex items-center gap-3 rounded-full bg-navy/70 backdrop-blur-md border border-gold-light/25 px-3.5 py-1.5 shadow-lg">
        <span className="relative flex h-7 w-4 items-start justify-center overflow-hidden rounded-full border border-gold-light/60">
          <span className="scroll-hint-dot" />
        </span>
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-gold-light/90 font-semibold whitespace-nowrap">
          Role para continuar
        </span>
      </div>
    </div>
  );
}
