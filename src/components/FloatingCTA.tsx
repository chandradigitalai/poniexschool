"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  return (
    <>
      <motion.a
        href="#admissions"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-40 lg:hidden px-6 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
      >
        Apply Now
      </motion.a>

      <motion.a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5C] flex items-center justify-center shadow-lg transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>
    </>
  );
}
