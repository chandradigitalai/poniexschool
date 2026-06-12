"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Sparkles, Star, ChevronRight } from "lucide-react";

const programs = [
  {
    id: "nursery",
    name: "Nursery",
    age: "2.5 - 3.5 Years",
    image: "🎨",
    curriculum: [
      "Play-based learning approach",
      "Language development",
      "Fine motor skills activities",
      "Social & emotional development",
    ],
    activities: [
      "Story telling sessions",
      "Art & craft activities",
      "Music & movement",
      "Outdoor play time",
    ],
    outcomes: [
      "Enhanced communication skills",
      "Improved coordination",
      "Social confidence",
      "Love for learning",
    ],
  },
  {
    id: "lkg",
    name: "LKG",
    age: "3.5 - 4.5 Years",
    image: "📚",
    curriculum: [
      "Pre-reading & writing skills",
      "Basic numeracy concepts",
      "Environmental awareness",
      "Creative expression",
    ],
    activities: [
      "Rhymes & phonics",
      "Show & tell",
      "Nature walks",
      "Group games",
    ],
    outcomes: [
      "Reading readiness",
      "Number recognition",
      "Curiosity about world",
      "Team collaboration",
    ],
  },
  {
    id: "ukg",
    name: "UKG",
    age: "4.5 - 5.5 Years",
    image: "✏️",
    curriculum: [
      "Reading & writing fluency",
      "Mathematical operations",
      "Science exploration",
      "Computer awareness",
    ],
    activities: [
      "Reading club",
      "Math games",
      "Simple experiments",
      "Creative writing",
    ],
    outcomes: [
      "Fluent reading skills",
      "Basic problem solving",
      "Scientific thinking",
      "Digital literacy",
    ],
  },
  {
    id: "grade1",
    name: "Grade 1",
    age: "5.5 - 6.5 Years",
    image: "📖",
    curriculum: [
      "English language & grammar",
      "Mathematics fundamentals",
      "General science",
      "Social studies",
    ],
    activities: [
      "Debate & discussion",
      "Math Olympiad prep",
      "Science projects",
      "Cultural events",
    ],
    outcomes: [
      "Strong language foundation",
      "Logical reasoning",
      "Analytical thinking",
      "Cultural awareness",
    ],
  },
  {
    id: "grade2",
    name: "Grade 2",
    age: "6.5 - 7.5 Years",
    image: "🔬",
    curriculum: [
      "Advanced language skills",
      "Multiplication & division",
      "Plant & animal science",
      "Community studies",
    ],
    activities: [
      "Public speaking",
      "Math puzzles",
      "Gardening club",
      "Field trips",
    ],
    outcomes: [
      "Confident communication",
      "Computational skills",
      "Environmental awareness",
      "Social responsibility",
    ],
  },
  {
    id: "grade3",
    name: "Grade 3",
    age: "7.5 - 8.5 Years",
    image: "🌍",
    curriculum: [
      "Creative writing & comprehension",
      "Fractions & geometry",
      "Physical science basics",
      "Indian heritage",
    ],
    activities: [
      "Story writing",
      "Maths lab activities",
      "Science fair",
      "Heritage walks",
    ],
    outcomes: [
      "Creative expression",
      "Spatial understanding",
      "Scientific inquiry",
      "Cultural pride",
    ],
  },
  {
    id: "grade4",
    name: "Grade 4",
    age: "8.5 - 9.5 Years",
    image: "💡",
    curriculum: [
      "Advanced grammar & composition",
      "Decimals & measurements",
      "Human body & health",
      "Geography basics",
    ],
    activities: [
      "Essay competitions",
      "Maths Olympiad",
      "Health awareness",
      "Map reading",
    ],
    outcomes: [
      "Advanced writing skills",
      "Measurement skills",
      "Health consciousness",
      "Geographic awareness",
    ],
  },
  {
    id: "grade5",
    name: "Grade 5",
    age: "9.5 - 10.5 Years",
    image: "🚀",
    curriculum: [
      "Literature & advanced writing",
      "Percentage & statistics",
      "Physics & chemistry intro",
      "History & civics",
    ],
    activities: [
      "Literary club",
      "Maths Bee contest",
      "Lab experiments",
      "Model United Nations",
    ],
    outcomes: [
      "Literary appreciation",
      "Data analysis skills",
      "Scientific method",
      "Civic awareness",
    ],
  },
];

export default function AcademicPrograms() {
  const [activeTab, setActiveTab] = useState(programs[0].id);

  const activeProgram = programs.find((p) => p.id === activeTab)!;

  return (
    <section id="academics" className="section-padding bg-white">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Academics
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-3">
            Our Academic{" "}
            <span className="text-gradient">Programs</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {programs.map((program) => (
            <motion.button
              key={program.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(program.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === program.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-gray-100 text-text-light hover:bg-gray-200"
              }`}
            >
              {program.image} {program.name}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeProgram.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm"
          >
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{activeProgram.image}</span>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-text">
                      {activeProgram.name}
                    </h3>
                    <p className="text-primary font-medium text-sm">
                      Age Group: {activeProgram.age}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    CBSE Curriculum
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                    Holistic Learning
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-heading text-lg font-bold text-text mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Curriculum
                </h4>
                <ul className="space-y-3">
                  {activeProgram.curriculum.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-text-light"
                    >
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-heading text-lg font-bold text-text mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  Activities & Outcomes
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      Activities
                    </p>
                    <ul className="space-y-2">
                      {activeProgram.activities.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-text-light text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      Learning Outcomes
                    </p>
                    <ul className="space-y-2">
                      {activeProgram.outcomes.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-text-light text-sm"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
