"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is the age criteria for admission?",
    answer: "Nursery: 2.5-3.5 years, LKG: 3.5-4.5 years, UKG: 4.5-5.5 years, Grade 1: 5.5-6.5 years. Age is calculated as of March 31st of the academic year.",
  },
  {
    question: "What documents are required for admission?",
    answer: "Birth certificate, previous school report card (if applicable), transfer certificate, passport-size photographs, Aadhar card copy, and vaccination record.",
  },
  {
    question: "Does the school provide transport facilities?",
    answer: "Yes, we have a fleet of GPS-enabled, safe school buses covering all major routes in the city. Each bus has a female attendant and CCTV cameras.",
  },
  {
    question: "What is the student-teacher ratio?",
    answer: "We maintain an excellent student-teacher ratio of 20:1 to ensure personalized attention to every child.",
  },
  {
    question: "Are there extracurricular activities available?",
    answer: "Absolutely! We offer a wide range of activities including sports, music, dance, art, science fairs, Olympiad training, cultural events, and summer camps.",
  },
  {
    question: "What curriculum does the school follow?",
    answer: "We follow the CBSE curriculum with a blend of modern teaching methodologies, experiential learning, and holistic development programs.",
  },
  {
    question: "Is there a parental involvement program?",
    answer: "Yes, we have regular parent-teacher meetings, workshops, and events to ensure active parental participation in the child's educational journey.",
  },
  {
    question: "What safety measures are in place?",
    answer: "Our campus has 24/7 CCTV surveillance, security personnel, bio-metric access, safe transport with GPS tracking, and a comprehensive child safety policy.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-white">
      <div className="container-width max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-3">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`rounded-2xl border transition-all duration-300 cursor-pointer ${
                openIndex === i
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-3">
                  <HelpCircle
                    className={`w-5 h-5 flex-shrink-0 ${
                      openIndex === i ? "text-primary" : "text-text-muted"
                    }`}
                  />
                  <h4 className="font-medium text-text text-sm sm:text-base">
                    {faq.question}
                  </h4>
                </div>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-text-muted transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-text-light text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
