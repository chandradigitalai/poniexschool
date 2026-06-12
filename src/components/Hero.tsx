"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Beaker,
  Trophy,
  ArrowRight,
  Play,
  Users,
  Building2,
  Award,
  Heart,
} from "lucide-react";

const stats = [
  { icon: Building2, value: "15+", label: "Years Excellence" },
  { icon: Users, value: "2500+", label: "Students" },
  { icon: Award, value: "150+", label: "Faculty" },
  { icon: Heart, value: "98%", label: "Parent Satisfaction" },
];

const floatingIcons = [
  { Icon: GraduationCap, delay: 0, x: "10%", y: "20%" },
  { Icon: BookOpen, delay: 0.5, x: "85%", y: "30%" },
  { Icon: Beaker, delay: 1, x: "90%", y: "60%" },
  { Icon: Trophy, delay: 1.5, x: "15%", y: "70%" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-[#0F1F4F]"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      {floatingIcons.map(({ Icon, delay, x, y }, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.15,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { delay: 2 + delay, duration: 1 },
            scale: { delay: 2 + delay, duration: 1 },
            y: {
              duration: 4 + delay,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Icon className="w-16 h-16 text-white" />
        </motion.div>
      ))}

      <div className="container-width px-4 pt-28 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Admissions Open 2026-27
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Nurturing{" "}
              <span className="text-accent">Young Minds</span>
              <br />
              for a Brighter Future
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Academic Excellence • Character Development • Future Ready Education
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#admissions"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-full text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Apply for Admission
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-full text-base transition-all duration-300 hover:bg-white/10"
              >
                <Play className="w-5 h-5" />
                Schedule a Campus Visit
              </a>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/60 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl" />
              <div className="grid grid-cols-2 gap-4 h-full">
                {[
                  { label: "Smart Classrooms", color: "from-blue-400 to-blue-600", icon: "💻" },
                  { label: "Sports Excellence", color: "from-green-400 to-green-600", icon: "⚽" },
                  { label: "Creative Arts", color: "from-purple-400 to-purple-600", icon: "🎨" },
                  { label: "Science Labs", color: "from-orange-400 to-orange-600", icon: "🔬" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? 1 : -1 }}
                    className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${item.color} p-6 flex flex-col justify-end`}
                  >
                    <span className="text-4xl mb-2">{item.icon}</span>
                    <span className="text-white font-semibold text-sm">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
