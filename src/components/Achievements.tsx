"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Award, Users, GraduationCap, Building2, Heart } from "lucide-react";

interface CounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

function Counter({ end, suffix, duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = (Date.now() - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref}>
      <span className="font-heading text-4xl sm:text-5xl font-bold text-white">
        {count}
        {suffix}
      </span>
    </div>
  );
}

const achievements = [
  { icon: Award, value: 100, suffix: "+", label: "Awards" },
  { icon: Users, value: 2500, suffix: "+", label: "Students" },
  { icon: GraduationCap, value: 150, suffix: "+", label: "Faculty" },
  { icon: Building2, value: 15, suffix: "+", label: "Years Excellence" },
  { icon: Heart, value: 98, suffix: "%", label: "Parent Satisfaction" },
];

export default function Achievements() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-[#0F1F4F] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMjB2MjBoLTEwdi0yMGgtMTB2LTEwaDEwdi0xMGgxMHYxMGgxMHYxMGgtMTB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=')] opacity-50" />

      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Achievements
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            Our <span className="text-accent">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-white rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <item.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <Counter end={item.value} suffix={item.suffix} />
              <p className="text-white/70 text-sm mt-1 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
