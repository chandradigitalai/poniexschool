"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Sparkles } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide a nurturing environment that fosters academic excellence, creative thinking, and character development in every student.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be a leading institution that shapes future-ready global citizens with strong values and a passion for lifelong learning.",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, Excellence, Innovation, Respect, and Compassion form the foundation of everything we do at Phoenix School.",
    color: "from-orange-400 to-orange-600",
  },
];

const timeline = [
  { year: "2008", event: "Foundation Year", desc: "Phoenix School was established" },
  { year: "2012", event: "CBSE Affiliation", desc: "Received CBSE affiliation for grades up to 5" },
  { year: "2016", event: "Smart Campus", desc: "Launched digital classrooms and smart learning" },
  { year: "2020", event: "Top Ranked", desc: "Ranked among top 10 schools in the region" },
  { year: "2024", event: "Excellence Award", desc: "Received National Education Excellence Award" },
];

export default function AboutSchool() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            About Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-3">
            Welcome to{" "}
            <span className="text-gradient">Phoenix School</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
              <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-12 h-12" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold">Phoenix School</h3>
                  <p className="text-white/70">Since 2008</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text mb-6">
              Our Story of{" "}
              <span className="text-primary">Excellence</span>
            </h3>
            <p className="text-text-light leading-relaxed mb-6">
              Founded in 2008, Phoenix School has been at the forefront of providing
              quality education that combines academic rigor with holistic development.
              Our experienced faculty, state-of-the-art infrastructure, and innovative
              teaching methodologies ensure that every child receives the best possible
              foundation for their future.
            </p>
            <p className="text-text-light leading-relaxed mb-8">
              We believe in nurturing not just scholars, but well-rounded individuals
              who are prepared to face the challenges of tomorrow with confidence,
              creativity, and compassion.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Learn More About Us
              <Sparkles className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <card.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-heading text-xl font-bold text-text mb-3">
                {card.title}
              </h4>
              <p className="text-text-light leading-relaxed text-sm">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-center text-text mb-12">
            Our <span className="text-gradient">Journey</span>
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1" />
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">{i + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <span className="text-primary font-bold font-heading text-lg">
                      {item.year}
                    </span>
                    <h4 className="font-heading text-lg font-bold text-text mt-1">
                      {item.event}
                    </h4>
                    <p className="text-text-light text-sm mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
