# Sapuni Pathirana - Portfolio

A modern, responsive personal portfolio website built with React and Vite, showcasing my projects, skills, and experience as an Information Technology undergraduate at the University of Moratuwa.

## Preview

The portfolio includes the following sections:

- **Hero** - Introduction with social links and call-to-action buttons
- **About** - Personal background and interests
- **Skills** - Technical skills organized by category (Frontend, Backend, Database, Tools)
- **Projects** - Featured project showcase with descriptions and tech tags
- **Education** - Academic background
- **Contact** - Contact form

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 19, Vite 7 |
| **Styling** | Tailwind CSS 4, DaisyUI 5 |
| **Icons** | react-icons |
| **Navigation** | react-scroll (smooth scrolling) |
| **Linting** | ESLint 9 |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/sapuni-portfolio.git

# Navigate into the project
cd sapuni-portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Build

```bash
# Create a production build
npm run build

# Preview the production build locally
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation bar with theme toggle
│   ├── Hero.jsx         # Hero/landing section
│   ├── About.jsx        # About me section
│   ├── Skills.jsx       # Technical skills display
│   ├── Projects.jsx     # Featured projects grid
│   ├── Education.jsx    # Education timeline
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer
├── hooks/
│   └── useScrollReveal.js  # Scroll-triggered animation hook
├── App.jsx              # Root component
├── main.jsx             # Entry point
└── index.css            # Global styles and animations
```

## Features

- **Dark/Light Theme** - Toggle between themes, persisted in localStorage
- **Responsive Design** - Mobile-first layout with hamburger menu
- **Scroll Animations** - Fade-in-up animations using IntersectionObserver
- **Smooth Scrolling** - Section navigation with scroll offset handling
- **Gradient Effects** - Custom gradient text and decorative elements
