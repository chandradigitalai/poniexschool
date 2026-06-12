"use client";

import { motion } from "framer-motion";
import {
  Brain,
  GraduationCap,
  Monitor,
  Shield,
  Trophy,
  Music,
  Bus,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Learning",
    description: "AI-powered personalized learning paths for every student",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: GraduationCap,
    title: "Expert Teachers",
    description: "Highly qualified and experienced faculty members",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Monitor,
    title: "Digital Classrooms",
    description: "Fully equipped smart classrooms with interactive boards",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Shield,
    title: "Safe Campus",
    description: "24/7 CCTV surveillance and secure campus environment",
    color: "from-red-400 to-red-600",
  },
  {
    icon: Trophy,
    title: "Sports Programs",
    description: "Professional coaching in multiple sports disciplines",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: Music,
    title: "Arts & Music",
    description: "Comprehensive arts and music education programs",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: Bus,
    title: "Transport Facility",
    description: "Safe and reliable door-to-door transport service",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: Heart,
    title: "Personal Attention",
    description: "Low student-teacher ratio for individual focus",
    color: "from-teal-400 to-teal-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Why Phoenix
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-3">
            Why Choose{" "}
            <span className="text-gradient">Phoenix School</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
          <p className="text-text-light mt-4 max-w-2xl mx-auto">
            Discover what makes us the preferred choice for parents and students alike
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-heading text-lg font-bold text-text mb-2">
                {feature.title}
              </h4>
              <p className="text-text-light text-sm leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
