"use client";

import { motion } from "framer-motion";
import { FileText, MapPin, Users, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: FileText,
    title: "Submit Enquiry",
    description: "Fill out the online enquiry form or visit our campus for a preliminary discussion",
    color: "from-blue-400 to-blue-600",
  },
  {
    step: 2,
    icon: MapPin,
    title: "Campus Visit",
    description: "Schedule a visit to explore our state-of-the-art facilities and meet our team",
    color: "from-purple-400 to-purple-600",
  },
  {
    step: 3,
    icon: Users,
    title: "Interaction",
    description: "A friendly interaction session between the student, parents, and faculty",
    color: "from-orange-400 to-orange-600",
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Admission Confirmed",
    description: "Complete the formalities and welcome your child to the Phoenix family!",
    color: "from-green-400 to-green-600",
  },
];

export default function AdmissionsProcess() {
  return (
    <section id="admissions" className="section-padding bg-white">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Admissions
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-3">
            Admission <span className="text-gradient">Process</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
          <p className="text-text-light mt-4 max-w-2xl mx-auto">
            A simple and transparent admission process to welcome your child to Phoenix School
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2" />

          <div className="grid lg:grid-cols-4 gap-6">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-6">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                  >
                    <item.icon className="w-9 h-9 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {item.step}
                  </div>
                </div>

                <h4 className="font-heading text-lg font-bold text-text mb-2">
                  {item.title}
                </h4>
                <p className="text-text-light text-sm leading-relaxed">
                  {item.description}
                </p>

                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-10">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
