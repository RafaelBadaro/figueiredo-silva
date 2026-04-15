import FormContact from './FormContact';

export default function Contact() {
    return (
        <section className="py-32 px-6 md:px-12 bg-white scroll-mt-2 md:scroll-mt-24" id="contato">
            <div className="w-full">
                <div className="w-full max-w-7xl mx-auto space-y-10">

                    <h2 className="font-headline text-4xl font-bold uppercase">Entre em contato</h2>

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
                                                <p className="font-semibold">André Campos de Figueiredo Silva</p>
                                                <p className="text-primary">(31) 99611-8468</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Cristiane Campos de Figueiredo Silva</p>
                                                <p className="text-primary">(31) 99957-6884</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Laura Fernandes de Figueiredo Silva</p>
                                                <p className="text-primary">(31) 99982-4806</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.35em] text-on-surface-variant mb-2">Endereço</p>
                                    <p className="text-lg text-on-surface leading-relaxed">
                                        Av. do Contorno, 8000 – sala 1708 e 1709<br />Santo Agostinho, Belo Horizonte – MG, 30110-932
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.35em] text-on-surface-variant mb-2">
                                        Email
                                    </p>

                                    <div className="flex flex-col gap-4 sm:gap-2">
                                        <a
                                            href="mailto:andre@figueiredosilva.com"
                                            className="text-lg text-secondary hover:underline break-all"
                                        >
                                            andre@figueiredosilva.com
                                        </a>

                                        <a
                                            href="mailto:laura@figueiredosilva.com"
                                            className="text-lg text-secondary hover:underline break-all"
                                        >
                                            laura@figueiredosilva.com
                                        </a>

                                        <a
                                            href="mailto:figueiredosilva@terra.com.br"
                                            className="text-lg text-secondary hover:underline break-all"
                                        >
                                            figueiredosilva@terra.com.br
                                        </a>

                                        <a
                                            href="mailto:cris.camposfiguei@gmail.com"
                                            className="text-lg text-secondary hover:underline break-all"
                                        >
                                            cris.camposfiguei@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="rounded-3xl bg-surface-container-low p-10">
                            <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
                                Para qualquer informação, dúvida ou comentário, por favor preencha o formulário:
                            </p>
                            <FormContact />
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
