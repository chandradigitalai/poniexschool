"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";

const news = [
  {
    date: "March 15, 2026",
    title: "Admissions Open for 2026-27",
    excerpt: "Phoenix School invites applications for the upcoming academic year across all grades.",
    category: "Admissions",
    color: "bg-blue-100 text-blue-600",
  },
  {
    date: "February 28, 2026",
    title: "Annual Sports Day Celebration",
    excerpt: "Students showcased remarkable talent and sportsmanship at our annual sports event.",
    category: "Events",
    color: "bg-green-100 text-green-600",
  },
  {
    date: "January 20, 2026",
    title: "National Science Fair Winners",
    excerpt: "Our students won gold medals at the National Science Fair with innovative projects.",
    category: "Achievement",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function NewsEvents() {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Updates
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-3">
            News &{" "}
            <span className="text-gradient">Events</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-4 h-4 text-text-muted" />
                <span className="text-xs text-text-muted">{item.date}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${item.color}`}>
                  {item.category}
                </span>
              </div>
              <h4 className="font-heading text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              <p className="text-text-light text-sm leading-relaxed mb-4">
                {item.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Read More <ChevronRight className="w-4 h-4" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
