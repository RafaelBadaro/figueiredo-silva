import React from 'react';

export default function GlobalPresence() {
  return (
    <section className="relative py-32 bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#775a00_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="font-headline text-4xl md:text-6xl text-white font-bold mb-8">
              Presença Global, Atuação <span className="italic text-secondary">Soberana.</span>
            </h2>
            <p className="text-white/70 text-xl leading-relaxed mb-12">
              Nossa rede de colaboração internacional estende-se por mais de 14 países, garantindo que os interesses de nossos clientes sejam defendidos com a mesma excelência em qualquer jurisdição do mundo.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-secondary text-5xl font-headline font-black">14+</p>
                <p className="text-white/50 font-label text-xs uppercase tracking-widest mt-2">Países com Atuação Direta</p>
              </div>
              <div>
                <p className="text-secondary text-5xl font-headline font-black">30+</p>
                <p className="text-white/50 font-label text-xs uppercase tracking-widest mt-2">Parceiros Estratégicos Globais</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="aspect-video bg-primary-container relative p-1 rounded overflow-hidden group">
              <img
                alt="Centro Financeiro Global"
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBioVZuOUd-ukRDOTNF6KWxQF6M_vF2zxtVoXku_FcgMwZOK4Bq16FaCsD8yhwj4QnXpBe9QcZVrqLWPh5wrh7ltYTJmVd1eQ9nvchhzDYSDrfRTUJh65xJkUvAtE-u2YWUlFAsnorGrsO0NRgdKY7dVSnk2F3Etw3HklrVx7AJyFdPpRqYsGzB6V87Q1EtlX3taTXClr34OF0PR3i-OXCAYCoiLqaW--a-3gMD8rULlIkw3rVv3mcNsKu6bmToaMtCa2U42wp0sOc"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="material-symbols-outlined text-white" data-icon="public">
                    public
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
