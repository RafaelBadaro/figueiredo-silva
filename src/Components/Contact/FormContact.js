import React, { useState } from 'react';

export default function FormContact() {
    const [fields, setFields] = useState({
        nome: '', email: '', assunto: '', mensagem: ''
    });
    const [touched, setTouched] = useState({
        nome: false, email: false, assunto: false, mensagem: false
    });

    const errors = {
        nome: !fields.nome.trim() ? 'Campo obrigatório' : '',
        email: !fields.email.trim() ? 'Campo obrigatório' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) ? 'E-mail inválido' : '',
        assunto: !fields.assunto.trim() ? 'Campo obrigatório' : '',
        mensagem: !fields.mensagem.trim() ? 'Campo obrigatório' : '',
    };

    const isValid = Object.values(errors).every(e => !e);

    const handleChange = (e) => {
        setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleBlur = (e) => {
        setTouched(prev => ({ ...prev, [e.target.name]: true }));
    };

    const handleSubmit = () => {
        const mailto = `mailto:laura@figueiredosilva.com?subject=${encodeURIComponent(fields.assunto)}&body=${encodeURIComponent(`Nome: ${fields.nome}\nE-mail: ${fields.email}\n\n${fields.mensagem}`)}`;
        window.location.href = mailto;
    };

    const inputClass = (name) =>
        `w-full bg-white border rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none transition-colors ${touched[name] && errors[name] ? 'border-red-400' : 'border-outline/20 focus:border-primary'
        }`;

    return (
        <div className="space-y-5">
            {[
                { name: 'nome', label: 'Seu nome', type: 'text', placeholder: 'Nome completo' },
                { name: 'email', label: 'Seu e-mail', type: 'email', placeholder: 'email@exemplo.com' },
                { name: 'assunto', label: 'Assunto', type: 'text', placeholder: 'Assunto da mensagem' },
            ].map(({ name, label, type, placeholder }) => (
                <div key={name} className="space-y-1.5">
                    <label className="text-xs uppercase tracking-[0.35em] text-on-surface-variant">{label}</label>
                    <input
                        type={type}
                        name={name}
                        required
                        placeholder={placeholder}
                        value={fields[name]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClass(name)}
                    />
                    {touched[name] && errors[name] && (
                        <p className="text-xs text-red-500">{errors[name]}</p>
                    )}
                </div>
            ))}

            <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-[0.35em] text-on-surface-variant">Sua mensagem</label>
                <textarea
                    name="mensagem"
                    required
                    rows={5}
                    placeholder="Descreva sua dúvida ou comentário..."
                    value={fields.mensagem}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputClass('mensagem')} resize-none`}
                />
                {touched['mensagem'] && errors['mensagem'] && (
                    <p className="text-xs text-red-500">{errors['mensagem']}</p>
                )}
            </div>

            <button
                type="button"
                onClick={handleSubmit}
                disabled={!isValid}
                className="w-full bg-primary text-white font-label font-bold text-sm uppercase tracking-widest py-4 rounded-xl transition-opacity hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed"
            >
                Enviar mensagem
            </button>
        </div>
    );
}