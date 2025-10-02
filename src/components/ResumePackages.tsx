import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Starter",
    price: "$99",
    description: "Perfect for entry-level professionals",
    features: [
      "1-2 Page Resume",
      "Cover Letter",
      "Basic Formatting",
      "48-Hour Delivery",
      "1 Round of Revisions"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$199",
    description: "Ideal for mid-career professionals",
    features: [
      "2-3 Page Resume",
      "Cover Letter + LinkedIn Update",
      "ATS Optimization",
      "24-Hour Delivery",
      "2 Rounds of Revisions",
      "Interview Preparation Tips"
    ],
    popular: true
  },
  {
    name: "Executive",
    price: "$349",
    description: "For executives and senior professionals",
    features: [
      "3+ Page Resume",
      "Cover Letter + LinkedIn Update",
      "Executive Biography",
      "Priority 12-Hour Delivery",
      "Unlimited Revisions",
      "1:1 Career Coaching Session",
      "Interview Guarantee"
    ],
    popular: false
  }
];

export default function ResumePackages() {
  return (
    <section className="py-16 bg-muted/30" id="resume-packages">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Resume Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package to showcase your professional journey and land your dream job.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md ${
                pkg.popular ? 'border-primary/30 ring-1 ring-primary/20' : 'border-border'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-medium rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{pkg.price}</span>
                <span className="text-muted-foreground">/package</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={`/contact?package=${encodeURIComponent(pkg.name)}`}
                className={`w-full py-2.5 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center ${
                  pkg.popular
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Need something more customized?</p>
          <Link 
            to="/contact?customQuote=true"
            className="text-primary font-medium hover:underline flex items-center justify-center mx-auto"
          >
            Contact us for a custom quote
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
