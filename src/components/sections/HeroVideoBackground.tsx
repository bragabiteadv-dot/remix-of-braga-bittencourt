import heroVideo from "../../assets/hero-bg.mp4";

export function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <video
        className="w-full h-full object-cover"
        src={heroVideo}
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
