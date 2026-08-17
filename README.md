# Praveen Kumar M — Portfolio

A modern, responsive developer portfolio built with **React**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. Features project showcases, an interactive experience timeline, technical stack overview, and a live contact form powered by **Supabase**.

🔗 **Live Site**: [pk-dev-portfolio.vercel.app](https://pk-dev-portfolio.vercel.app/)

---

## ✨ Features

- **Responsive Design** — Fully optimized for mobile, tablet, and desktop
- **Smooth Animations** — Page transitions and scroll-triggered animations with Framer Motion
- **Project Showcases** — Clickable project visuals linking to live demos
- **Experience Timeline** — Vertical (mobile) and horizontal (desktop) timeline layout
- **Live Contact Form** — Form submissions stored directly in Supabase
- **Dark Theme** — Custom obsidian/graphite color palette with coral and lime accents
- **SEO Optimized** — Proper meta tags, semantic HTML, and fast load times

---

## 🛠️ Tech Stack

| Layer        | Technologies                                      |
|--------------|----------------------------------------------------|
| **Frontend** | React 19, Vite 8, Tailwind CSS v4, Framer Motion  |
| **Backend**  | Supabase (PostgreSQL, Auth, Realtime)              |
| **Forms**    | React Hook Form                                    |
| **Icons**    | Lucide React                                       |
| **Routing**  | React Router DOM v7                                |
| **Deploy**   | Vercel / Netlify                                   |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/PraveenkumarM2005-git/Praveen-s-Portfolio.git
cd Praveen-s-Portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components (Navbar)
├── data/             # Portfolio data (projects, skills, experience)
├── lib/              # Third-party client setup (Supabase)
├── pages/            # Page-level components (Home, Admin)
├── sections/         # Section components
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Stack.jsx
│   ├── Experience.jsx
│   ├── Services.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
└── index.css         # Global styles & Tailwind theme
```

---

## 📬 Contact

- **Email**: praveenkumarmohan592005@gmail.com
- **LinkedIn**: [Praveen Kumar M](https://www.linkedin.com/in/praveen-kumar-m-182b4232b/)
- **GitHub**: [PraveenkumarM2005-git](https://github.com/PraveenkumarM2005-git)

---

## 📄 License

This project is open source and available for personal reference and learning.

© 2026 Praveen Kumar M
