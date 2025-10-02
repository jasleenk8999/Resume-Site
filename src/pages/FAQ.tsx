import { useState } from "react";
import Header from "@/components/Header";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of services including web development, mobile app development, UI/UX design, and consulting services to help businesses establish and grow their online presence."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while more complex applications can take several months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing models including fixed-price projects, monthly retainers, and hourly rates. Our pricing depends on the project scope, timeline, and specific requirements. Please check our Pricing page or contact us for a custom quote."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer various support and maintenance packages to ensure your digital products continue to perform optimally. Our support services include updates, security patches, performance optimization, and more."
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with a wide range of modern technologies including React, Next.js, Node.js, Python, and various databases and cloud services. We choose the best technology stack based on your specific project requirements."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Find answers to common questions about our services and processes
          </p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 pt-0 text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-card rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
            <p className="mb-4">Can't find the answer you're looking for? We're here to help!</p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
