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
      <header className={`w-full sticky top-0 z-50 py-4 ${isMenuOpen ? '' : 'bg-white'}`}
        style={isMenuOpen ? { backgroundColor: '#FFE2E7' } : {}}>

        <div className="container mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo and Company Info */}
            <div className="flex items-center">
              <img
                src="/CompanyLogo.png"
                alt="Company Logo"
                className="w-32 h-16 object-contain"
              />
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
          className="absolute top-0 left-0 right-0 shadow-xl transform transition-transform duration-300 ease-in-out"
          style={{
            backgroundColor: '#FFE2E7',
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
            height: '100vh',
          }}
        >
          <div className="h-full overflow-y-auto pt-20"> {/* Add padding for the fixed header height */}
            <nav className="flex flex-col p-6 space-y-2">
              {navLinks.map((link) => {
                // Define icon source and alt text for each nav item that should have an icon
                let iconSrc = "";
                let iconAlt = "";

                if (link.label === "Home") {
                  iconSrc = "/Home.png";
                  iconAlt = "Home";
                } else if (link.label === "About Us") {
                  iconSrc = "/AboutUs.png";
                  iconAlt = "About Us";
                } else if (link.label === "FAQ") {
                  iconSrc = "/FAQ.png";
                  iconAlt = "FAQ";
                } else if (
                  link.label === "Pricing" ||
                  link.label === "Prices"
                ) {
                  iconSrc = "/Pricing.png";
                  iconAlt = "Pricing";
                } else if (
                  link.label === "Our Services" ||
                  link.label === "Services" ||
                  link.label.toLowerCase().includes("service")
                ) {
                  iconSrc = "/OurServices.png";
                  iconAlt = "Our Services";
                }

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-lg font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 hover:text-red-600"
                    onClick={closeMenu}
                  >
                    {iconSrc ? (
                      <div className="flex items-center gap-3">
                        <img
                          src={iconSrc}
                          alt={iconAlt}
                          className="w-5 h-5"
                        />
                        <span>{link.label}</span>
                      </div>
                    ) : (
                      link.label
                    )}
                  </Link>
                );
              })}

              {/* Mobile CTA: Ensured it sits well at the bottom of the visible screen */}
              <div className="pt-4">
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