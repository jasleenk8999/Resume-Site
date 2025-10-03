import { Button } from "@/components/ui/button";

const HeroSection = () => {
  // Color constants for consistency
  const ACCENT_RED = 'text-red-600';
  const ACCENT_RED_HOVER = 'hover:bg-red-700';
  const ACCENT_SHADOW = 'shadow-[0_0_15px_rgba(239,68,68,0.6)]';

  return (
    // Fix: Add overflow-x-clip to the main section and to the container to prevent horizontal scroll on all browsers.
    <section
      className="w-full relative overflow-x-clip"
      style={{ background: 'linear-gradient(to right, #FECDD9, #FFE2E7)' }}
    >
      <div className="container mx-auto px-0 min-h-[500px] max-h-[800px] flex items-center h-auto md:h-[70vh] pt-24 md:pt-0 overflow-x-clip">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
          {/* Left Content */}
          <div className="space-y-7 z-10 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-0">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-[64px] font-semibold leading-tight space-y-2 font-['Nunito Sans'] break-words">
              <div className="text-black">Your Resume</div>
              <div className="relative inline-block">
                <span className={`relative z-10 ${ACCENT_RED}`}>Deserves A Yes</span>
                {/* 
                  Show SVG underlines on all screen sizes, but scale them down and adjust width for mobile to prevent overflow.
                */}
                <div className="absolute top-full left-0 w-full xs:w-[110%] max-w-full overflow-x-clip mt-1">
                  <div className="flex flex-col items-center -mt-1 space-y-[-4px] w-full max-w-full overflow-x-clip">
                    <svg
                      width="100%"
                      height="8"
                      viewBox="0 0 500 15"
                      className={`${ACCENT_RED} -translate-x-[0%] xs:-translate-x-[2%]`}
                      style={{ maxWidth: '100%' }}
                    >
                      <path d="M0,8 C100,0 400,0 500,8" stroke="currentColor" fill="none" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    <svg
                      width="100%"
                      height="10"
                      viewBox="0 0 500 15"
                      className={`${ACCENT_RED} -translate-x-[0%] xs:-translate-x-[2%]`}
                      style={{ maxWidth: '100%' }}
                    >
                      <path d="M0,12 C100,4 400,4 500,12" stroke="currentColor" fill="none" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="text-black">Let's Make It Happen</div>
            </h1>

            <p className="text-[15px] sm:text-lg leading-7 max-w-xl font-['Nunito Sans']">
              If Your Resume Isn't Getting Responses, It's Time For An Upgrade. Get An ATS-Optimized Resume Crafted By HR Experts To Help You Land More Interviews. Our Resumes Are Designed To Get Your Foot In The Door And Place Your Name At The Top Of The Shortlist.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className={`px-8 rounded-full border-2 border-red-600 bg-white ${ACCENT_RED} font-semibold ${ACCENT_SHADOW} hover:bg-red-50 w-full sm:w-auto`}
                onClick={() => {
                  const element = document.getElementById('resume-packages');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                RESUME PACKAGES
              </Button>
              <Button
                size="lg"
                className={`px-8 rounded-full ${ACCENT_RED.replace('text', 'bg')} text-white font-semibold ${ACCENT_SHADOW} ${ACCENT_RED_HOVER} w-full sm:w-auto`}
                asChild
              >
                <a href="/contact">
                  CONTACT US
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative h-[350px] xs:h-[400px] sm:h-[450px] md:h-full w-full mt-10 md:mt-0 overflow-hidden">
            {/* Decorative concentric circles */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: '20%' }}>
              {/* Outer circle */}
              <div className="absolute w-[95%] max-w-[500px] aspect-square rounded-full bg-[#FECDD9] opacity-90 left-1/2 -translate-x-1/2"></div>
              {/* Middle circle */}
              <div className="absolute w-[75%] max-w-[400px] aspect-square rounded-full bg-[#FDE2E4] opacity-90 left-1/2 -translate-x-1/2"></div>
            </div>

            {/* Hero Image */}
            <div className="absolute inset-0 flex items-end justify-center z-20">
              <img
                src="/hero-women.png"
                alt="Professional woman with books and backpack"
                className="h-[70vw] xs:h-[80vw] sm:h-[400px] md:h-[110%] max-h-[600px] w-auto object-contain object-bottom transition-all duration-300"
                style={{
                  minHeight: '180px',
                }}
              />
            </div>

            {/* Rating Badge - 3. CRITICAL FIX: Removed dynamic width (w-11/12) and rely on max-w, as positioning centered it. */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 md:top-60 md:left-7 md:-translate-x-0 bg-white rounded-2xl px-6 py-3 md:px-9 md:py-4 shadow-lg z-30 max-w-[320px] md:w-auto">
              <div className="flex items-center gap-4">
                <p className="text-2xl md:text-3xl font-bold text-gray-900">4.9</p>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Instructor Rating</p>
                </div>
              </div>
            </div>

            {/* Stats Badge - 3. CRITICAL FIX: Removed dynamic width (w-11/12) */}
            <div className="absolute bottom-4 right-1/2 translate-x-1/2 md:bottom-8 md:right-11 md:-translate-x-0 bg-white rounded-2xl px-4 py-3 md:px-5 md:py-4 shadow-lg flex items-center gap-3 z-30 max-w-[260px] md:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zm0 13.28L5.18 12 4 12.55 12 17l8-4.45L18.82 12 12 15.28z"/>
              </svg>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">260+</p>
                <p className="text-xs text-gray-500">Online Resume Created</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;