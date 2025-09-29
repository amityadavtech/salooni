import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Heart } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  services: [
    { label: "Hair Styling", href: "/services" },
    { label: "Hair Color", href: "/services" },
    { label: "Hair Extensions", href: "/services" },
    { label: "Bridal Services", href: "/services" },
  ],
  academy: [
    { label: "Beginner Courses", href: "/courses" },
    { label: "Advanced Training", href: "/courses" },
    { label: "Certification", href: "/courses" },
    { label: "Career Support", href: "/courses" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription submitted"); // todo: remove mock functionality
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/">
              <h2 className="text-2xl font-serif font-bold text-primary">
                Summera Salon & Accademy
              </h2>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Where beauty meets artistry. Transform your look with our premium salon services or launch your career with our professional academy.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@summerasalon.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Beauty Street, City, State 12345</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-4">Salon Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Academy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-4">Academy</h3>
            <ul className="space-y-2">
              {footerLinks.academy.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to get beauty tips, course updates, and exclusive offers.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                required
                data-testid="input-newsletter"
              />
              <Button type="submit" className="w-full" size="sm" data-testid="button-newsletter-submit">
                Subscribe
              </Button>
            </form>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    className="w-10 h-10"
                    asChild
                    data-testid={`button-social-${social.label.toLowerCase()}`}
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="w-4 h-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </motion.div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-1">
            <span>© 2024 Summera Salon & Accademy. Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>for beauty enthusiasts.</span>
          </div>
          
          <div className="flex gap-6">
            <Link href="/privacy">
              <span className="hover:text-primary transition-colors cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms">
              <span className="hover:text-primary transition-colors cursor-pointer">
                Terms of Service
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}