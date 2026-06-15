# NexaStack — Team Portfolio Website

A dark editorial portfolio site for a team of .NET fullstack developers and a cybersecurity engineer. Built with React + Vite + Tailwind CSS v4, animated with Motion and GSAP.

**Live demo:** *(add your Azure / Vercel URL here once deployed)*

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite` plugin) |
| Animations | Motion (`motion/react`) + GSAP 3 SplitText |
| Forms | React Hook Form |
| Fonts | Fraunces (display serif) + Inter (body sans) via Google Fonts |
| Deployment target | Azure Static Web Apps / Vercel |

---

## Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

Check your versions:

```bash
node -v
npm -v
```

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/sudharsanan-velmurugan/portfolio-website.git
cd portfolio-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The page hot-reloads on every save.

### 4. Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally before deploying:

```bash
npm run preview
```

---

## Project Structure

```
src/
├── App.jsx                    # Root — cursor glow + section order
├── index.css                  # Tailwind base, design tokens, grain overlay
├── main.jsx                   # React entry point
│
├── components/
│   ├── Nav.jsx                # Sticky nav, mobile overlay menu
│   ├── Hero.jsx               # Full-screen hero with GSAP text reveal
│   ├── Work.jsx               # 3 featured projects, parallax images
│   ├── About.jsx              # Animated counters + process steps
│   ├── Team.jsx               # Member cards — avatar, bio, skills, links
│   ├── Services.jsx           # Service cards, cybersecurity highlighted
│   ├── TechStack.jsx          # Category rows with tech pill badges
│   ├── Reviews.jsx            # Auto-playing testimonial carousel
│   ├── Contact.jsx            # Form (mailto) + contact info
│   ├── Footer.jsx             # Nav links, copyright, back to top
│   └── ui/
│       ├── FadeUp.jsx         # Scroll-triggered fade-and-rise wrapper
│       ├── MagneticButton.jsx # Spring-physics cursor-following button
│       └── ParallaxImage.jsx  # Scroll-driven image drift
│
├── data/                      # ← Swap real content here
│   ├── projects.js            # Project title, description, tags, gradient
│   ├── team.js                # Member name, role, bio, skills, links
│   ├── services.js            # Service cards + differentiator flag
│   ├── techStack.js           # Tech categories and items
│   └── testimonials.js        # Client quotes, name, role, company
│
└── hooks/
    ├── useCounter.js          # Count-up animation on viewport enter
    ├── useCursorGlow.js       # CSS variable cursor tracker
    └── useTextReveal.js       # GSAP SplitText char/word stagger
```

---

## Customising Content

All copy lives in `src/data/` — edit these files without touching any component.

### Team members — `src/data/team.js`

```js
{
  id: 1,
  name: 'Your Name',
  role: 'Role · Title',
  bio: 'Two-line bio here.',
  skills: ['Skill A', 'Skill B', 'Skill C'],
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourhandle',
  avatar: 'YN',       // Two initials shown until real photo is added
  accentCard: false,  // Set true for the cybersecurity member
}
```

### Projects — `src/data/projects.js`

```js
{
  id: '01',
  title: 'Project Name',
  subtitle: 'Short subtitle',
  role: 'Your Role',
  year: '2024',
  description: 'Two-sentence description.',
  tags: ['Tech A', 'Tech B'],
  gradient: 'from-violet-900/40 to-indigo-900/40', // Tailwind gradient classes
  link: 'https://live-url-or-github.com',
}
```

### Replacing placeholder photos

Add team photos to `src/assets/` and update `src/data/team.js`:

```js
import photo from '../assets/your-photo.jpg'
// then in the Team card, replace the initials div with <img src={photo} />
```

### Company name

Search and replace `NexaStack` in:
- `src/components/Nav.jsx`
- `src/components/Footer.jsx`
- `index.html` (title + OG tags)

### Accent colour

Change `#E5FF3D` in `src/index.css` (the `.glow-layer` radial-gradient) and in any inline `style=` references across components.

---

## Animations Overview

| Animation | Where | Library |
|-----------|-------|---------|
| Char-by-char title reveal | Hero | GSAP SplitText |
| Scroll fade-and-rise | All sections | Motion `whileInView` |
| Stat count-up | Hero + About | Motion `useInView` + `animate` |
| Parallax image drift | Work cards | Motion `useScroll` + `useTransform` |
| Magnetic CTA button | Hero, Contact | Motion `useSpring` |
| Cursor spotlight glow | Global | Vanilla JS + CSS `radial-gradient` |
| Testimonial carousel | Reviews | Motion `AnimatePresence` |
| Film grain texture | Global | Pure CSS SVG `feTurbulence` |

All spatial animations respect `prefers-reduced-motion` — GSAP reveal and counters skip to final values, carousel stops auto-play.

---

## Deployment

### Azure Static Web Apps (recommended)

1. Push this repo to GitHub (already done).
2. Go to [portal.azure.com](https://portal.azure.com) → **Static Web Apps** → **Create**.
3. Connect your GitHub repo and set:
   - **Build preset:** Vite
   - **App location:** `/`
   - **Output location:** `dist`
4. Azure auto-generates a GitHub Actions workflow that builds and deploys on every push to `main`.

### Vercel (fastest setup)

```bash
npm i -g vercel
vercel --prod
```

Vercel auto-detects Vite — no extra config needed.

---

## Open Items (fill in before launch)

- [ ] Replace `NexaStack` with your final company name
- [ ] Add real team photos to `src/assets/` and update `src/data/team.js`
- [ ] Add real project screenshots — replace gradient placeholders in `src/components/Work.jsx`
- [ ] Update LinkedIn / GitHub URLs in `src/data/team.js`
- [ ] Replace `mailto:` in `src/components/Contact.jsx` with a [Formspree](https://formspree.io) endpoint
- [ ] Add real testimonial quotes to `src/data/testimonials.js`
- [ ] Confirm stat numbers in `src/components/Hero.jsx` and `src/components/About.jsx`
- [ ] Add a favicon to `public/favicon.svg`
- [ ] Add your custom domain after deploying

---

## Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
