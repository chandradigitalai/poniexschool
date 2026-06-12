"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Music,
  Palette,
  Microscope,
  Theater,
  Guitar as Graduation,
  Sun,
  Tent,
} from "lucide-react";

const activities = [
  { icon: Trophy, title: "Sports", description: "Cricket, Football, Basketball, Swimming & more", color: "from-blue-400 to-blue-600" },
  { icon: Music, title: "Music", description: "Vocal, Instrumental, Choir & Orchestra", color: "from-purple-400 to-purple-600" },
  { icon: Palette, title: "Dance", description: "Classical, Contemporary & Folk Dance", color: "from-pink-400 to-pink-600" },
  { icon: Palette, title: "Arts", description: "Painting, Sculpture & Digital Art", color: "from-orange-400 to-orange-600" },
  { icon: Microscope, title: "Science Fair", description: "Annual science exhibition & competitions", color: "from-green-400 to-green-600" },
  { icon: Graduation, title: "Olympiads", description: "Math, Science & English Olympiad training", color: "from-cyan-400 to-cyan-600" },
  { icon: Theater, title: "Cultural Events", description: "Annual day, festivals & talent shows", color: "from-red-400 to-red-600" },
  { icon: Sun, title: "Summer Camps", description: "Skill development & fun activities", color: "from-yellow-400 to-yellow-600" },
];

export default function StudentLife() {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Student Life
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-3">
            Vibrant <span className="text-gradient">Student Life</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
          <p className="text-text-light mt-4 max-w-2xl mx-auto">
            Beyond academics, we offer a rich tapestry of activities that nurture talents and build character
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <activity.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-heading text-lg font-bold text-text mb-2">
                {activity.title}
              </h4>
              <p className="text-text-light text-sm leading-relaxed">
                {activity.description}
              </p>
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
