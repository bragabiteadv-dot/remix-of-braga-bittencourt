import escritorioHero from "../../assets/escritorio-hero.jpg.asset.json";

export function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <img
        className="w-full h-full object-cover"
        src={escritorioHero.url}
        alt="Escritório Braga Bitencourt Advogados"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-black/80" />
    </div>
  );
}
