"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Contact
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-3">
            Get In{" "}
            <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
          <p className="text-text-light mt-4 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out to us for admissions, inquiries, or a campus visit
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-[400px] lg:h-auto"
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold text-text mb-2">
                  Phoenix School Campus
                </h3>
                <p className="text-text-light">
                  123 Education Avenue,<br />
                  Knowledge Park,<br />
                  Your City - 560001
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-6"
          >
            <div className="bg-background rounded-2xl p-6 border border-gray-100">
              <h3 className="font-heading text-xl font-bold text-text mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-light">Phone</p>
                    <a
                      href="tel:+91XXXXXXXXXX"
                      className="font-medium text-text hover:text-primary transition-colors"
                    >
                      +91-XXXX-XXXXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-light">Email</p>
                    <a
                      href="mailto:info@phoenixschool.edu"
                      className="font-medium text-text hover:text-primary transition-colors"
                    >
                      info@phoenixschool.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-light">Address</p>
                    <p className="font-medium text-text">
                      123 Education Avenue, Knowledge Park, Your City
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-light">Office Hours</p>
                    <p className="font-medium text-text">
                      Mon - Sat: 8:00 AM - 3:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#20BD5C] text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Chat with us on WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
