import React from 'react';

export default function About() {
    return (
        <section className="py-32 px-4 md:px-12 bg-surface scroll-mt-2 md:scroll-mt-24" id="quem-somos">
            <div className="w-full">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
                    {/* Timeline */}
                    <div className="lg:w-1/2">
                        <h2 className="font-headline text-4xl md:text-6xl text-on-surface font-bold leading-tight mb-8">
                            Quem somos
                        </h2>
                        <div className="space-y-0">
                            {[
                                {
                                    period: '1908 – 1978',
                                    name: 'José de Figueiredo Silva',
                                    generation: '1ª Geração',
                                    desc: 'Figura emblemática da advocacia mineira. Recebeu de Juscelino Kubitschek o apelido de "Advogado Geral contra o Estado". Escrevia peças processuais com a precisão de um poeta.'
                                },
                                {
                                    period: '1940 – 1980',
                                    name: 'Erasmo Barros de Figueiredo Silva',
                                    generation: '2ª Geração',
                                    desc: 'Herdou o gosto por advogar contra o Poder Público e o apreço pela literatura. Atuou com dedicação perante a OAB e na luta contra a Ditadura.'
                                },
                                {
                                    period: '1966 · 1968',
                                    name: 'Cristiane & André Campos',
                                    generation: '3ª Geração',
                                    desc: 'Mantêm o mesmo espírito combativo e altaneiro, perpetuando a forte ligação familiar com o Direito e a advocacia mineira.'
                                },
                                {
                                    period: '2025 · Presente',
                                    name: 'Laura Figueiredo Silva',
                                    generation: '4ª Geração',
                                    desc: 'Coisinha mais linda di todas gente'
                                }
                            ].map((item, idx, arr) => (
                                <div key={idx} className="flex gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="w-3 h-3 rounded-full bg-secondary shrink-0 mt-1.5" />
                                        {idx < arr.length - 1 && <div className="w-px flex-1 bg-outline/20 my-1" />}
                                    </div>
                                    <div className={`pb-8 ${idx === arr.length - 1 ? 'pb-0' : ''}`}>
                                        <span className="text-xs font-label font-bold uppercase tracking-[0.2em] text-secondary">{item.generation} · {item.period}</span>
                                        <h4 className="font-headline text-lg font-bold text-on-surface mt-1 mb-2">{item.name}</h4>
                                        <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full order-last">
                        <img
                            src="/andre-cristiane.png"
                            alt="André e Cristiane Campos de Figueiredo Silva"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                </div>

                {/* Our team */}
                <section className="py-32 px-4 md:px-12 bg-surface-container-low">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-12">
                            <h2 className="font-headline text-4xl md:text-5xl text-on-surface font-black">Nossa equipe</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    name: 'André Campos de Figueiredo Silva',
                                    initials: 'AC',
                                    desc: 'Advogado especialista em Direito Administrativo, Direito Notarial e Registral. (CEDIN)'
                                },
                                {
                                    name: 'Cristiane Campos de Figueiredo Silva',
                                    initials: 'CC',
                                    desc: 'Advogada Mestre em Direito Administrativo pela UFMG, Professora de Pós-Graduação de Direito Administrativo do CAD. Ex-Gerente da Procuradoria Geral do Município de Belo Horizonte e membro da Comissão de Direito Urbanístico da OAB – Seção Minas Gerais.'
                                },
                                {
                                    name: 'Laura Fernandes de Figueiredo Silva',
                                    initials: 'LF',
                                    desc: 'Advogada mais linda da terra.'
                                }
                            ].map((person, idx) => (
                                <div key={idx} className="bg-white rounded-3xl p-8 flex flex-col gap-6 border border-outline/5">
                                    <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                                        <span className="font-headline font-bold text-lg text-white">{person.initials}</span>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-headline text-lg font-bold text-on-surface leading-snug">{person.name}</h3>
                                        <p className="text-sm text-on-surface-variant leading-relaxed">{person.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </section>
    );
}