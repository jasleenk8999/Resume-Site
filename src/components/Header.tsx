import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/**
 * Header component with logo and navigation
 * Pixel-perfect implementation matching Figma design
 */
const Header = () => {
  // Use a strong, consistent red for primary accents (often red-600/700)
  const ACCENT_RED = 'bg-red-600';
  const ACCENT_RED_HOVER = 'hover:bg-red-700';
  const ACCENT_SHADOW = 'shadow-[0_0_15px_rgba(220,38,38,0.5)]';
  
  // Note: Assuming `hsl(var(--primary))` resolves to a dark color for the logo swoosh.

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Use py-5 for better vertical padding, matching typical designs */}
      <div className="container mx-auto px-6 py-5"> 
        <div className="flex items-center justify-between">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8"> {/* Reduced logo size for better balance */}
              {/* Red swoosh icon */}
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // Using a consistent strong red color for the icon
                className="w-full h-full text-red-600" 
              >
                <path
                  d="M8 16C8 16 12 8 20 8C24 8 26 10 26 13C26 16 24 18 20 18C16 18 12 20 12 24"
                  stroke="currentColor" // Uses the text-red-600 color
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              {/* Ensure text color is black/dark gray for contrast */}
              <span className="text-xl font-extrabold text-gray-900 leading-none font-['Nunito Sans']">
                COMPANY
              </span>
              <span className="text-xs text-gray-500 leading-none mt-1 font-['Nunito Sans']">
                Business Tagline
              </span>
            </div>
          </div>
          
          {/* Navigation - Hidden on mobile, shown on medium screens and up */}
          <nav className="hidden lg:flex items-center gap-6"> 
            <Link
              to="/"
              className="text-base font-medium text-gray-700 hover:text-red-600 transition-colors font-['Nunito Sans']"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-base font-medium text-gray-700 hover:text-red-600 transition-colors font-['Nunito Sans']"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-base font-medium text-gray-700 hover:text-red-600 transition-colors font-['Nunito Sans']"
            >
              Our Services
            </Link>
            <Link
              to="/pricing"
              className="text-base font-medium text-gray-700 hover:text-red-600 transition-colors font-['Nunito Sans']"
            >
              Pricing
            </Link>
            <Link
              to="/faq"
              className="text-base font-medium text-gray-700 hover:text-red-600 transition-colors font-['Nunito Sans']"
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Button - Hidden on mobile, shown on medium screens and up */}
          {/* Adjusted py-2 h-10 for a standard, pixel-perfect button height */}
          <Link to="/get-quote" className="hidden lg:inline-flex"> 
            <Button 
              size="default" 
              className={`px-6 py-2 h-10 text-base font-medium rounded-full ${ACCENT_RED} text-white ${ACCENT_SHADOW} ${ACCENT_RED_HOVER} transition-colors font-['Nunito Sans']`}
            >
              Get A Quote
            </Button>
          </Link>

          
          {/* Mobile Menu Button - Visible on mobile, hidden on desktop */}
          {/* This is the mobile CTA/Menu trigger */}
          <button className="lg:hidden p-2 text-gray-800" aria-label="Menu">
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