import Header from "@/components/Header";

const pricingPlans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    features: [
      "Basic Website",
      "5 Pages",
      "Mobile Responsive",
      "Basic SEO",
      "Email Support"
    ]
  },
  {
    name: "Professional",
    price: "$299",
    period: "/month",
    features: [
      "Advanced Website",
      "Up to 15 Pages",
      "E-commerce Functionality",
      "Advanced SEO",
      "Priority Support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Custom Solution",
      "Unlimited Pages",
      "Advanced Features",
      "Dedicated Support",
      "24/7 Priority Support"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Pricing Plans</h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Choose the perfect plan for your business needs
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border ${
                plan.popular 
                  ? 'border-primary shadow-lg scale-105 bg-card' 
                  : 'border-border bg-background'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold text-center mb-6">
                {plan.price}
                <span className="text-lg font-normal text-muted-foreground">
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 px-6 rounded-lg font-medium ${
                  plan.popular 
                    ? 'bg-primary text-white hover:bg-primary/90' 
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
