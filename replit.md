# TajikTranslate - Professional Translation Services

## Overview

TajikTranslate is a professional translation services portfolio website for Muhammadsharif Zabirov, a translator specializing in English, Tajik, Russian, and Persian languages. The application is built as a full-stack web application with a React frontend and Express backend, designed to showcase translation services, professional experience, and provide contact functionality for potential clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (August 2025)

- Completed mobile-first responsive redesign of translation portfolio
- **Implemented production-quality Embla Carousel library**: Replaced all hand-coded carousels with professional components
- **Added smooth touch/swipe gestures**: 4-second auto-play with pause on hover functionality
- **Responsive carousel behavior**: 1 slide on mobile, 3 slides on desktop with interactive dots navigation
- **Converted all sections to modern carousels**: Testimonials, Services, Tools, and Professional Profiles now use Embla Carousel
- **Created proper website footer**: Dark background with centered contact information at very bottom of page
- **Removed Professional Workflow Process section**: Completely removed as requested by user
- **Updated portfolio highlights**: Changed all language specifications to "Multiple Languages"
- **SEO Optimization**: Added targeted keywords "Tajik freelance translator" to page titles, headings, and content
- **SEO Meta Tags**: Updated HTML meta tags with geo-location and professional translator keywords
- **Structured Data**: Added JSON-LD schema markup for better search engine understanding
- **Robots.txt**: Created search engine crawling instructions for better discoverability
- **Portfolio Page**: Created dedicated `/portfolio` page to showcase translation projects in detail
- **Project Showcase**: Added comprehensive project display with Hercolubus book translation including book cover, website screenshot, YouTube embed, and client testimonials
- **Navigation Updates**: Added Portfolio link to header and "View Full Portfolio" button on homepage
- Fixed image serving for both development and production environments
- Added Railway deployment configuration with custom build process
- **Fixed critical Railway deployment issues**: Resolved `import.meta.dirname` path resolution in production
- **Added health check endpoints**: `/api/health` for Railway deployment monitoring
- **Updated nixpacks configuration**: Node.js 20, verbose npm ci, proper asset copying
- **Regenerated package-lock.json**: Fixed npm ci exit code 240 error
- Preserved all original contact information and professional profiles
- Implemented modern React components with dark/light theme support

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Components**: Built with shadcn/ui component library based on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack React Query for server state and React Context for theme management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **Theme System**: Light/dark mode support with persistent theme selection

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Data Layer**: In-memory storage implementation with interface for future database integration
- **API Design**: RESTful API structure with /api prefix routing
- **Development**: Hot module replacement with Vite integration in development mode

### Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: User table with id, username, and password fields
- **Validation**: Zod schemas for type-safe data validation
- **Migration**: Drizzle Kit for database migrations

### Component Structure
The frontend follows a modular component architecture:
- **Layout Components**: Header with navigation, Footer
- **Page Sections**: Hero, About, Services, Experience, Testimonials, Contact
- **UI Components**: Reusable shadcn/ui components with consistent styling
- **Theme Provider**: Context-based theme management with system preference detection

### Build and Deployment
- **Development**: Concurrent frontend and backend development with Vite dev server
- **Build Process**: Vite builds the frontend, esbuild bundles the backend
- **Static Assets**: Served through Express with Vite middleware in development
- **Environment**: Environment-based configuration with development/production modes

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack React Query
- **Backend**: Express.js with TypeScript support (tsx)
- **Build Tools**: Vite, esbuild, TypeScript compiler

### UI and Styling
- **Component Library**: Radix UI primitives (@radix-ui/react-*)
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Lucide React for iconography
- **Fonts**: Google Fonts (Inter, Playfair Display) via CDN

### Database and Validation
- **Database**: Neon serverless PostgreSQL
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for schema validation and type inference
- **Session Storage**: connect-pg-simple for PostgreSQL session storage

### Development Tools
- **Replit Integration**: Vite plugins for runtime error overlay and cartographer
- **Utilities**: date-fns for date manipulation, clsx and class-variance-authority for conditional styling
- **Carousel**: Embla Carousel for interactive components

### Asset Management
- **Images**: Static assets served from attached_assets directory
- **Profile Image**: Professional headshot used in hero section
- **Static Files**: HTML templates and configuration files for various deployment platforms