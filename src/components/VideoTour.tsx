"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function VideoTour() {
  const [isPlaying, setIsPlaying] = useState(false);

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
            Virtual Tour
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-3">
            Campus <span className="text-gradient">Video Tour</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
          <p className="text-text-light mt-4 max-w-2xl mx-auto">
            Take a virtual tour of our state-of-the-art campus
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-br from-primary to-primary-dark group cursor-pointer"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {!isPlaying ? (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-lg"
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </motion.div>
            </div>
          ) : (
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(false);
                }}
                className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <Pause className="w-5 h-5" />
              </button>
            </div>
          )}

          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-white p-8">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-10 h-10 ml-1" />
              </div>
              <h3 className="font-heading text-2xl font-bold">Phoenix School Campus Tour</h3>
              <p className="text-white/70 mt-2">Experience our world-class facilities</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
