# Next.js Blockchain Portfolio

A premium, production-ready portfolio website for Senior Blockchain Engineers. Built with Next.js, featuring a luxury dark theme, smooth animations, and responsive design.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

```bash
npm run build
npm start
```

## 📋 Features

- **Hero Section**: Animated background with particle network visualization
- **About & Value**: Two-column layout with quick facts and value propositions
- **Featured Work**: Card-based case study gallery with modal details
- **Skills & Tooling**: Tabbed interface with skill categories and tooltips
- **Experience Timeline**: Vertical timeline with company information and highlights
- **Contact Form**: Functional contact form with validation
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Accessibility**: ARIA labels, keyboard navigation, reduced motion support
- **Performance**: Optimized animations, lazy loading, smooth interactions

## 🎨 Design System

### Colors

- **Background**: `#0a0e27` (Dark)
- **Accent Gold**: `#d4af37` (Primary)
- **Accent Blue**: `#00d9ff` (Secondary)
- **Text Primary**: `#f5f7fa`
- **Text Secondary**: `#a0aec0`

### Typography

- **Headings**: Modern sans-serif with high contrast
- **Body**: System fonts optimized for readability (16-18px)
- **Code**: Monospaced font for technical content

### Spacing & Grid

- **Max Content Width**: 1280px
- **12-column grid** on desktop, **single-column** on mobile
- **Consistent section spacing**: 80-120px between major sections

## 🔧 Customization

### Update Portfolio Info

Edit `components/FeaturedWork.tsx`, `components/Experience.tsx`, and `app/page.tsx` to add your own:
- Project case studies
- Work experience
- Skills and expertise
- Contact information

### Modify Colors

Update CSS variables in `app/globals.css`:

```css
:root {
  --accent-gold: #d4af37;
  --accent-blue: #00d9ff;
  /* ... other variables */
}
```

### Change Font

Modify `body` font-family in `app/globals.css`

## 📱 Sections

1. **Navigation** - Sticky top bar with smooth scroll and mobile menu
2. **Hero** - Full-screen introduction with animated background
3. **About** - Professional narrative and quick facts
4. **Featured Work** - Curated case studies with detailed modals
5. **Skills** - Tabbed interface with categorized expertise
6. **Experience** - Timeline-based work history
7. **Contact** - Contact methods and inquiry form
8. **Footer** - Navigation, social links, and scroll progress indicator

## 🎯 Performance

- Intersection Observer for section animations
- CSS-based animations (performant)
- Optimized images and lazy loading
- Minimal JavaScript bundle size

## 📄 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## ✨ Animation Details

- All animations: ~300ms
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Respects `prefers-reduced-motion` setting
- Smooth scroll behavior

## 🚢 Deployment

Deploy to Vercel, Netlify, or any Node.js hosting:

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Build Output

```bash
npm run build
```

Generates optimized static files in `.next/` directory.

## 📚 Technologies

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Animations**: CSS + Framer Motion
- **Build Tool**: Next.js built-in

## 🔒 Security

- No external dependencies for critical functionality
- Form validation built-in
- CSRF-safe form handling
- Content Security Policy ready

## 🤝 Contributing

Feel free to customize and extend this template for your portfolio.

## 📖 Documentation

For Next.js documentation, visit [nextjs.org](https://nextjs.org)

---

**Built for Senior Blockchain Engineers** | Ethereum | Solana | DeFi | NFT | Web3
