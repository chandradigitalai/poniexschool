"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const categories = [
  { id: "all", name: "All" },
  { id: "classrooms", name: "Classrooms" },
  { id: "labs", name: "Labs" },
  { id: "library", name: "Library" },
  { id: "sports", name: "Sports" },
  { id: "events", name: "Events" },
];

const galleryItems = [
  { id: 1, category: "classrooms", title: "Smart Classroom", color: "from-blue-400 to-blue-600", icon: "💻" },
  { id: 2, category: "classrooms", title: "Interactive Learning", color: "from-indigo-400 to-indigo-600", icon: "📚" },
  { id: 3, category: "labs", title: "Science Lab", color: "from-green-400 to-green-600", icon: "🔬" },
  { id: 4, category: "labs", title: "Computer Lab", color: "from-cyan-400 to-cyan-600", icon: "🖥️" },
  { id: 5, category: "library", title: "School Library", color: "from-yellow-400 to-yellow-600", icon: "📖" },
  { id: 6, category: "library", title: "Reading Corner", color: "from-orange-400 to-orange-600", icon: "📕" },
  { id: 7, category: "sports", title: "Sports Ground", color: "from-red-400 to-red-600", icon: "⚽" },
  { id: 8, category: "sports", title: "Indoor Sports", color: "from-pink-400 to-pink-600", icon: "🏓" },
  { id: 9, category: "events", title: "Annual Day", color: "from-purple-400 to-purple-600", icon: "🎭" },
  { id: 10, category: "events", title: "Sports Day", color: "from-teal-400 to-teal-600", icon: "🏆" },
  { id: 11, category: "classrooms", title: "Pre-Primary Wing", color: "from-rose-400 to-rose-600", icon: "🎨" },
  { id: 12, category: "sports", title: "Playground", color: "from-lime-400 to-lime-600", icon: "🎪" },
];

export default function SmartCampus() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="campus" className="section-padding bg-background">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Our Campus
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-3">
            Smart <span className="text-gradient">Campus</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white text-text-light hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.03, y: -5 }}
                onClick={() => setLightboxIndex(i)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] bg-gradient-to-br ${item.color} p-6 flex flex-col justify-end group`}
              >
                <span className="text-5xl mb-3">{item.icon}</span>
                <h4 className="text-white font-heading font-bold text-lg">
                  {item.title}
                </h4>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-50" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {filtered.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(
                      lightboxIndex === 0 ? filtered.length - 1 : lightboxIndex - 1
                    );
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(
                      lightboxIndex === filtered.length - 1 ? 0 : lightboxIndex + 1
                    );
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-10 h-10" />
                </button>
              </>
            )}

            <motion.div
              key={filtered[lightboxIndex].id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative rounded-3xl overflow-hidden max-w-3xl w-full aspect-video bg-gradient-to-br ${filtered[lightboxIndex].color} flex flex-col items-center justify-center p-12`}
            >
              <span className="text-8xl mb-6">{filtered[lightboxIndex].icon}</span>
              <h3 className="text-white font-heading text-3xl font-bold">
                {filtered[lightboxIndex].title}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
