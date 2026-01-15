# Ashwin Nethan - Cybersecurity Portfolio

## Overview

A modern, futuristic cybersecurity student portfolio website for Ashwin Nethan, a BTech Computer Science & Cybersecurity student. The site follows a dark theme with Black/Navy backgrounds and Neon Cyan accents, creating a professional hacker aesthetic while maintaining corporate appeal.

The portfolio showcases skills, education, certifications, projects, and provides a contact form for potential opportunities. It features animated terminal components, interactive skill displays, and smooth scroll navigation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite for development and production builds
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom cyber theme variables
- **UI Components**: shadcn/ui component library (New York style)
- **Animations**: Framer Motion for micro-interactions and transitions

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Pattern**: REST endpoints defined in shared routes file
- **Build**: esbuild for production server bundle

### Data Layer
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured via DATABASE_URL)
- **Schema**: Shared between client and server in `/shared/schema.ts`
- **Migrations**: Drizzle Kit with `db:push` command

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route pages
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities
├── server/           # Express backend
├── shared/           # Shared types, schemas, routes
└── migrations/       # Database migrations
```

### Design Patterns
- **Path Aliases**: `@/` for client src, `@shared/` for shared code
- **Form Validation**: Zod schemas shared between client/server via drizzle-zod
- **API Type Safety**: Route definitions with Zod input/output schemas in shared routes
- **Component Architecture**: Atomic design with reusable UI primitives in `/components/ui`

### Theme System
Custom CSS variables define the cyber aesthetic:
- Dark navy/black backgrounds
- Neon cyan primary accent (#00ffff)
- Purple accent for gradients
- Custom fonts: Orbitron (display), Share Tech Mono (mono), Rajdhani (body)

## External Dependencies

### Core Dependencies
- **PostgreSQL**: Primary database (requires DATABASE_URL environment variable)
- **Google Fonts**: Orbitron, Share Tech Mono, Rajdhani font families

### NPM Packages (Key)
- **framer-motion**: Animation library for cyber effects
- **react-scroll**: Smooth scrolling navigation
- **cobe**: 3D globe visualization
- **drizzle-orm / drizzle-kit**: Database ORM and migration tools
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI primitives for shadcn components

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development banner

### Build & Development
- **tsx**: TypeScript execution for development
- **esbuild**: Production server bundling
- **tailwindcss / autoprefixer**: CSS processing