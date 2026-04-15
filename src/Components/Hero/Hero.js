import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-screen min-h-screen  bg-[#faf8ff] dark:bg-[#050F21] flex items-center pt-24 overflow-hidden" id="inicio">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          alt="Escritório de Advocacia Clássico"
          className="w-full h-full object-cover brightness-[0.4] animate-slide-in"
          src="/capa-hero.jpg"
        />
      </div>


      {/* <div className="w-full px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-white font-black leading-[1.1] tracking-tight mb-8">
              Mais de <span className="text-secondary relative inline-block
  after:content-[''] after:absolute after:left-0 after:bottom-0
  after:h-[2px] after:w-0 after:bg-secondary
  after:transition-all after:duration-500
  hover:after:w-full">
                70&nbsp;anos
              </span> de advocacia.
            </h1>
            <p className="text-white/80 text-xl md:text-2xl max-w-2xl mb-12 font-light leading-relaxed">
              Da tradição do Dr. José de Figueiredo Silva à advocacia moderna. Um sobrenome de peso, um compromisso inabalável com a justiça.
            </p>
          </div>
        </div>
      </div> */}

      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slideIn 1.2s ease-out forwards;
        }
      `}</style>

    </section>
  );
}
