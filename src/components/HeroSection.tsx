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
              >
                RESUME PACKAGES
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
                src="/mobileview.png"
                alt="Professional woman with books and backpack"
                className="h-[270px] w-auto object-contain"
                style={{ marginTop: '15px' }}
              />
            </div>
            </div>
          {/* End of Left Content */}

          {/* Right Content - Hidden in mobile, visible in desktop */}
          <div className="hidden md:block relative hs-[350px] xs:h-[400px] sm:h-[450px] md:h-full w-full mt-10 md:mt-0 overflow-hidden flex flex-col">
            {/* Move image and circles ABOVE the badges */}
            <div className="flex flex-col items-center justify-end h-full w-full md:block md:contents order-1" style={{margin: "-20px"
            }}>
              {/* Decorative concentric circles and Hero Image (mobile: stacked, md+: absolutely positioned) */}
              <div className="relative w-full h-[220px] xs:h-[260px] sm:h-[320px] md:absolute md:inset-0 md:h-full md:w-full flex items-end justify-center z-10">
                {/* Circles */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ paddingTop: '20%' }}>
                  {/* Outer circle */}
                  <div className="absolute w-[95%] max-w-[500px] aspect-square rounded-full bg-[#FECDD9] opacity-90 left-1/2 -translate-x-1/2"></div>
                  {/* Middle circle */}
                  <div className="absolute w-[75%] max-w-[400px] aspect-square rounded-full bg-[#FDE2E4] opacity-90 left-1/2 -translate-x-1/2"></div>
                </div>
                {/* Hero Image */}
                <div className="relative flex items-end justify-center z-20 w-full h-full">
                    <img
                      src="/hero-women.png"
                      alt="Professional woman with books and backpack"
                      className="h-[55vw] xs:h-[65vw] sm:h-[400px] md:h-[110%] max-h-[600px] w-auto object-contain object-bottom transition-all duration-300 -mt-6 sm:-mt-8 md:mt-0"
                      style={{
                      minHeight: '140px',
                      }}
                     />
                    </div>

              </div>
            </div>

            {/* Rating Badge */}
            <div className="
              absolute
              left-1/2
              -translate-x-1/2
              top-2
              md:top-60
              md:left-7
              md:-translate-x-0
              bg-white
              rounded-2xl
              px-4 py-2
              md:px-9 md:py-4
              shadow-lg
              z-30
              max-w-[320px]
              md:w-auto
              flex
              items-center
              gap-3
              text-center
              order-2
            ">
              <div className="flex items-center gap-2 md:gap-4">
                <p className="text-xl xs:text-2xl md:text-3xl font-bold text-gray-900">4.9</p>
                <div className="flex flex-col items-start">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[11px] xs:text-xs text-gray-500 mt-1">Instructor Rating</p>
                </div>
              </div>
            </div>

            {/* Stats Badge */}
            <div className="
              absolute
              left-1/2
              -translate-x-1/2
              bottom-2
              md:bottom-8
              md:right-11
              md:left-auto
              md:-translate-x-0
              bg-white
              rounded-2xl
              px-3 py-2
              md:px-5 md:py-4
              shadow-lg
              flex items-center gap-2 md:gap-3
              z-30
              max-w-[220px]
              md:max-w-[260px]
              md:w-auto
              text-center
            ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-7 md:w-7 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zm0 13.28L5.18 12 4 12.55 12 17l8-4.45L18.82 12 12 15.28z"/>
              </svg>
              <div className="flex flex-col items-start">
                <p className="text-xl xs:text-2xl md:text-3xl font-bold text-gray-900 leading-none">260+</p>
                <p className="text-[11px] xs:text-xs text-gray-500 leading-tight">Online Resume Created</p>
              </div>
            </div>
          </div>
          {/* End of Right Content */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;