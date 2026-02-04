import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Schedule", href: "/schedule" },
    { label: "Speakers", href: "/speakers" },
    { label: "Register", href: "/register" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">CF</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-foreground">
                  CollegeFest
                </h1>
                <p className="text-xs text-muted-foreground">2026</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:block">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                Register
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/register"
                className="block px-4 py-2 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:opacity-90 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register Now
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-foreground text-white mt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-2">CollegeFest</h3>
              <p className="text-gray-300 text-sm">
                The biggest cultural & tech celebration of the year. Join us for
                unforgettable experiences!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link to="/" className="hover:text-accent transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/schedule"
                    className="hover:text-accent transition-colors"
                  >
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link
                    to="/speakers"
                    className="hover:text-accent transition-colors"
                  >
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="hover:text-accent transition-colors"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-accent">Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📧 info@collegefest.com</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>📍 University Campus</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4 text-accent">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  title="Facebook"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  title="Instagram"
                >
                  📷
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  title="Twitter"
                >
                  𝕏
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  title="LinkedIn"
                >
                  in
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>&copy; 2026 CollegeFest. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
