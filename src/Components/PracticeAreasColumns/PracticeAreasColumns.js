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
                        <div className="md:col-span-9 bg-primary-container p-12 flex flex-col justify-between transition-all hover:-translate-y-1 rounded-3xl">
                            <div>
                                <h3 className="font-headline text-3xl font-bold mb-8 text-white">Direito Público</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                                        <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 border border-white/10">
                                            <p className="text-sm text-white/80 leading-snug">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Private Law */}
                        <div className="md:col-span-3 bg-white p-8 text-white flex flex-col justify-between transition-all hover:-translate-y-1 rounded-3xl">
                            <div>
                                <h3 className="font-headline text-3xl font-bold mb-8 text-on-surface">Direito Privado</h3>
                                <div className="space-y-3">
                                    {[
                                        'Sucessões e inventários',
                                        'Direito do consumidor',
                                        'Responsabilidade civil'
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center justify-center p-3 rounded-xl bg-surface-variant/40 border border-outline/10">
                                            <span className="text-sm uppercase tracking-wide font-label text-center text-on-surface-variant">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Corporate Compliance */}
                        <div className="md:col-span-12 bg-[#111c2e] text-white p-12 rounded-3xl flex flex-col lg:flex-row gap-12 transition-all hover:shadow-2xl">
                            <div className="lg:w-1/2 space-y-6 flex flex-col justify-between">
                                <div className="space-y-6">
                                    <h3 className="font-headline text-3xl font-bold">Compliance para Empresas</h3>
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

                    </div>
                </div>
            </div>
        </section>
    );
}
