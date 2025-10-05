### Pokedex App

A simple Pokémon application built with **React** and **Vite**, featuring user-modified Pokémon, favorites, ranking, creation and edition, battle tracking, and pagination.

## Table of Contents

- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Features](#features)
- [License](#license)

## Technologies

This project uses the following technologies:

**Frontend:**

- React 18
- React Router DOM 7
- React Hook Form
- Zod (for form validation)
- Lucide React (icons)
- clsx (conditional classNames)
- TailwindCSS
- Notistack (notifications)

**Development Tools:**

- Vite (build tool)
- ESLint (with React Hooks rules)
- PostCSS + Autoprefixer
- @vitejs/plugin-react-swc
- JSON Server (for mock API)

## Getting Started

## Repository

You can find the full source code for this project on GitHub:

[POKEDEX Repository](https://github.com/MrKris90Wlodowski/POKEDEX.git)

# Install dependencies

npm install

# Run development server

npm run dev

# Preview production build

npm run preview

# Run JSON server for mock API

npm run json-server

### Available Scripts

dev – Start the Vite development server
build – Build the app for production
preview – Preview the production build
lint – Run ESLint on the project files
json-server – Start the JSON server on port 5000

### Project Structure

pokedex/
├─ public/
├─ src/
│ ├─ assets/ # Images, icons, fonts
│ ├─ components/ # Reusable components
│ ├─ hooks/ # Custom React hooks
│ ├─ pages/ # Page-level components (Home, Ranking, etc.)
│ ├─ services/ # API calls, state management services
│ └─ App.jsx # Root component
├─ pokeTrainer.json # Mock JSON database
├─ package.json
├─ tailwind.config.js
└─ vite.config.js

### Features

- **View Pokémon list and details** – Browse the full list of Pokémon with detailed information including height, weight, abilities, and base experience.

- **Search and pagination** – Quickly find any Pokémon using the search bar, with paginated results for easier navigation.

- **Track favorite Pokémon** – Mark your favorite Pokémon with the heart icon and easily access them in a dedicated favorites section.

- **Track battle wins and losses** – Keep track of your Pokémon’s battle performance, with wins and losses displayed directly on their cards.

- **Edit and add new Pokémon (logged-in users)** – Logged-in users can modify existing Pokémon or add new ones to the collection, creating a personalized experience.

- **Dark & Light theme support** – Switch between dark and light themes for a comfortable viewing experience depending on your preference.

- **Battlefield Arena** – Allow make realist battle with theme song

- **Ranking** – Show pokemon list weight, height, exp, and winRecord

- **Pokémon Creation & Editing** – Create and edit invidual pokemon
