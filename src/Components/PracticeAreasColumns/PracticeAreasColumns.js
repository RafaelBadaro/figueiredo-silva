import React from 'react';

export default function PracticeAreasColumns() {
    return (
        <section className="py-32 bg-surface-container-low px-12" id="areas">
            <div className="w-full">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <h2 className="font-headline text-4xl md:text-5xl text-on-surface font-black">Áreas de Atuação</h2>
                    </div>

                    {/* Areas de atuacao */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-12">
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
                            <li
                                key={idx}
                                className="flex items-center gap-3 py-3 border-b border-outline/5 font-label text-sm font-bold text-on-surface uppercase tracking-wide"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                {name}
                            </li>
                        ))}
                    </ul>

                    {/* Accordions */}
                    <div className="flex flex-col gap-4">

                        {/* Public Law */}
                        <details className="rounded-3xl overflow-hidden group">
                            <summary className="bg-primary-container p-8 flex items-center justify-between cursor-pointer list-none">
                                <h3 className="font-headline text-2xl font-bold text-white">Direito Público</h3>
                                <span className="material-symbols-outlined text-white transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="bg-primary-container px-8 pb-8">
                                <ul className="grid grid-cols-1 md:grid-cols-2">
                                    {[
                                        'Ações de improbidade administrativa',
                                        'Ações civis públicas',
                                        'Mandados de segurança',
                                        'Processos administrativos disciplinares',
                                        'Ações de concurso público',
                                        'Ações de ressarcimento ao erário',
                                        'Responsabilidade civil do Estado',
                                        'Ações de indenização'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 py-3 border-b border-white/5 text-sm text-white/80 uppercase tracking-wide font-label font-bold">
                                            <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </details>

                        {/* Private Law */}
                        <details className="rounded-3xl overflow-hidden group">
                            <summary className="bg-white p-8 flex items-center justify-between cursor-pointer list-none">
                                <h3 className="font-headline text-2xl font-bold text-on-surface">Direito Privado</h3>
                                <span className="material-symbols-outlined text-on-surface transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="bg-white px-8 pb-8">
                                <ul>
                                    {[
                                        'Sucessões e inventários',
                                        'Direito do consumidor',
                                        'Responsabilidade civil'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 py-3 border-b border-outline/5 text-sm text-on-surface-variant uppercase tracking-wide font-label font-bold">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </details>

                        {/* Corporate Compliance */}
                        <details className="rounded-3xl overflow-hidden group">
                            <summary className="bg-[#111c2e] p-8 flex items-center justify-between cursor-pointer list-none">
                                <h3 className="font-headline text-2xl font-bold text-white">Compliance para Empresas</h3>
                                <span className="material-symbols-outlined text-white transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="bg-[#111c2e] px-8 pb-8 flex flex-col lg:flex-row gap-12">
                                <div className="lg:w-1/2 space-y-6 flex flex-col justify-between">
                                    <div className="space-y-6">
                                        <p className="text-white/70 leading-relaxed text-sm">
                                            Atento às novidades legislativas e às recomendações e exigências mercadológicas, mormente àquela constante da Lei Anticorrupção (Lei n.º 12.846/13), de que empresas devem atestar sua seriedade mediante a apresentação de Programas de Integridade/Compliance.
                                        </p>
                                        <div className="space-y-3">
                                            {[
                                                { icon: 'menu_book', text: 'Elaboração de Códigos de Ética' },
                                                { icon: 'diversity_3', text: 'Cursos e palestras corporativos' },
                                                { icon: 'balance', text: 'Prevenção de violações à ordem jurídica' },
                                                { icon: 'verified', text: 'Desenvolvimento de cultura ética nas organizações' },
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <span
                                                        className="material-symbols-outlined text-secondary text-base shrink-0"
                                                        style={{ fontVariationSettings: "'FILL' 1" }}
                                                    >
                                                        {item.icon}
                                                    </span>
                                                    <p className="text-white/60 text-sm">{item.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 border border-secondary/30 bg-secondary/5 rounded-2xl p-5">
                                        <span
                                            className="material-symbols-outlined text-secondary text-xl mt-0.5 shrink-0"
                                            style={{ fontVariationSettings: "'FILL' 1" }}
                                        >
                                            info
                                        </span>
                                        <div className="space-y-2">
                                            <p className="text-white/60 text-sm leading-relaxed">
                                                Importante salientar que a existência de um Programa de Integridade é exigência para atuação no mercado internacional e, em alguns Estados, para a participação em procedimentos de Licitação.
                                            </p>
                                            <p className="text-white/60 text-sm leading-relaxed">
                                                O escritório conta com profissionais e parceiros para elaboração dos Programas em <span className="text-secondary font-semibold">inglês</span> e <span className="text-secondary font-semibold">espanhol</span>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </details>

                    </div>
                </div>
            </div>
        </section>
    );
}
