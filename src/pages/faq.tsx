import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does your company provide?",
      answer:
        "We specialize in Web Development, Mobile App Development, Digital Marketing, E-commerce Solutions, and Graphic Design tailored to your business needs.",
    },
    {
      question: "How long does it take to build a website or mobile app?",
      answer:
        "Timelines vary depending on project scope. A basic website may take 2–4 weeks, while complex web apps or mobile applications may take 6–12 weeks.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes, we provide long-term maintenance packages to ensure your website or app stays secure, updated, and optimized.",
    },
    {
      question: "Can you redesign my existing website or app?",
      answer:
        "Absolutely! We offer redesign services to modernize outdated designs, improve performance, and enhance user experience.",
    },
    {
      question: "How much does a project cost?",
      answer:
        "Project cost depends on complexity, features, and timeline. We provide a free consultation and custom quote after understanding your requirements.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-br from-navy to-gray-900 min-h-screen py-12 sm:py-16 px-4 sm:px-6 md:px-8 text-white">
      {/* Title */}
      <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" data-aos="fade-up">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-gray-300 text-sm sm:text-base" data-aos="fade-up">
          Quick answers about our web, mobile, and design services.
        </p>
      </div>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-4 sm:p-5 shadow-lg transition-all duration-300 ${
              openIndex === index ? "ring-2 ring-orange" : "hover:bg-white/20"
            }`}
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-base sm:text-lg font-semibold">
                {faq.question}
              </h3>
              <ChevronDown
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-orange" : "text-gray-300"
                }`}
              />
            </button>

            {/* Animated Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index
                  ? "max-h-40 mt-3 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-200 text-sm sm:text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA at bottom */}
      <div className="text-center mt-10 sm:mt-12">
        <p className="text-gray-300 text-sm sm:text-base">
          Still have questions?
        </p>
        <a
          href="/contact"
          className="mt-3 inline-block bg-orange text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-orange/90 transition-all text-sm sm:text-base"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default FAQ;
