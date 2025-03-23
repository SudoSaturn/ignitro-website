# Ignitro Website

A website for Ignitro, a growth acceleration company for early-stage startups.

## Features

- Modern React-based frontend
- Responsive design works on all devices
- Beautiful UI with Tailwind CSS
- Smooth animations with Framer Motion
- Fully accessible navigation

## Tech Stack

- React 18
- React Router v6
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- Vite (build tool)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sudosaturn/ignitro-website.git
   cd ignitro-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to http://localhost:5173

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` directory.


```
ignitro-website/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ components/
│  │  └─ ui/
│  │     └─ button.jsx
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ About.jsx
│  │  ├─ Services.jsx
│  │  ├─ Playbook.jsx
│  │  ├─ CaseStudies.jsx
│  │  ├─ Pricing.jsx
│  │  ├─ Blog.jsx
│  │  └─ Contact.jsx
│  ├─ utils/
│  │  └─ cn.js
│  ├─ Layout.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ vite.config.js
```
