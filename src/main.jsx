// src/main.jsx
import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter, Routes, Route } from "react-router-dom"

import Layout from "./Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Playbook from "./pages/Playbook"
import CaseStudies from "./pages/CaseStudies"
import Pricing from "./pages/Pricing"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"

import "./index.css" // Tailwind & global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="playbook" element={<Playbook />} />
          <Route path="casestudies" element={<CaseStudies />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
) 