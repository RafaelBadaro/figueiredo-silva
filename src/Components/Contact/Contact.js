import React from 'react';

export default function Contact() {
  return (
    <section className="py-32 px-12 bg-white" id="contato">
      <div className="w-full">
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-10">
            <div>
              <h2 className="font-headline text-4xl font-bold mb-4">Entre em contato</h2>
            </div>

            <div className="rounded-3xl bg-surface-container-low p-10 shadow-lg shadow-slate-200/30">
              <div className="space-y-8">
                <div>
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
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-on-surface-variant mb-3">Endereço</p>
                  <p className="text-lg text-on-surface leading-relaxed">
                    Av. do Contorno, 8000 – sala 1709<br />Santo Agostinho, Belo Horizonte – MG, 30110-932
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-on-surface-variant mb-3">Email</p>
                  <a href="mailto:figueiredosilva@terra.com.br" className="text-lg text-secondary hover:underline">figueiredosilva@terra.com.br</a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-outline">
            <iframe
              title="Localização do Escritório Figueiredo Silva"
              src="https://www.google.com/maps?q=Av.+do+Contorno,+8000,+Santo+Agostinho,+Belo+Horizonte,+MG,+30110-932&output=embed"
              className="w-full h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
