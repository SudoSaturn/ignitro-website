import React, { useState, useEffect } from "react"
import { Outlet, Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { cn } from "./utils/cn"

const navigationItems = [
  { title: "About", to: "/about" },
  { title: "Services", to: "/services" },
  { title: "Playbook", to: "/playbook" },
  { title: "Case Studies", to: "/casestudies" },
  { title: "Pricing", to: "/pricing" },
  { title: "Blog", to: "/blog" },
]

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Ignitro
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.to}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-purple-600",
                    location.pathname === item.to ? "text-purple-600" : "text-gray-600"
                  )}
                >
                  {item.title}
                </Link>
              ))}
              <Link to="/contact">
                <button className="ml-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
                  Get Started
                </button>
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.to}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-purple-600 py-2",
                      location.pathname === item.to ? "text-purple-600" : "text-gray-600"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
                    Get Started
                  </button>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-32">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Ignitro
              </span>
              <p className="text-gray-600 text-sm">
                Igniting growth for early-stage companies through personalized, data-driven strategies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.to}
                      className="text-gray-600 hover:text-purple-600 text-sm"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/pricing" className="hover:text-purple-600">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-purple-600">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>hello@ignitro.com</li>
                <li>+34 (696) 969-696</li>
                <li>
                  123 Startup Street
                  <br />
                  Innovation City, 6969
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Ignitro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
} 