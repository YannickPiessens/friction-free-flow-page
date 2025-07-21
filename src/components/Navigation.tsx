import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "For Creators", href: "#" },
    { name: "For Brands", href: "#" },
    { name: "Success Stories", href: "#" },
    { name: "Pricing", href: "#" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-luxury-dark/10 backdrop-blur-md border-b border-luxury-gold/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-luxury rounded-lg flex items-center justify-center">
              <span className="text-luxury-dark font-bold text-sm">I</span>
            </div>
            <span className="text-luxury-light font-bold text-xl">InfluencerHub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-luxury-light/80 hover:text-luxury-gold transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-luxury-light hover:text-luxury-gold">
              Sign In
            </Button>
            <Button variant="luxury" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-luxury-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-luxury-dark/95 backdrop-blur-md border-t border-luxury-gold/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-luxury-light/80 hover:text-luxury-gold transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 px-3 pt-4">
                <Button variant="ghost" className="text-luxury-light justify-start">
                  Sign In
                </Button>
                <Button variant="luxury" className="justify-start">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};