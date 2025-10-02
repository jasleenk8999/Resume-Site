import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/**
 * Header component with logo and navigation
 * Pixel-perfect implementation matching Figma design
 */
const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              {/* Red swoosh icon - made bolder and more prominent */}
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M8 16C8 16 12 8 20 8C24 8 26 10 26 13C26 16 24 18 20 18C16 18 12 20 12 24"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground leading-none font-['Open Sans']">
                COMPANY
              </span>
              <span className="text-xs text-muted-foreground leading-none mt-1 font-['Open Sans']">
                Business Tagline
              </span>
            </div>
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              Our Services
            </Link>
            <Link
              to="/pricing"
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/faq"
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Button */}
          <Link to="/get-quote">
            <Button 
              size="lg" 
              className="px-8 py-6 text-base font-medium rounded-full bg-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.6)] hover:bg-red-600 hidden md:inline-flex"
            >
              Get A Quote
            </Button>
          </Link>

          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
