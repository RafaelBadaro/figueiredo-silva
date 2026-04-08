import React from 'react';

export default function StrategicDifferentiators() {
  const differentiators = [
    {
      icon: 'gavel',
      title: 'Rigor Analítico',
      description: 'Escrutínio profundo e fundamentação exaustiva em cada parecer, assegurando segurança jurídica absoluta em decisões críticas.',
    },
    {
      icon: 'encrypted',
      title: 'Confidencialidade',
      description: 'Protocolos rigorosos de sigilo que protegem o patrimônio intelectual e a reputação de nossos constituintes em nível global.',
    },
    {
      icon: 'trending_up',
      title: 'Resultados',
      description: 'Foco incessante na resolução eficaz, transformando complexidades jurídicas em vantagens competitivas sustentáveis.',
    },
  ];

  return (
    <section className="bg-primary-container py-24 px-12">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {differentiators.map((item) => (
          <div key={item.title} className="group">
            <span
              className="material-symbols-outlined text-secondary text-5xl mb-6"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {item.icon}
            </span>
            <h3 className="font-headline text-2xl text-white mb-4">{item.title}</h3>
            <p className="text-white/60 leading-relaxed font-light">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
