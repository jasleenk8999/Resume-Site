import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X, Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Use variables for clarity and consistent color/shadow matching across the site
  const ACCENT_RED = 'bg-red-600';
  const ACCENT_RED_HOVER = 'hover:bg-red-700';
  const ACCENT_SHADOW = 'shadow-[0_0_15px_rgba(220,38,38,0.5)]'; // Corrected RGBA syntax for clarity
  
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Our Services" },
    { to: "/pricing", label: "Pricing" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <>
      {/* 1. HEADER BAR: Use py-4 instead of fixed h-20 for better fluid height */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 py-4">
        <div className="container mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo: Remains clean and simple */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 text-red-600">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 16C8 16 12 8 20 8C24 8 26 10 26 13C26 16 24 18 20 18C16 18 12 20 12 24"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-gray-900 leading-none font-['Nunito Sans']">
                  COMPANY
                </span>
                <span className="text-xs text-gray-500 leading-none mt-1 font-['Nunito Sans']">
                  Business Tagline
                </span>
              </div>
            </div>

            {/* Desktop Navigation (Unchanged, remains hidden on mobile) */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  // Ensured text size is precise (e.g., [16px] or [18px] from Figma)
                  className="text-[16px] font-medium text-gray-700 hover:text-red-600 transition-colors font-['Nunito Sans']"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA (Unchanged, remains hidden on mobile) */}
            <Link to="/get-quote" className="hidden lg:inline-flex">
              <Button 
                className={`px-6 h-10 text-base font-medium rounded-full ${ACCENT_RED} text-white ${ACCENT_SHADOW} ${ACCENT_RED_HOVER} transition-colors`}
              >
                Get A Quote
              </Button>
            </Link>

            {/* Mobile Menu Button - CRITICAL: Centered the button vertically */}
            <button 
              className="lg:hidden p-2 text-gray-800 focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 2. MOBILE MENU PANEL: Improved animation and full height handling */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={closeMenu}
          style={{ opacity: isMenuOpen ? 1 : 0 }}
        />
        
        {/* Menu Panel - Height fixed to screen size for better scrolling */}
        <div 
          className="absolute top-0 left-0 right-0 bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
          style={{
            // Use top-0 and translate to slide down from the top, instead of stretching height
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
            height: '100vh',
          }}
        >
          <div className="h-full overflow-y-auto pt-20"> {/* Add padding for the fixed header height */}
            <nav className="flex flex-col p-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-lg font-medium text-gray-700 hover:text-red-600 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile CTA: Ensured it sits well at the bottom of the visible screen */}
              <div className="pt-4 mt-2 border-t border-gray-100">
                <Link to="/get-quote" onClick={closeMenu} className="block">
                  <Button 
                    className={`w-full py-3 text-base font-medium rounded-lg ${ACCENT_RED} text-white ${ACCENT_SHADOW} ${ACCENT_RED_HOVER} transition-colors`}
                  >
                    Get A Quote
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;