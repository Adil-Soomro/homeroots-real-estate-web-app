"use client";

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "What services do you offer for real estate clients?",
    answer:
      "We provide comprehensive services, including market analysis, property valuation, tailored marketing strategies, and legal documentation assistance to ensure a smooth buying or selling process.",
  },
  {
    id: 2,
    question: "How can I get started with your services?",
    answer:
      "Getting started is easy! Simply contact us through our website or phone, and our team will schedule a consultation to understand your needs and guide you through the process.",
  },
  {
    id: 3,
    question: "How do you assist with legal documentation?",
    answer:
      "Our legal team assists with all documentation required for property transactions, including contracts, agreements, and compliance with local regulations.",
  },
  {
    id: 4,
    question: "Can you help me find the right property?",
    answer:
      "Absolutely! Our experienced team will work closely with you to understand your preferences and budget, then present carefully curated properties that match your needs.",
  },
];

const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <section className="px-6 md:px-12 py-12 md:py-20 relative bg-slate-50 inset-0">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Frequently Asked <br /> Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition"
              >
                <span className="text-left text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <motion.div
                  className="shrink-0 ml-4"
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openId === faq.id ? (
                    <Minus size={24} className="text-gray-900" />
                  ) : (
                    <Plus size={24} className="text-gray-900" />
                  )}
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
