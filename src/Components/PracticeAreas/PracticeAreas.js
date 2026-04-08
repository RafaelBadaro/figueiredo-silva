import React from 'react';

export default function PracticeAreas() {
  return (
    <section className="py-32 bg-surface-container-low px-12" id="areas">
      <div className="max-w-[1920px] mx-auto">
        <div className="mb-20">
          <span className="font-label text-secondary uppercase tracking-[0.3em] text-sm mb-4 block">Expertise</span>
          <h2 className="font-headline text-4xl md:text-5xl text-on-surface font-black">Áreas de Atuação</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Public Law */}
          <div className="md:col-span-8 bg-white p-12 flex flex-col justify-between min-h-[400px] transition-all hover:translate-y-[-4px]">
            <div>
              <span
                className="material-symbols-outlined text-secondary text-4xl mb-6"
                data-icon="account_balance"
              >
                account_balance
              </span>
              <h3 className="font-headline text-3xl font-bold mb-6">Direito Público</h3>
              <p className="text-on-surface-variant max-w-lg">
                Atuamos na intersecção entre o Estado e a iniciativa privada, oferecendo suporte em licitações, contratos administrativos e regulação setorial com precisão técnica absoluta.
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-4 font-label text-xs uppercase tracking-wider text-secondary font-bold">
              <li>• Administrativo</li>
              <li>• Regulatório</li>
              <li>• Tributário</li>
              <li>• Urbanístico</li>
            </ul>
          </div>

          {/* Private Law */}
          <div className="md:col-span-4 bg-primary-container p-12 text-white flex flex-col justify-between transition-all hover:translate-y-[-4px]">
            <div>
              <span
                className="material-symbols-outlined text-secondary text-4xl mb-6"
                data-icon="family_history"
              >
                family_history
              </span>
              <h3 className="font-headline text-3xl font-bold mb-6">Direito Privado</h3>
              <p className="text-white/60">
                Proteção patrimonial, sucessões e relações civis complexas tratadas com a discrição e sensibilidade que o âmbito privado exige.
              </p>
            </div>
            <button className="mt-8 text-secondary font-label text-sm uppercase tracking-widest border-b border-secondary/30 pb-2 self-start hover:border-secondary transition-all">
              Ver Detalhes
            </button>
          </div>

          {/* Corporate Compliance */}
          <div className="md:col-span-12 bg-surface-container-high p-12 flex flex-col md:flex-row items-center gap-12 transition-all hover:translate-y-[-4px]">
            <div className="md:w-1/2">
              <span
                className="material-symbols-outlined text-secondary text-4xl mb-6"
                data-icon="verified_user"
              >
                verified_user
              </span>
              <h3 className="font-headline text-3xl font-bold mb-6">Corporate Compliance &amp; Ética</h3>
              <p className="text-on-surface-variant">
                Implementação de programas de integridade e governança corporativa, mitigando riscos e fortalecendo a cultura ética institucional de nossos clientes.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded">
                <p className="text-2xl font-headline font-bold text-primary">0%</p>
                <p className="text-[10px] font-label uppercase tracking-tighter">Risco Residual em Auditorias</p>
              </div>
              <div className="bg-white p-6 rounded">
                <p className="text-2xl font-headline font-bold text-primary">100+</p>
                <p className="text-[10px] font-label uppercase tracking-tighter">Empresas Certificadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
