import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    icon: "🌐",
    category: "development",
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "API Integration",
      "Performance Optimization"
    ]
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Cross-platform mobile applications for iOS and Android using React Native and Flutter.",
    icon: "📱",
    category: "development",
    features: [
      "iOS & Android Apps",
      "Cross-Platform",
      "Push Notifications",
      "App Store Deployment"
    ]
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that enhance user experience and drive engagement.",
    icon: "🎨",
    category: "design",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems"
    ]
  },
  {
    id: 4,
    title: "Consulting",
    description: "Expert advice to help you make the right technology decisions for your business.",
    icon: "💡",
    category: "business",
    features: [
      "Technical Strategy",
      "Code Review",
      "Architecture Design",
      "Team Training"
    ]
  },
  {
    id: 5,
    title: "DevOps & Cloud",
    description: "Streamline your development workflow with our DevOps and cloud solutions.",
    icon: "☁️",
    category: "development",
    features: [
      "CI/CD Pipelines",
      "Cloud Migration",
      "Containerization",
      "Infrastructure as Code"
    ]
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Grow your online presence with our comprehensive digital marketing strategies.",
    icon: "📈",
    category: "business",
    features: [
      "SEO Optimization",
      "Content Strategy",
      "Social Media",
      "PPC Campaigns"
    ]
  }
];

const categories = [
  { id: 'all', name: 'All Services' },
  { id: 'development', name: 'Development' },
  { id: 'design', name: 'Design' },
  { id: 'business', name: 'Business' },
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
    className="group relative p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
  >
    <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></div>
    <div className="relative z-10">
      <div className="w-14 h-14 mb-4 rounded-xl bg-primary/10 text-3xl flex items-center justify-center text-primary">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-muted-foreground mb-4">{service.description}</p>
      <div className="mt-4 pt-4 border-t border-border/50">
        <h4 className="text-sm font-medium mb-2 text-muted-foreground">Key Features:</h4>
        <ul className="space-y-1.5">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center text-sm">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button className="mt-6 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors">
        Learn More →
      </button>
    </div>
  </motion.div>
);

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredServices, setFilteredServices] = useState(services);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredServices(services);
    } else {
      setFilteredServices(services.filter(service => service.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-4xl font-bold mb-4">What We Offer</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help bring your ideas to life with our expert services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/get-quote"
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-border font-medium rounded-lg hover:bg-muted transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
