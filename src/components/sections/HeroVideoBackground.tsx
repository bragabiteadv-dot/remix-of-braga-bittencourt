import heroVideoAsset from "../../assets/hero-bg.mp4.asset.json";

export function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <video
        className="w-full h-full object-cover"
        src={heroVideoAsset.url}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-black/80" />
    </div>
  );
}
