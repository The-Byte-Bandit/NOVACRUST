# NOVACRUST – Crypto Exchange Card Demo

A clean, modern, and fully responsive React + Vite + Tailwind CSS project showcasing a crypto-to-fiat exchange card UI.  
This is a **standalone demo** built with Shadcn/UI components, Framer Motion animations, and Lucide icons.

The app simulates a real crypto-to-cash exchange flow (e.g., paying with USDT on Celo/TON/BNB and receiving NGN/USD/GBP) using **mock data only** — no real blockchain, wallets, or APIs are connected.

## Features

- Responsive landing page with hero section and exchange card
- Multi-step exchange flow (select amount → choose wallet → recipient details → send crypto → success)
- Tabbed navigation (Crypto to Cash / Cash to Crypto / Crypto to Fiat Loan)
- Currency dropdowns with filtered search
- Wallet selection (MetaMask, Rainbow, WalletConnect, Other)
- Smooth Framer Motion animations
- Mobile-first design with no horizontal overflow on any screen size

## Project Structure

├── src/
│ ├── components/  
│ ├── types/
│ │ └── exchange.ts  
│ ├── constants/
│ │ └── constants.js  
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json

## Setup Instructions

### Prerequisites

- Node.js ≥ 18
- npm or pnpm (recommended)

### Installation

npm install

# or

pnpm install

## Run Development Server

npm run dev

# or

pnpm dev
