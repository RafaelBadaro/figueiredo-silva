import React from 'react';

export default function About() {
  return (
    <section className="py-32 px-12 bg-surface" id="sobre-nos">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-24 items-center">
        <div className="lg:w-1/2 relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-surface-container-high z-0"></div>
          <img
            alt="Retrato Profissional"
            className="relative z-10 w-full aspect-[4/5] object-cover grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAl-QaN1ywTEggyPuCMOL8ufRe2b2sdWw27woIeBXzznSoB0HfyyvdDHSMMXk02nOQBLZrP2HJxihvMSCXQ2m9KqOXyTfh8wfmcZMaam35oVyPMHDxZQ5oaOVXmWsTGXzbUFWFW9M2NrSvwHEgSxhviU2dEgS50x1Kek5lYEaEw9CvANYRPFoJeA5qDTasdLKE2JOcELQgN6s0b2qEWc-QDB4aSGoHwXKfxpOtRPFPYdbFLK4iy65UbbNjOYifCQOATBwPR8E5eP8"
          />
          <div className="absolute -bottom-8 -right-8 bg-secondary p-8 text-white z-20">
            <p className="text-4xl font-headline font-black">70</p>
            <p className="font-label text-xs uppercase tracking-widest">Anos de Legado</p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="font-headline text-4xl md:text-6xl text-on-surface font-bold leading-tight mb-8">
            Três gerações de <span className="text-secondary italic">advocacia de vanguarda.</span>
          </h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>
              Fundada pelo Dr. Octávio Silva, nossa banca consolidou-se como referência em Belo Horizonte através do rigor e da ética. A segunda geração, liderada pela Dra. Helena Figueiredo, expandiu nossas fronteiras para o âmbito nacional e corporativo.
            </p>
            <p>
              Hoje, sob a gestão de André e Cristiane, a Figueiredo Silva Advogados Associados une essa herança histórica às demandas tecnológicas e regulatórias do século XXI, mantendo o compromisso inabalável com a justiça.
            </p>
          </div>
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px w-24 bg-outline-variant"></div>
            <span className="font-headline font-bold text-primary italic">A Família Figueiredo Silva</span>
          </div>
        </div>
      </div>
    </section>
  );
}
