/**
 * Features section showcasing 4 key benefits
 * Each feature card includes an illustration, title, and description
 */
const FeaturesSection = () => {
  const features = [
    {
      title: "A Resume That Passes ATS Filters",
      description:
        "Get a professionally written, keyword-optimized resume that lands in recruiter inboxes—not rejection piles.",
      image: "/resume.png",
      alt: "Resume icon"
    },
    {
      title: "A Cover Letter That Gets Read",
      description:
        "Stand out with a cover letter that speaks directly to the role and reflects your strengths.",
      image: "/cover-letter.png",
      alt: "Cover letter icon"
    },
    {
      title: "A LinkedIn Profile That Works For You",
      description:
        "Attract the right eyes, start conversations, and show up in recruiter searches.",
      image: "/linkedin.png",
      alt: "LinkedIn icon"
    },
    {
      title: "Interview Confidence",
      description:
        "Interview preparation with real HR professionals so you speak clearly, confidently, and convincingly.",
      image: "/interview.png",
      alt: "Interview icon"
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#FFE2E7] text-black text-sm font-medium px-4 py-1.5 rounded-md mb-1">
            What You Get
          </span>
          <h2 className="text-[22px] font-semibold text-gray-900 max-w-3xl mx-auto mt-4">
            You're Not Just Another Applicant And Your Resume Shouldn't Look Like One
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <div className="w-20 h-20 mb-6">
                    <img 
                      src={feature.image} 
                      alt={feature.alt}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <h3 className="text-[19px] font-normal text-gray-900 mb-4 text-left">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 flex-grow text-[17px] font-light text-left mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
