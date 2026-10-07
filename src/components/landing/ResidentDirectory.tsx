import { RESIDENT_CATALOGUE, RESIDENT_SERVICES } from "@/lib/resident-landings";

export function ResidentDirectory() {
  return (
    <section className="py-20 bg-navy text-primary-foreground">
      <div className="container mx-auto max-w-5xl">
        <h1 className="font-cinzel text-3xl md:text-4xl mb-6">Serviços no Brasil para residentes no exterior</h1>
        <p className="font-montserrat leading-relaxed mb-10">Família, sucessões e Direito Internacional Privado: encontre a orientação para o serviço e o local de residência. Atendimento online e nas sedes em Belo Horizonte e Betim.</p>
        <div className="space-y-4">
          {RESIDENT_SERVICES.filter((service) => service.id !== "sequestro-internacional-criancas").map((service) => (
            <details key={service.id} className="border-b border-primary-foreground/20 pb-4">
              <summary className="cursor-pointer font-montserrat font-semibold py-3 text-gold-light">{service.shortTitle}</summary>
              <p className="text-sm leading-relaxed my-4">{service.summary}</p>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm font-montserrat py-4">
                {RESIDENT_CATALOGUE.filter((entry) => entry.serviceId === service.id && entry.path === entry.target).map((entry) => (
                  <li key={entry.path}><a href={entry.path} className="underline underline-offset-4">{entry.locationId === null ? "Atendimento geral no Brasil" : entry.locationName}</a></li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}