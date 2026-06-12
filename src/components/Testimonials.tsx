"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of Aarav, Grade 3",
    image: "👩",
    rating: 5,
    text: "Phoenix School has been a wonderful place for my child. The teachers are incredibly dedicated, and the holistic approach to education has helped my son grow in confidence and academics.",
  },
  {
    name: "Rajesh Kumar",
    role: "Parent of Sneha, Grade 5",
    image: "👨",
    rating: 5,
    text: "We chose Phoenix School for its excellent infrastructure and teaching methodology. The smart classrooms and sports facilities are world-class. Highly recommended!",
  },
  {
    name: "Ananya Patel",
    role: "Student, Grade 5",
    image: "👧",
    rating: 5,
    text: "I love my school! The teachers make learning fun, and I get to participate in so many activities like dance, art, and sports. Every day at Phoenix is exciting!",
  },
  {
    name: "Dr. Mehta",
    role: "Parent of Rohan, Grade 4",
    image: "👨‍⚕️",
    rating: 4,
    text: "The academic standards at Phoenix School are outstanding. My child has shown remarkable progress in both studies and extracurricular activities. The regular parent-teacher interactions keep us well-informed.",
  },
  {
    name: "Sarah Williams",
    role: "Parent of Emma, Grade 2",
    image: "👩‍🦰",
    rating: 5,
    text: "As an expat family, we were nervous about choosing a school. Phoenix School made the transition seamless. The inclusive environment and personalized attention have been remarkable.",
  },
  {
    name: "Arjun Singh",
    role: "Student, Grade 5",
    image: "👦",
    rating: 5,
    text: "Phoenix School is the best! I won the Math Olympiad gold medal because of my teachers' guidance. The science lab is my favorite place!",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (d: number) => ({
      x: d > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

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
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-3">
            What Parents & Students{" "}
            <span className="text-gradient">Say</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100">
            <div className="relative min-h-[280px] flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full p-8 lg:p-12"
                >
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="text-text-light text-lg leading-relaxed mb-6">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{testimonials[current].image}</span>
                    <div>
                      <h4 className="font-heading font-bold text-text">
                        {testimonials[current].name}
                      </h4>
                      <p className="text-text-light text-sm">
                        {testimonials[current].role}
                      </p>
                    </div>
                    <div className="ml-auto flex gap-1">
                      {Array.from({ length: testimonials[current].rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-accent text-accent"
                          />
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-text-light hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-text-light hover:text-primary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
