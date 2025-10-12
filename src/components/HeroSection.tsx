import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HeroSection = () => {
  // Color constants for consistency
  const ACCENT_RED = 'text-red-600';
  const ACCENT_RED_BG = 'bg-red-600'; // Added for the second button
  const ACCENT_RED_HOVER = 'hover:bg-red-700';
  // Reverting to the original ACCENT_SHADOW class
  const ACCENT_SHADOW = 'shadow-[0_0_15px_rgba(239,68,68,0.6)]'; 
  
  // Removed CUSTOM_SHADOW_RED

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    // Fix: Add overflow-x-clip to the main section and to the container to prevent horizontal scroll on all browsers.
    <section
      className="w-full relative overflow-x-clip"
      style={{ 
        background: isMobile ? 'linear-gradient(to right, #fed8e0, #ffe2e7)' : 'linear-gradient(to right, #FECDD9, #FFE2E7)' 
      }}
    >
      <div className="container mx-auto px-0 min-h-[500px] max-h-[800px] flex items-center h-auto md:h-[70vh] pt-8 md:pt-0 overflow-x-clip">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
          {/* Left Content */}
          <div className="space-y-7 z-10 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-0">
            <h1 className="font-semibold leading-tight space-y-2 font-['Nunito Sans'] break-words text-[28px] xs:text-[32px] sm:text-[36px] md:text-[64px]">
              {/* Mobile: All lines in one line each */}
              <div className="block md:hidden text-center space-y-1">
                <div className="text-black leading-tight">Your Resume</div>
                <div className="relative inline-block w-full">
                  <span className={`relative z-10 ${ACCENT_RED} block leading-tight`}>
                    Deserves A Yes
                  </span>
                  <span className="text-black block leading-tight">Let's</span>
                </div>
                <div className="text-black leading-tight">Make It Happen</div>
              </div>
              {/* Desktop: All lines in one line each */}
              <div className="hidden md:block">
                <div className="text-black">Your Resume</div>
                <div className="relative inline-block">
                  <span className={`relative z-10 ${ACCENT_RED}`}>
                    Deserves A Yes{' '}
                    <span className="text-black">Let's</span>
                  </span>
                  {/* Show SVG underlines only on desktop (md and up).
                  */}
                  <div className="absolute top-full left-0 w-full xs:w-[110%] max-w-full overflow-x-clip mt-1 hidden md:block">
                    <div className="flex flex-col items-center -mt-1 space-y-[-4px] w-full max-w-full overflow-x-clip">
                      <svg
                        width="100%"
                        height="8"
                        viewBox="0 0 500 15"
                        className={`${ACCENT_RED} -translate-x-[20%]`}
                        style={{ maxWidth: '100%' }}
                      >
                        <path d="M0,8 C100,0 400,0 500,8" stroke="currentColor" fill="none" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      <svg
                        width="100%"
                        height="10"
                        viewBox="0 0 500 15"
                        className={`${ACCENT_RED} -translate-x-[20%]`}
                        style={{ maxWidth: '100%' }}
                      >
                        <path d="M0,12 C100,4 400,4 500,12" stroke="currentColor" fill="none" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="text-black">Make It Happen</div>
              </div>
            </h1>

            <p className="text-[15px] xs:text-[16px] sm:text-lg leading-7 max-w-xl font-['Nunito Sans']">
              If Your Resume Isn't Getting Responses, It's Time For An Upgrade. Get An ATS-Optimized Resume Crafted By HR Experts To Help You Land More Interviews. Our Resumes Are Designed To Get Your Foot In The Door And Place Your Name At The Top Of The Shortlist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="sm"
                className={`px-6 sm:px-8 text-sm sm:text-base rounded-full border-2 border-red-600 bg-white ${ACCENT_RED} font-semibold ${ACCENT_SHADOW} hover:bg-red-50 w-auto mx-auto md:mx-0`}
                asChild
              >
                <a href="/services">RESUME PACKAGES</a>
              </Button>

              <Button
                size="sm"
                className={`px-6 sm:px-8 text-sm sm:text-base rounded-full ${ACCENT_RED_BG} text-white font-semibold ${ACCENT_SHADOW} ${ACCENT_RED_HOVER} w-auto mx-auto md:mx-0`}
                asChild
              >
                <a href="/contact">CONTACT US</a>
              </Button>
            </div>

            {/* Mobile Image - Only show in mobile view, below Contact Us button */}
            <div className="block md:hidden flex justify-center -mt-32">
              <img
                src="/HeroImage.png"
                alt="Hero Image"
                className="h-[270px] w-auto object-contain"
                style={{ marginTop: '15px' }}
              />
            </div>
            </div>
          {/* End of Left Content */}

          {/* Right Content - Hidden in mobile, visible in desktop */}
          <div className="hidden md:block relative w-full h-full min-h-[300px] xs:min-h-[350px] sm:min-h-[400px] md:min-h-[500px] mt-10 md:mt-0">
            {/* Hero Image */}
            <div className="absolute inset-0 flex items-end justify-center">
              <img
                src="/HeroImage.png"
                alt="Hero Image"
                className="max-h-full w-auto object-contain"
                style={{ display: 'block', marginBottom: '0' }}
              />
            </div>
          </div>
          {/* End of Right Content */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;