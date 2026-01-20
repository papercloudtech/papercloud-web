# 🚀 Papercloudtech - Open Source Portfolio

<div align="center">

**Building the future through open collaboration**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-000000)](https://ui.shadcn.com/)
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

A **modern, production-ready** open-source portfolio website for Papercloudtech, showcasing innovative projects and fostering developer collaboration. Inspired by Google's opensource.google with an even more modern, responsive design approach.

**Live Demo**: [https://papercloudtech.com](https://papercloudtech.com) *(Coming Soon)*

---

## ✨ Features

### 🎨 Design & UI
- ✅ **Fully Responsive** - Mobile-first design (1 → 2 → 3 column grid)
- ✅ **Dark/Light Mode** - System-aware theme toggle with smooth transitions
- ✅ **Modern Aesthetics** - Clean, generous whitespace with subtle animations
- ✅ **Hover Effects** - Interactive cards with scale & shadow animations
- ✅ **Gradient Accents** - Eye-catching gradient text effects

### 🧩 Components
- ✅ **Sticky Navigation** - Responsive navbar with hamburger menu on mobile
- ✅ **Project Cards** - Featured badges, tech tags, GitHub links
- ✅ **Hero Section** - Bold typography with dual CTA buttons
- ✅ **Footer** - Multi-column layout with social links
- ✅ **Theme Toggle** - Sun/Moon icon in navbar (top right)

### 🔧 Developer Experience
- ✅ **TypeScript** - Fully typed with strict interfaces
- ✅ **shadcn/ui** - High-quality, customizable components
- ✅ **Lucide Icons** - Beautiful, consistent icon system
- ✅ **Next.js App Router** - Modern React framework
- ✅ **SEO Optimized** - Meta tags, Open Graph, Twitter Cards

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) (New York style) |
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
│   ├── layout.tsx          # Root layout with metadata & theme provider
│   ├── page.tsx            # Home page with hero & project sections
│   ├── globals.css         # Global styles & Tailwind directives
│   └── favicon.ico         # Website favicon
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── sheet.tsx
│   │   ├── separator.tsx
│   │   └── navigation-menu.tsx
│   ├── navbar.tsx          # Responsive navigation with theme toggle
│   ├── project-card.tsx    # Project display card component
│   ├── footer.tsx          # Footer with links & social icons
│   ├── theme-provider.tsx  # next-themes wrapper
│   └── theme-toggle.tsx    # Dark/light mode toggle button
├── lib/
│   ├── data.ts             # Mock project data & TypeScript interfaces
│   └── utils.ts            # Utility functions (cn, etc.)
├── public/                 # Static assets
├── components.json         # shadcn/ui configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies & scripts
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

### Navbar
- **Desktop**: Full navigation with theme toggle, social links
- **Mobile**: Hamburger menu (Sheet component)
- **Location**: `components/navbar.tsx`

### ProjectCard
- Displays project title, description, category
- Tech stack badges
- Featured badge (conditional)
- Hover animations (scale + shadow)
- **Location**: `components/project-card.tsx`

### ThemeToggle
- Sun/Moon icon switcher
- Persists preference in localStorage
- Respects system theme by default
- **Location**: `components/theme-toggle.tsx`

### Footer
- 3-column responsive grid
- Quick links, social media icons
- Dynamic copyright year
- **Location**: `components/footer.tsx`

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/papercloudtech/papercloud-web)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js and deploys

### Other Platforms

- **Netlify**: [Guide](https://docs.netlify.com/integrations/frameworks/next-js/)
- **AWS Amplify**: [Guide](https://docs.amplify.aws/guides/hosting/nextjs/q/platform/js/)
- **Docker**: Build with `next build` and serve with `next start`

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
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide](https://lucide.dev/) - Icon library
- [Vercel](https://vercel.com/) - Hosting platform
- Design inspiration: [opensource.google](https://opensource.google)

---

<div align="center">

**Built with ❤️ by Papercloudtech**

⭐ Star this repo if you find it helpful!

</div>
