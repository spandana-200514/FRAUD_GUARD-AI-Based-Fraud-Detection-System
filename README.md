# ThreatDefender - Multi-Domain Fraud Detection Platform

## Project Overview

ThreatDefender is an advanced AI-powered platform for detecting and preventing fraud across multiple domains including spam calls, phishing, financial fraud, and deepfake manipulation.

## Getting Started

### Prerequisites

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

Follow these steps to set up the project locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies
npm i

# Step 4: Start the development server
npm run dev
```

The development server will start on `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

## Technologies Used

This project is built with:

- **Vite** - Build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **React Hook Form** - Form management
- **Zod** - Schema validation

## Project Structure

```
src/
├── pages/          # Route components
├── components/     # Reusable components
├── contexts/       # React contexts
├── hooks/          # Custom hooks
├── lib/            # Utilities
└── App.tsx         # Root component
```

## Features

- 🔐 User authentication (login/signup)
- 📊 Fraud detection dashboard
- 📞 Spam call detection
- 📧 Phishing prevention
- 💳 Financial fraud monitoring
- 🎥 Deepfake detection
- 👤 User profile management

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.
