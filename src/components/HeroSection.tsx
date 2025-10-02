import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#FECDD9] to-[#FFE2E7] relative overflow-hidden">
<div className="container mx-auto px-0 h-[70vh] min-h-[600px] max-h-[800px] flex items-center">        <div className="grid md:grid-cols-2 h-full w-full">          
          {/* Left Content */}
          <div className="space-y-9 z-10 flex flex-col justify-center px-6 md:px-8 lg:px-12">
            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-semibold leading-[1.1] space-y-2 font-['Nunito Sans']">
              <div className="text-black">Your Resume</div>
              <div className="relative inline-block">
                <span className="relative z-10 text-red-500">Deserves A Yes</span>
                <div className="absolute top-full left-0 w-[110%] mt-1">
                  <div className="flex flex-col items-center -mt-1 space-y-[-4px]">
                    <svg width="110%" height="8" viewBox="0 0 500 15" className="text-red-500 -translate-x-[2%]">
                      <path d="M0,8 C100,0 400,0 500,8" stroke="currentColor" fill="none" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    <svg width="110%" height="10" viewBox="0 0 500 15" className="text-red-500 -translate-x-[2%]">
                      <path d="M0,12 C100,4 400,4 500,12" stroke="currentColor" fill="none" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="text-black">Let's Make It Happen</div>
            </h1>

            <p className="text-base leading-7 max-w-xl font-['Nunito Sans']">
              If Your Resume Isn't Getting Responses, It's Time For An Upgrade. Get An ATS-Optimized Resume Crafted By HR Experts To Help You Land More Interviews. Our Resumes Are Designed To Get Your Foot In The Door And Place Your Name At The Top Of The Shortlist.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                size="lg" 
                className="px-8 rounded-full border-2 border-red-500 bg-white text-red-500 font-semibold shadow-[0_0_15px_rgba(239,68,68,0.6)] hover:bg-red-50"
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
                className="px-8 rounded-full bg-red-500 text-white font-semibold shadow-[0_0_15px_rgba(239,68,68,0.6)] hover:bg-red-600"
                asChild
              >
                <a href="/contact">
                  CONTACT US
                </a>
              </Button>
            </div>
          </div>

          <div className="relative h-full w-full">
  {/* Decorative concentric circles - increased size */}
  <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: '20%'}}>
    {/* Outer circle */}
    <div className="absolute w-[70%] aspect-square rounded-full bg-[#FECDD9] opacity-90"></div>
    {/* Middle circle */}
    <div className="absolute w-[55%] aspect-square rounded-full bg-[#FDE2E4] opacity-90"></div>
  </div>
  
  {/* Hero Image */}
  <div className="relative z-20 h-full w-full flex items-end justify-center">
  <img
    src="/hero-women.png"
    alt="Professional woman with books and backpack"
    className="h-full max-h-full w-auto object-contain object-bottom"
  />
</div>

            {/* Rating Badge */}
            <div className="absolute top-60 left-7 bg-white rounded-2xl px-9 py-4 shadow-lg z-30">
              <div className="flex items-center gap-4">
                <p className="text-3xl font-bold text-gray-900">4.9</p>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Instructor Rating</p>
                </div>
              </div>
            </div>

            {/* Stats Badge */}
            <div className="absolute bottom-8 right-11 bg-white rounded-2xl px-5 py-4 shadow-lg flex items-center gap-3 z-30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zm0 13.28L5.18 12 4 12.55 12 17l8-4.45L18.82 12 12 15.28z"/>
              </svg>
              <div>
                <p className="text-3xl font-bold text-gray-900">260+</p>
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