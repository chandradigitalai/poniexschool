"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Star } from "lucide-react";

const teachers = [
  {
    name: "Dr. Sunita Verma",
    qualification: "Ph.D. in Education",
    experience: "18+ Years",
    subject: "Principal",
    image: "👩‍🏫",
    bio: "Visionary leader dedicated to educational excellence",
  },
  {
    name: "Mr. Amit Khanna",
    qualification: "M.Sc. Mathematics, B.Ed",
    experience: "15+ Years",
    subject: "Mathematics",
    image: "👨‍🏫",
    bio: "Making math fun and accessible for all students",
  },
  {
    name: "Ms. Priyanka Rao",
    qualification: "M.A. English, Ph.D.",
    experience: "12+ Years",
    subject: "English Literature",
    image: "👩‍🏫",
    bio: "Passionate about language and literature",
  },
  {
    name: "Mr. Ravi Sharma",
    qualification: "M.Sc. Physics, B.Ed",
    experience: "14+ Years",
    subject: "Science",
    image: "👨‍🔬",
    bio: "Inspiring young scientists through hands-on learning",
  },
  {
    name: "Ms. Neha Gupta",
    qualification: "M.A. Hindi, B.Ed",
    experience: "10+ Years",
    subject: "Hindi",
    image: "👩‍🏫",
    bio: "Dedicated to promoting linguistic diversity",
  },
  {
    name: "Mr. Vikram Singh",
    qualification: "M.P.Ed, NIS Coach",
    experience: "16+ Years",
    subject: "Physical Education",
    image: "👨‍🏫",
    bio: "Building champions on and off the field",
  },
];

export default function Faculty() {
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
            Faculty
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-3">
            Meet Our <span className="text-gradient">Expert Faculty</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
          <p className="text-text-light mt-4 max-w-2xl mx-auto">
            Our dedicated team of experienced educators is committed to nurturing every child&apos;s potential
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-5xl">{teacher.image}</span>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-text">
                      {teacher.name}
                    </h4>
                    <p className="text-primary font-medium text-sm">
                      {teacher.subject}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-text-light">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    {teacher.qualification}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-light">
                    <Award className="w-4 h-4 text-accent" />
                    {teacher.experience} Experience
                  </div>
                </div>

                <p className="text-text-light text-sm leading-relaxed">
                  {teacher.bio}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/[0.02] to-primary/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
