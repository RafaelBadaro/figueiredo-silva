import React from 'react';

export default function Contact() {
    return (
        <section className="py-32 px-6 md:px-12 bg-white" id="contato">
            <div className="w-full">
                <div className="w-full max-w-7xl mx-auto space-y-10">

                    <h2 className="font-headline text-4xl font-bold">Entre em contato</h2>

                    {/* Top row: contact info + form */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Contact info */}
                        <div className="rounded-3xl bg-surface-container-low p-10">
                            <div className="space-y-8">
                                <div className="grid gap-6">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.35em] text-on-surface-variant mb-2">Telefone Fixo</p>
                                        <p className="text-lg text-on-surface">(31) 3225-8468</p>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.35em] text-on-surface-variant mb-2">Celulares</p>
                                        <div className="space-y-4 text-lg text-on-surface leading-relaxed">
                                            <div>
                                                <p className="font-semibold">André</p>
                                                <p className="text-primary">99611-8468</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Cristiane</p>
                                                <p className="text-primary">99957-6884</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Laura</p>
                                                <p className="text-primary">99982-4806</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.35em] text-on-surface-variant mb-2">Endereço</p>
                                    <p className="text-lg text-on-surface leading-relaxed">
                                        Av. do Contorno, 8000 – sala 1709<br />Santo Agostinho, Belo Horizonte – MG, 30110-932
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.35em] text-on-surface-variant mb-2">Email</p>
                                    <a href="mailto:figueiredosilva@terra.com.br" className="text-lg text-secondary hover:underline break-all">
                                        figueiredosilva@terra.com.br
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="rounded-3xl bg-surface-container-low p-10">
                            <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
                                Para qualquer informação, dúvida ou comentário, por favor preencha o formulário:
                            </p>
                            <div className="space-y-5">
                                <div className="space-y-1.5">
                                    <label className="text-xs uppercase tracking-[0.35em] text-on-surface-variant">Seu nome</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Nome completo"
                                        className="w-full bg-white border border-outline/20 rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs uppercase tracking-[0.35em] text-on-surface-variant">Seu e-mail</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="email@exemplo.com"
                                        className="w-full bg-white border border-outline/20 rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs uppercase tracking-[0.35em] text-on-surface-variant">Assunto</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Assunto da mensagem"
                                        className="w-full bg-white border border-outline/20 rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs uppercase tracking-[0.35em] text-on-surface-variant">Sua mensagem</label>
                                    <textarea
                                        required
                                        rows={5}
                                        placeholder="Descreva sua dúvida ou comentário..."
                                        className="w-full bg-white border border-outline/20 rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary transition-colors resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white font-label font-bold text-sm uppercase tracking-widest py-4 rounded-xl hover:opacity-90 transition-opacity"
                                >
                                    Enviar mensagem
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Map full width */}
                    <div className="rounded-3xl overflow-hidden border border-outline/20 w-full">
                        <iframe
                            title="Localização do Escritório Figueiredo Silva"
                            src="https://www.google.com/maps?q=Av.+do+Contorno,+8000,+Santo+Agostinho,+Belo+Horizonte,+MG,+30110-932&output=embed"
                            className="w-full h-96"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
