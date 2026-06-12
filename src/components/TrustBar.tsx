"use client";

import { motion } from "framer-motion";

const items = [
  { text: "Admissions Open 2026-27", icon: "🎓" },
  { text: "Smart Classrooms", icon: "💻" },
  { text: "CBSE Curriculum", icon: "📚" },
  { text: "Digital Learning", icon: "📱" },
  { text: "Sports Excellence", icon: "🏆" },
  { text: "Safe Transport", icon: "🚌" },
  { text: "Experienced Teachers", icon: "👨‍🏫" },
  { text: "Admissions Open 2026-27", icon: "🎓" },
  { text: "Smart Classrooms", icon: "💻" },
  { text: "CBSE Curriculum", icon: "📚" },
  { text: "Digital Learning", icon: "📱" },
  { text: "Sports Excellence", icon: "🏆" },
  { text: "Safe Transport", icon: "🚌" },
  { text: "Experienced Teachers", icon: "👨‍🏫" },
];

export default function TrustBar() {
  return (
    <div className="bg-gradient-to-r from-primary via-primary-dark to-primary py-4 overflow-hidden border-y border-white/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 mx-8 text-white font-medium text-sm sm:text-base"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.text}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent mx-4" />
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
