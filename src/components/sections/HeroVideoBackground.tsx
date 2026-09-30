import heroVideo from "../../assets/hero-bg-optimized.mp4";
import heroPoster from "../../assets/hero-poster.webp";

export function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <video
        className="w-full h-full object-cover"
        src={heroVideo}
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-black/80" />
    </div>
  );
}
