import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "How long does it take to fulfill an order?",
    answer: "Most orders are printed and shipped within 2-3 business days. International shipping times vary by destination, typically taking 5-12 business days for delivery."
  },
  {
    question: "What file formats do you accept for designs?",
    answer: "We accept high-resolution PNG, JPG, PDF, AI, and PSD files. For best results, we recommend vector files (AI, PDF) with at least 300 DPI resolution."
  },
  {
    question: "Do you offer bulk pricing?",
    answer: "Yes! We offer tiered pricing based on order volume. The more you order, the better the price per unit. Contact our sales team for a custom quote."
  },
  {
    question: "What is your quality guarantee?",
    answer: "We stand behind our products with a 100% quality guarantee. If you're not satisfied with the print quality, we'll reprint your order or provide a full refund."
  },
  {
    question: "Can I integrate your platform with my existing e-commerce store?",
    answer: "Yes, we offer seamless integration with major e-commerce platforms including Shopify, WooCommerce, and Etsy through our API. Our development team can assist with custom integrations."
  },
  {
    question: "What kind of customer support do you provide?",
    answer: "We provide 24/7 customer support through live chat, email, and phone. Enterprise customers also get a dedicated account manager for personalized assistance."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-green-500">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our print-on-demand services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-green-500/30"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-green-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                } overflow-hidden`}
              >
                <p className="text-gray-400">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}