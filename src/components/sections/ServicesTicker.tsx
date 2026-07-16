export function ServicesTicker() {
  const services = [
    "DIREITO DE FAMÍLIA",
    "DIREITO DAS SUCESSÕES",
    "DIREITO INTERNACIONAL",
  ];

  // Repeat for a long ticker
  const items = [...services, ...services, ...services, ...services, ...services, ...services];

  return (
    <section className="py-12 bg-white border-y border-navy/5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((service, idx) => (
          <div key={idx} className="flex items-center mx-8">
            <span className="text-navy/20 mr-8 text-xl">⚖</span>
            <span className="text-navy text-lg font-cinzel font-semibold tracking-widest uppercase">
              {service}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
