import React from 'react';

export default function About() {
    return (
        <section className="py-32 px-12 bg-surface" id="sobre-nos">
            <div className="w-full">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
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

                    <div className="lg:w-1/2 w-full">
                        <img
                            src="/andre-cristiane.png"
                            alt="André e Cristiane Campos de Figueiredo Silva"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}