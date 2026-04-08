# Figueiredo Silva Advogados - Website Single-Page

Este é um website profissional de página única (single-page application) para a firma de advocacia Figueiredo Silva, desenvolvido em **React** com **Tailwind CSS**.

## 🎯 Características

✅ **Design Responsivo** - Otimizado para desktop, tablet e mobile
✅ **Página Única** - Navegação suave com scroll em âncoras
✅ **Design System Profissional** - Baseado no padrão Material Design 3
✅ **Componentes Modernos** - Cada seção é um componente React reutilizável
✅ **Performance** - Otimizado para carregamento rápido
✅ **Acessibilidade** - Semântica HTML correta e navegação clara

## 📄 Seções da Página

1. **Navbar** - Navegação fixa com menu responsivo
2. **Hero** - Seção inicial impactante com CTA
3. **Diferenciais Estratégicos** - 3 pilares principais
4. **Sobre Nós** - Histórico e valores da firma
5. **Áreas de Atuação** - Grid assimétrico de especialidades
6. **Presença Global** - Alcance internacional
7. **Testemunho** - Social proof de cliente
8. **Contato** - Formulário e informações
9. **Footer** - Links e redes sociais
10. **WhatsApp FAB** - Botão flutuante para contato via WhatsApp

## 🚀 Como Executar

### Pré-requisitos
- Node.js 14+ 
- npm ou yarn

### Instalação

```bash
cd figueiredo-silva
npm install
```

### Development

```bash
npm start
```

A aplicação abrirá em `http://localhost:3000`

### Build para Produção

```bash
npm run build
```

Isso cria uma pasta `build/` otimizada para produção.

## 🎨 Customização

### Cores
As cores estão definidas em `tailwind.config.js`:
- **Primary**: #000000 (Preto)
- **Secondary**: #775a00 (Ouro)
- **Surface**: #faf8ff (Branco gelo)

### Fontes
- **Headlines**: Noto Serif (elegância jurídica)
- **Body**: Public Sans (clareza)
- **Labels**: Work Sans (eficiência)

### Imagens
Todas as imagens usam URLs diretas do Google (pode ser substituído por URLs locais)

## 📁 Estrutura de Arquivos

```
src/
├── Components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── PracticeAreas/
│   ├── GlobalPresence/
│   ├── Testimonial/
│   ├── Contact/
│   ├── Footer/
│   └── WhatsAppFAB/
├── App.js
├── App.css
├── index.css
└── index.js
```

## 🔧 Tecnologias Utilizadas

- **React 18** - Biblioteca UI
- **Tailwind CSS 3** - Framework de styling
- **Material Symbols** - Icons
- **PostCSS** - Processamento de CSS

## ✨ Recursos Especiais

- **Scroll Smooth** - Rolagem suave entre seções
- **Hover Effects** - Efeitos visuais ao passar o mouse
- **Responsive Images** - Imagens otimizadas para diferentes telas
- **Forms** - Formulário funcional de contato
- **Mobile Menu** - Menu móvel colapsável

## 📞 Informações de Contato

**Figueiredo Silva Advogados Associados**
- 📍 Av. Bias Fortes, 1200 - Lourdes, MG - Brasil
- 📞 +55 (31) 3300-4400
- 📧 contato@figueiredosilva.adv.br
- 💬 WhatsApp: Link flutuante na página

## 📝 Notas de Desenvolvimento

- O projeto usa `create-react-app` por padrão
- Roteamento foi removido (era React Router), agora é single-page
- Bootstrap foi removido e substituído por Tailwind CSS
- Todos os componentes são funcionais com Hooks
- CSS é processado por PostCSS + Tailwind

## 🚢 Deploy

A aplicação pode ser deployada em:
- **Vercel** (recomendado para React)
- **Netlify**
- **GitHub Pages**
- **Servidores tradicionais** (Express, Nginx, Apache)

---

**Desenvolvido com ❤️ como um website profissional para advocacia**
