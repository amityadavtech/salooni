import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/academy", label: "Academy" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>123 Beauty Street, City, State 12345</span>
            </div>
          </div>
          <div className="text-sm">Mon-Sat: 9AM-8PM | Sun: 10AM-6PM</div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <motion.h1 
              className="text-2xl font-serif font-bold text-primary hover-elevate p-2 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              Summera Salon & Accademy
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} data-testid={`link-${item.label.toLowerCase()}`}>
                <motion.span
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer px-3 py-2 rounded-md hover-elevate ${
                    location === item.href ? "text-primary bg-primary/10" : "text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm" data-testid="button-book-now">
              Book Now
            </Button>
            <Button size="sm" data-testid="button-enroll-now">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background/95 backdrop-blur-lg"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} data-testid={`mobile-link-${item.label.toLowerCase()}`}>
                  <motion.div
                    className={`block py-3 px-4 rounded-lg font-medium transition-colors hover-elevate ${
                      location === item.href ? "text-primary bg-primary/10" : "text-foreground"
                    }`}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button className="w-full" data-testid="mobile-button-book-now">
                  Book Now
                </Button>
                <Button variant="outline" className="w-full" data-testid="mobile-button-enroll-now">
                  Enroll Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}