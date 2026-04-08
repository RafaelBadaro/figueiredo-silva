import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden" id="inicio">
      <div className="absolute inset-0 z-0">
        <img
          alt="Escritório de Advocacia Clássico"
          className="w-full h-full object-cover brightness-[0.4]"
          src="/capa-hero.jpg"
        />
      </div>
      
      <div className="container mx-auto px-12 relative z-10">
        <div className="max-w-4xl">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-white font-black leading-[1.1] tracking-tight mb-8">
            Excelência Jurídica em <span className="text-secondary">Territórios</span> Complexos.
          </h1>
          <p className="text-white/80 text-xl md:text-2xl max-w-2xl mb-12 font-light leading-relaxed">
            Combinamos o rigor analítico de sete décadas com a agilidade necessária para navegar na vanguarda do direito contemporâneo.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#contato"
              className="bg-secondary text-white px-10 py-5 rounded font-label font-bold uppercase tracking-widest text-center hover:brightness-110 transition-all"
            >
              Agendar Consultoria
            </a>
            <a
              href="#sobre-nos"
              className="border border-white/30 text-white px-10 py-5 rounded font-label font-bold uppercase tracking-widest text-center hover:bg-white/10 transition-all"
            >
              Nossa História
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-secondary"></div>
    </section>
  );
}
