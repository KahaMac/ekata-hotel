# District Hotel Business Association Kathmandu (DHBA) Website

A modern, full-featured website for the District Hotel Business Association Kathmandu, built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

![DHBA Website](public/hotelassociation-logo.jpg)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Pages](#pages)
- [Styling](#styling)
- [Internationalization](#internationalization)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## 🏨 About

The District Hotel Business Association Kathmandu (DHBA) website serves as the digital hub for the hospitality sector in Kathmandu. Established in 2074 B.S., DHBA represents seven active hotel business associations operating in key areas including Kalanki, Sundhara, Bagbazar, Koteshwor, Airport, Chabahil, New Bus Park, and Balaju.

### Mission
To promote, protect, and advance the interests of the hotel and hospitality industry in Kathmandu through collaboration, advocacy, and professional development.

---

## ✨ Features

### 🎯 Core Features
- **Modern Hero Section** with business card-style ticker animation
- **Hotel Directory** with advanced filtering and search
- **Interactive Maps** using Leaflet for location visualization
- **Event Management** with detailed event pages
- **Member Portal** with authentication
- **Admin Dashboard** for content management
- **Newsletter Subscription** with modern UI
- **Multi-language Support** (English/Nepali)
- **Dark/Light Theme** with system preference detection
- **Responsive Design** optimized for all devices
- **SEO Optimized** with meta tags and sitemap

### 🎨 Design Features
- Glass-morphism effects
- Smooth animations and transitions
- Modern gradient backgrounds
- Interactive hover states
- Accessible UI components
- Professional typography

### 🔐 Authentication
- User login and signup
- Password recovery
- Protected member portal
- Admin access control

---

## 🛠 Tech Stack

### Frontend Framework
- **Next.js 16** - React framework with App Router
- **React 19.2** - UI library
- **TypeScript 5** - Type safety

### Styling
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **tw-animate-css** - Animation utilities
- **Framer Motion** - Advanced animations
- **next-themes** - Theme management

### UI Components
- **Radix UI** - Accessible component primitives
  - Dialog, Dropdown, Select, Tabs, Toast, and more
- **Lucide React** - Icon library
- **Recharts** - Data visualization
- **Embla Carousel** - Touch-friendly carousels

### Maps & Location
- **Leaflet** - Interactive maps
- **React Leaflet** - React wrapper for Leaflet

### Forms & Validation
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Utilities
- **date-fns** - Date manipulation
- **clsx** & **tailwind-merge** - Class name utilities
- **jwt-decode** - JWT token handling
- **class-variance-authority** - Component variants

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd dhba-website
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
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## 📁 Project Structure

```
dhba-website/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── admin/                    # Admin dashboard
│   │   ├── destinations/         # Manage destinations
│   │   ├── events/               # Manage events
│   │   ├── hotels/               # Manage hotels
│   │   └── members/              # Manage members
│   ├── api/                      # API routes
│   │   └── contact/              # Contact form API
│   ├── contact/                  # Contact page
│   ├── destinations/             # Destinations listing & detail
│   ├── events/                   # Events listing & detail
│   ├── forgot-password/          # Password recovery
│   ├── gallery/                  # Photo gallery
│   ├── hotels/                   # Hotels listing & detail
│   ├── login/                    # Login page
│   ├── member-portal/            # Member dashboard
│   ├── members/                  # Members directory
│   ├── signup/                   # Registration page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   ├── robots.ts                 # Robots.txt config
│   └── sitemap.xml.ts            # Sitemap generation
│
├── components/                   # React components
│   ├── ui/                       # Reusable UI components
│   ├── about-preview.tsx         # About section preview
│   ├── breadcrumb.tsx            # Navigation breadcrumbs
│   ├── central-committee.tsx     # Committee members
│   ├── contact-info-section.tsx  # Contact information
│   ├── contact-map.tsx           # Contact page map
│   ├── featured-section.tsx      # Featured content
│   ├── footer.tsx                # Site footer
│   ├── header.tsx                # Site header
│   ├── hero-section.tsx          # Homepage hero
│   ├── hotel-card.tsx            # Hotel display card
│   ├── hotel-filters.tsx         # Hotel filtering
│   ├── language-switcher.tsx     # Language toggle
│   ├── map-view.tsx              # Interactive map
│   ├── members-dropdown.tsx      # Members navigation
│   ├── news-section.tsx          # News display
│   ├── newsletter-section.tsx    # Newsletter signup
│   └── theme-provider.tsx        # Theme context
│
├── contexts/                     # React contexts
│   └── language-context.tsx      # i18n context
│
├── hooks/                        # Custom React hooks
│
├── lib/                          # Utility functions
│
├── public/                       # Static assets
│   ├── images/                   # Image files
│   ├── hotelassociation-logo.jpg
│   ├── luxury-hotel-*.jpg/png
│   └── favicon.ico
│
├── styles/                       # Additional styles
│
├── .gitignore                    # Git ignore rules
├── components.json               # Component config
├── next.config.mjs               # Next.js config
├── package.json                  # Dependencies
├── postcss.config.mjs            # PostCSS config
├── tailwind.config.ts            # Tailwind config
├── tsconfig.json                 # TypeScript config
└── README.md                     # This file
```

---

## 🧩 Key Components

### Hero Section
**Location:** `components/hero-section.tsx`

Modern two-part hero section featuring:
- **Top:** Business card-style ticker with scrolling ads
  - Events, news, blogs, and member information
  - Image-based cards with hover effects
  - Smooth infinite scroll animation
- **Bottom:** Full-screen hero with background images
  - Three rotating slides with DHBA information
  - Auto-play with pause on hover
  - Interactive slide indicators
  - Gradient overlays for text readability

### Newsletter Section
**Location:** `components/newsletter-section.tsx`

Elegant newsletter subscription form with:
- Centered, compact layout
- Prominent white email input field
- Loading states and success messages
- Benefits display with icons
- Gradient background with decorative elements
- Form validation

### Header
**Location:** `components/header.tsx`

Responsive navigation header featuring:
- Logo and branding
- Main navigation menu
- Members dropdown
- Language switcher
- Theme toggle (dark/light)
- Mobile-responsive hamburger menu

### Footer
**Location:** `components/footer.tsx`

Comprehensive footer with:
- Quick links
- Contact information
- Social media links
- Copyright information
- Newsletter signup

### Hotel Card
**Location:** `components/hotel-card.tsx`

Reusable hotel display card with:
- Hotel image
- Name and location
- Rating display
- Amenities icons
- Call-to-action button
- Hover effects

### Interactive Maps
**Location:** `components/map-view.tsx`, `components/contact-map.tsx`

Leaflet-based maps featuring:
- Custom markers
- Popup information
- Zoom controls
- Responsive design
- Dark mode support

---

## 📄 Pages

### Public Pages
- **Homepage** (`/`) - Hero, featured hotels, news, newsletter
- **About** (`/about`) - DHBA information, mission, committee
- **Hotels** (`/hotels`) - Hotel directory with filters
- **Hotel Detail** (`/hotels/[id]`) - Individual hotel information
- **Destinations** (`/destinations`) - Tourist destinations
- **Destination Detail** (`/destinations/[id]`) - Destination info
- **Events** (`/events`) - Upcoming events listing
- **Event Detail** (`/events/[id]`) - Event information
- **Members** (`/members`) - Member directory
- **Member Detail** (`/members/[id]`) - Member profile
- **Gallery** (`/gallery`) - Photo gallery
- **Contact** (`/contact`) - Contact form and map

### Authentication Pages
- **Login** (`/login`) - User authentication
- **Signup** (`/signup`) - New user registration
- **Forgot Password** (`/forgot-password`) - Password recovery

### Protected Pages
- **Member Portal** (`/member-portal`) - Member dashboard
- **Admin Dashboard** (`/admin`) - Admin panel
  - Manage Hotels (`/admin/hotels`)
  - Manage Events (`/admin/events`)
  - Manage Destinations (`/admin/destinations`)
  - Manage Members (`/admin/members`)

---

## 🎨 Styling

### Design System

**Color Palette:**
- **Primary:** Elegant green (`oklch(0.36 0.11 142)`)
- **Secondary:** Warm earth tone (`oklch(0.74 0.08 65)`)
- **Accent:** Refined orange (`oklch(0.68 0.14 40)`)
- **Background:** Light/Dark adaptive
- **Foreground:** High contrast text

**Typography:**
- **Font Family:** Geist Sans, Geist Mono
- **Responsive:** Fluid typography scales

**Spacing:**
- Consistent spacing scale
- Responsive padding/margins

**Animations:**
- fadeInUp - Entrance animation
- slideInLeft/Right - Directional slides
- scaleIn - Scale entrance
- shimmer - Loading states
- Custom ticker animation

### Theme Support
- Light and dark modes
- System preference detection
- Smooth theme transitions
- Persistent theme selection

---

## 🌐 Internationalization

### Language Support
- **English** (default)
- **Nepali** (नेपाली)

### Implementation
**Context:** `contexts/language-context.tsx`

Features:
- Language toggle in header
- Persistent language selection
- Translation keys for all content
- Easy to extend with more languages

### Adding Translations
Edit `contexts/language-context.tsx` and add translations to the `translations` object:

```typescript
const translations = {
  en: {
    // English translations
  },
  ne: {
    // Nepali translations
  }
}
```

---

## 💻 Development

### Code Style
- TypeScript for type safety
- Functional React components
- Custom hooks for reusable logic
- Component composition
- Tailwind utility classes

### Best Practices
- Responsive design first
- Accessibility (ARIA labels, keyboard navigation)
- Performance optimization (lazy loading, image optimization)
- SEO optimization (meta tags, semantic HTML)
- Clean code and comments

### Environment Variables
Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_SITE_URL=your_site_url
```

---

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms
The project can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

### Build Command
```bash
npm run build
```

### Start Command
```bash
npm run start
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

---

## 📝 License

This project is proprietary and confidential. All rights reserved by District Hotel Business Association Kathmandu (DHBA).

---

## 📞 Contact

**District Hotel Business Association Kathmandu (DHBA)**

- **Website:** [Coming Soon]
- **Email:** info@dhbakathmandu.org
- **Phone:** +977-XXX-XXXXXX
- **Address:** Kathmandu, Nepal

---

## 🙏 Acknowledgments

- DHBA Committee Members
- All member hotels and associations
- Contributors and developers
- Open source community

---

## 📊 Project Status

**Version:** 0.1.0  
**Status:** Active Development  
**Last Updated:** November 2025

### Recent Updates
- ✅ Modern hero section with business card ticker
- ✅ Enhanced newsletter subscription form
- ✅ Responsive design improvements
- ✅ Dark mode support
- ✅ Multi-language support
- ✅ Interactive maps integration

### Roadmap
- [ ] Backend API integration
- [ ] Payment gateway integration
- [ ] Advanced search functionality
- [ ] Member dashboard features
- [ ] Email notification system
- [ ] Analytics integration
- [ ] Performance optimization
- [ ] Accessibility audit

---

**Built with ❤️ for the hospitality industry in Kathmandu**
