Character Explorer

A Next.js 13 + React + TypeScript project to browse characters from the Rick and Morty API. Includes search, filter, pagination, and dark/light mode support. Fully responsive and optimized for production deployment.

Note: This repository is a slightly updated version of the original assessment repository. Some changes were made to fix deployment errors while keeping the core functionality intact.

🚀 Features

Browse characters with pagination

Search by name with debounce for optimized queries

Filter by status: Alive, Dead, Unknown

Dark/Light mode toggle

Responsive design for mobile and desktop

Built with Next.js 13 App Router, React Query, Tailwind CSS, and TypeScript

Fully client-side and server-side optimized

🛠 Tech Stack

Frontend: React, Next.js 13, TypeScript, Tailwind CSS

State & Data Fetching: React Query, Axios

Routing: Next.js App Router

Deployment: Netlify

📦 Installation & Setup

Clone the repository

git clone https://github.com/chep-collab/character-explorer.git
cd character-explorer


Install dependencies

npm install


Run locally

npm run dev


The app will run at http://localhost:3000.

Build for production

npm run build
npm start

🖥 Project Structure
/src
 ├─ /app              # Next.js App Router pages
 ├─ /components       # Reusable components (FilterSort, Pagination, CharacterList, CharacterCard)
 ├─ /hooks            # Custom hooks (useCharacters)
 ├─ /styles           # Global and Tailwind styles

📂 Deployment

Hosted on Netlify: https://fabulous-medovik-c2cab5.netlify.app

⚡ Usage

Use the search bar to find characters by name

Use the status filter to show Alive, Dead, or Unknown characters

Navigate pages with pagination buttons

Toggle dark/light mode with the button in the navbar

👩‍💻 Author

Mercy Chepngeno

GitHub: https://github.com/chep-collab

Portfolio: https://mercy-portfolio-s6rl.vercel.app/
