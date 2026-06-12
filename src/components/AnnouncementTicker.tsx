"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Megaphone, X } from "lucide-react";

const announcements = [
  "🎓 Admissions Open for Academic Year 2026-27! Apply Now",
  "🏆 Phoenix School ranked among Top 10 Schools in the Region",
  "📚 Summer Camp 2026 - Register for fun learning activities",
  "🏏 Annual Sports Day - Mark your calendars for February",
];

export default function AnnouncementTicker() {
  const [current, setCurrent] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  if (dismissed) return null;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-accent relative z-40"
    >
      <div className="container-width px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <Megaphone className="w-4 h-4 text-white flex-shrink-0" />
          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-white text-sm font-medium truncate"
            >
              {announcements[current]}
            </motion.p>
          </AnimatePresence>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-white/70 hover:text-white ml-4 flex-shrink-0"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
