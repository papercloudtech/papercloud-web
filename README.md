# 🚀 Papercloudtech - Open Source Portfolio

<div align="center">

**Building the future through open collaboration**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-000000)](https://ui.shadcn.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.27-ff69b4?logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Components](#-components)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

A **modern, production-ready** open-source portfolio website for Papercloudtech, showcasing innovative projects and fostering developer collaboration. Inspired by Google's opensource.google with premium animations powered by Aceternity UI and Framer Motion.

**Live Demo**: [https://papercloudtech.com](https://papercloudtech.com) *(Coming Soon)*

### 🎯 Key Highlights
- ⚡ **Premium Animations** - Smooth page transitions, word-by-word text reveals, and interactive hover effects
- 🎨 **Modern Hero Section** - Animated background beams with gradient borders and project showcase
- 📧 **Contact Page** - Production-ready contact form with validation and success states
- 🌓 **Dark Mode** - Seamless theme switching with system preference detection

---

## ✨ Features

### 🎨 Design & UI
- ✅ **Fully Responsive** - Mobile-first design (1 → 2 → 3 column grid)
- ✅ **Dark/Light Mode** - System-aware theme toggle with smooth transitions
- ✅ **Premium Animations** - Framer Motion powered transitions and effects
- ✅ **Aceternity UI Integration** - Modern animated components (Background Beams, Text Generate Effect, Hover Cards)
- ✅ **Interactive Hover Effects** - Animated card borders with gradient glow
- ✅ **Gradient Borders** - Decorative borders with primary color gradients

### 🧩 Components
- ✅ **Animated Hero Section** - Background beams, word-by-word text reveal, project showcase with stats
- ✅ **Responsive Navigation** - Desktop navbar + mobile hamburger menu (Sheet component)
- ✅ **Hover Effect Cards** - Grid cards with animated border glow on hover
- ✅ **Contact Form** - Full-featured contact page with validation and success states
- ✅ **Project Cards** - Featured badges, tech tags, GitHub links with hover animations
- ✅ **Theme Toggle** - Sun/Moon icon with smooth transitions
- ✅ **Footer** - Multi-column layout with social links and quick navigation

### 🔧 Developer Experience
- ✅ **TypeScript Strict Mode** - Fully typed with strict interfaces
- ✅ **shadcn/ui** - High-quality, customizable component library
- ✅ **Framer Motion** - Powerful animation library for React
- ✅ **Lucide Icons** - Beautiful, consistent icon system
- ✅ **Next.js App Router** - Modern React framework with SSG/SSR
- ✅ **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- ✅ **Production Build** - Static generation for optimal performance

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) (New York style, Zinc theme) |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Premium Components** | [Aceternity UI](https://ui.aceternity.com/) (Copy-paste components) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Theme** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Fonts** | [Geist](https://vercel.com/font) (Sans & Mono) |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.17 or later
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/papercloudtech/papercloud-web.git
   cd papercloud-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
papercloud-web/
├── app/
│   ├── layout.tsx                # Root layout with metadata & theme provider
│   ├── page.tsx                  # Home page with animated hero & project sections
│   ├── contact/
│   │   └── page.tsx              # Contact page with form validation
│   ├── globals.css               # Global styles & Tailwind directives
│   └── favicon.ico               # Website favicon
├── components/
│   ├── ui/                       # shadcn/ui + Aceternity components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── sheet.tsx
│   │   ├── separator.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── papercloud-hero.tsx       # Animated hero with beams & showcase
│   │   ├── background-beams.tsx      # Aceternity background animation
│   │   ├── text-generate-effect.tsx  # Word-by-word text reveal
│   │   └── card-hover-effect.tsx     # Animated hover cards
│   ├── navbar.tsx            # Responsive navigation with theme toggle
│   ├── project-card.tsx      # Project display card component
│   ├── footer.tsx            # Footer with links & social icons
│   ├── theme-provider.tsx    # next-themes wrapper
│   └── theme-toggle.tsx      # Dark/light mode toggle button
├── lib/
│   ├── data.ts               # Project data & TypeScript interfaces
│   └── utils.ts              # Utility functions (cn, clsx)
├── public/                   # Static assets
├── components.json           # shadcn/ui configuration
├── postcss.config.mjs        # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies & scripts
└── LICENSE                   # MIT License
```

---

## 🎨 Customization

### Update Project Data

Edit `lib/data.ts` to add/modify projects:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Your Project",
    description: "Project description here...",
    tags: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/yourorg/project",
    featured: true,
    category: "Web Development"
  },
  // Add more projects...
];
```

### Change Theme Colors

Modify `app/globals.css` to customize the Zinc theme:

```css
@layer base {
  :root {
    --primary: 240 5.9% 10%;
    --background: 0 0% 100%;
    /* Customize other colors... */
  }
}
```

### Add Your Logo

Replace `/app/favicon.ico` with your custom favicon (32×32 or 16×16 pixels).

For multiple icon formats:
- `/app/favicon.ico`
- `/app/icon.png`
- `/app/apple-icon.png`

### Update Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Company Name",
  description: "Your description",
  // Update URLs, social handles, etc.
};
```

---

## 🧩 Components

### Animated Hero Section (`papercloud-hero.tsx`)
- **Background Beams**: Animated SVG gradients with primary color
- **Text Animation**: Word-by-word reveal with blur effect
- **Project Showcase**: 3 animated cards with color-coded indicators
- **Stats Section**: Live stats with gradient text
- **Gradient Borders**: Decorative borders on all four sides
- **Location**: `components/ui/papercloud-hero.tsx`

### Hover Effect Cards (`card-hover-effect.tsx`)
- **Animated Borders**: Gradient glow on hover with layout transitions
- **Responsive Grid**: Adapts to different screen sizes
- **Smooth Animations**: Framer Motion powered transitions
- **Location**: `components/ui/card-hover-effect.tsx`

### Navbar
- **Desktop**: Full navigation with theme toggle, social links
- **Mobile**: Hamburger menu (Sheet component)
- **Routing**: Client-side navigation to `/contact` page
- **Location**: `components/navbar.tsx`

### Contact Form (`app/contact/page.tsx`)
- **Form Validation**: Name, email, and message validation
- **Success States**: Visual feedback after submission
- **Contact Info**: Sidebar with email, location, GitHub link
- **Social Links**: Twitter, LinkedIn, GitHub icons
- **Location**: `app/contact/page.tsx`

### ProjectCard
- Displays project title, description, category
- Tech stack badges with color variants
- Featured badge (conditional)
- Hover animations (scale + shadow)
- **Location**: `components/project-card.tsx`

### ThemeToggle
- Sun/Moon icon switcher with smooth transitions
- Persists preference in localStorage
- Respects system theme by default
- Mounted state check to prevent hydration mismatch
- **Location**: `components/theme-toggle.tsx`

### Footer
- 3-column responsive grid
- Quick links to all pages
- Social media icons
- Dynamic copyright year
- **Location**: `components/footer.tsx`

---

## 🚢 Deployment

### Deploy on GitHub Pages ⭐ (Configured & Ready!)

This project is **pre-configured** for GitHub Pages deployment with zero configuration needed!

**Quick Start:**
1. Push code to GitHub
2. Enable GitHub Pages in Settings → Pages → Source: "GitHub Actions"
3. Site deploys automatically! 🚀

📖 **Detailed Guide:** See [DEPLOYMENT.md](DEPLOYMENT.md) for complete instructions

**Live in 2 minutes:**
- ✅ All animations preserved
- ✅ Dark mode works perfectly
- ✅ Contact form functional
- ✅ Free HTTPS included
- ✅ Zero server costs

### Other Platforms

- **Vercel**: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/papercloudtech/papercloud-web)
- **Netlify**: [Guide](https://docs.netlify.com/integrations/frameworks/next-js/)
- **AWS Amplify**: [Guide](https://docs.amplify.aws/guides/hosting/nextjs/q/platform/js/)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Use Tailwind CSS for styling (no inline styles)
- Maintain mobile-first responsive design
- Add proper accessibility attributes
- Document new components

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Papercloudtech**

- Website: [https://papercloudtech.com](https://papercloudtech.com)
- GitHub: [@papercloudtech](https://github.com/papercloudtech)
- LinkedIn: [/company/papercloudtech](https://linkedin.com/company/papercloudtech)
- Twitter: [@papercloudtech](https://twitter.com/papercloudtech)
- Email: contact@papercloudtech.com

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Aceternity UI](https://ui.aceternity.com/) - Premium animated components
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide](https://lucide.dev/) - Icon library
- [Vercel](https://vercel.com/) - Hosting platform
- Design inspiration: [opensource.google](https://opensource.google)

---

<div align="center">

**Built with ❤️ by Papercloudtech**

⭐ Star this repo if you find it helpful!

</div>
