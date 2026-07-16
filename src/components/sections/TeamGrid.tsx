export function TeamGrid() {
  const members = [
    {
      name: "Carlos Gabriel F. Braga Bitencourt",
      image: "https://bragabitencourt.com/wp-content/uploads/2026/07/Carlos-Gabriel-Ferreira-Braga-Bitencourt-scaled.jpg"
    },
    {
      name: "Carlos Javét Braga Bitencourt",
      image: "https://bragabitencourt.com/wp-content/uploads/2026/07/Foto-do-site-J-3-scaled.jpg"
    },
    {
      name: "Gláucia Patrícia F. Braga Bitencourt",
      image: "https://bragabitencourt.com/wp-content/uploads/2026/07/Foto-do-Site-G-4-scaled.jpg"
    }
  ];

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Cityscape Background Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://bragabitencourt.com/wp-content/uploads/2026/06/cityscape-bg.jpg')" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-white text-5xl font-cinzel text-center mb-20 tracking-widest uppercase">
          Nossa Equipe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {members.map((member, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="relative overflow-hidden aspect-[3/4] rounded-sm shadow-2xl mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="bg-white p-6 rounded-sm shadow-xl text-center">
                <h3 className="text-navy text-xl font-bold font-montserrat">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
