import React from 'react';

export default function PracticeAreasColumns() {
  return (
    <section className="py-32 bg-surface-container-low px-12" id="areas">
      <div className="w-full">
        <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="font-headline text-4xl md:text-5xl text-on-surface font-black">Áreas de Atuação</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          <div className="md:col-span-12 mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Justiça Comum',
                'Justiça Federal',
                'Juizados Especiais',
                'Tribunais Superiores',
                'Órgão Especial TJMG',
                'Conselho Nacional de Justiça',
                'Corregedoria Geral do Estado de Minas Gerais',
                'Corregedoria de Justiça'
              ].map((name, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded text-center hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center min-h-[120px]"
                >
                  <p className="font-label text-sm font-bold text-on-surface uppercase tracking-wide leading-snug">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Public Law */}
          <div className="md:col-span-8 bg-white p-12 flex flex-col justify-between min-h-[520px] transition-all hover:-translate-y-1">
            <div>
              <span
                className="material-symbols-outlined text-secondary text-4xl mb-6"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                gavel
              </span>
              <h3 className="font-headline text-3xl font-bold mb-2">Direito Público</h3>
              <p className="text-secondary font-label text-xs uppercase tracking-[0.3em] font-bold mb-6">Defesas em Instâncias Administrativas e Judiciais</p>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Defesa técnica e estratégica em casos envolvendo o Estado, garantindo a proteção de interesses públicos e privados com precisão e experiência.
              </p>
              <div className="space-y-3">
                {[
                  'Ações de improbidade administrativa',
                  'Ações civis públicas',
                  'Mandados de segurança',
                  'Processos administrativos disciplinares',
                  'Ações de concurso público',
                  'Ações de ressarcimento ao erário',
                  'Ações de responsabilidade civil do Estado',
                  'Ações de indenização'
                ].map((item, idx) => (
                  <p key={idx} className="text-sm text-on-surface-variant leading-6">• {item}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Private Law */}
          <div className="md:col-span-4 bg-primary-container p-12 text-white flex flex-col justify-between min-h-[520px] transition-all hover:-translate-y-1">
            <div>
              <span
                className="material-symbols-outlined text-secondary text-4xl mb-6"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                family_history
              </span>
              <h3 className="font-headline text-3xl font-bold mb-2">Direito Privado</h3>
              <p className="text-secondary/80 font-label text-xs uppercase tracking-[0.3em] font-bold mb-6">Defesas Estratégicas em Relações Privadas</p>
              <p className="text-white/80 mb-8 leading-relaxed">
                Defesa diferenciada em questões patrimoniais, consumistas e de responsabilidade civil, com atuação precisa para proteger interesses individuais e corporativos.
              </p>
              <div className="space-y-3">
                {['Sucessões e inventários', 'Direito do consumidor', 'Responsabilidade civil'].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-xl mt-1">check_circle</span>
                    <span className="text-sm uppercase tracking-wide font-label">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Corporate Compliance */}
          <div className="md:col-span-12 bg-[#111c2e] text-white p-12 rounded-3xl flex flex-col lg:flex-row gap-8 transition-all hover:shadow-2xl">
            <div className="lg:w-1/2 space-y-6">
              <span
                className="material-symbols-outlined text-secondary text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                shield
              </span>
              <h3 className="font-headline text-3xl font-bold">Compliance para Empresas</h3>
              <p className="text-secondary/80 font-label text-xs uppercase tracking-[0.3em] font-bold">Lei Anticorrupção | Integridade Corporativa</p>
              <p className="text-white/80 leading-relaxed">
                Atento às novidades legislativas e às exigências mercadológicas, o escritório desenvolve Programas de Integridade conforme a Lei n.º 12.846/13, elaborando códigos de ética e promovendo capacitação para consolidar uma cultura ética duradoura.
              </p>
              <p className="text-white/70 italic border-l-4 border-secondary pl-4">
                A existência de Programa de Integridade é hoje critério de mercado internacional e requisito em licitações. Oferecemos produção em inglês e espanhol para empresas com atuação global.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {[
                { title: 'Programas de Integridade', icon: 'shield' },
                { title: 'Cursos & Palestras', icon: 'school' },
                { title: 'Multilíngue', icon: 'translate' },
                { title: 'Atuação Internacional', icon: 'public' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 border border-white/10 backdrop-blur-sm p-6 rounded-2xl flex flex-col gap-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">{item.icon}</span>
                  <p className="text-sm uppercase tracking-[0.3em] font-label font-bold">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
        </div>
      </div>
    </section>
  );
}
