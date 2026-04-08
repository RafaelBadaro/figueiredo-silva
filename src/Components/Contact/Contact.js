import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar lógica de envio do formulário
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-32 px-12 bg-white" id="contato">
      <div className="w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
        <div className="lg:w-1/3">
          <h2 className="font-headline text-4xl font-bold mb-8">
            Inicie sua <span className="text-secondary">Consulta Prioritária</span>
          </h2>
          <p className="text-on-surface-variant mb-12 leading-relaxed">
            Nossa equipe está preparada para oferecer o atendimento ágil e especializado que sua demanda exige. Entre em contato para uma avaliação preliminar.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary">location_on</span>
              <div>
                <h4 className="font-label text-xs uppercase font-bold tracking-widest mb-1">Sede Belo Horizonte</h4>
                <p className="text-on-surface-variant">Av. Bias Fortes, 1200<br />Lourdes, MG - Brasil</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary">call</span>
              <div>
                <h4 className="font-label text-xs uppercase font-bold tracking-widest mb-1">Telefone</h4>
                <p className="text-on-surface-variant">+55 (31) 3300-4400</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary">mail</span>
              <div>
                <h4 className="font-label text-xs uppercase font-bold tracking-widest mb-1">E-mail</h4>
                <p className="text-on-surface-variant">contato@figueiredosilva.adv.br</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 bg-surface-container-low p-8 md:p-12">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Nome Completo</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border-b border-outline outline-none focus:border-secondary transition-all py-2 font-body text-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">E-mail Corporativo</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border-b border-outline outline-none focus:border-secondary transition-all py-2 font-body text-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Assunto de Urgência</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-transparent border-b border-outline outline-none focus:border-secondary transition-all py-2 font-body text-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Telefone / WhatsApp</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-transparent border-b border-outline outline-none focus:border-secondary transition-all py-2 font-body text-primary"
              />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Breve Síntese da Demanda</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="bg-transparent border-b border-outline outline-none focus:border-secondary transition-all py-2 font-body text-primary resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-primary text-white py-6 font-label uppercase font-bold tracking-[0.2em] hover:bg-secondary transition-all"
              >
                Enviar Requisição
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </section>
  );
}
