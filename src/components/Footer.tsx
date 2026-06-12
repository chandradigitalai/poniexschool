"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ExternalLink,
  Share2,
  Video,
  Link2,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Send,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Admissions", href: "#admissions" },
  { name: "Campus", href: "#campus" },
  { name: "Contact", href: "#contact" },
];

const programs = [
  "Nursery",
  "LKG",
  "UKG",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
];

const socialLinks = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: ExternalLink, href: "#", label: "Portal" },
  { icon: Share2, href: "#", label: "Community" },
  { icon: Video, href: "#", label: "Channel" },
  { icon: Link2, href: "#", label: "Connect" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0F1F4F] via-primary-dark to-primary overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMjB2MjBoLTEwdi0yMGgtMTB2LTEwaDEwdi0xMGgxMHYxMGgxMHYxMGgtMTB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=')] opacity-50" />

      <div className="container-width px-4 pt-16 pb-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">P</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white">
                  Phoenix School
                </h3>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Nurturing young minds for a brighter future with academic excellence, character development, and future-ready education since 2008.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-accent text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-5">
              Programs
            </h4>
            <ul className="space-y-3">
              {programs.map((program, i) => (
                <li key={i}>
                  <a
                    href="#academics"
                    className="text-white/60 hover:text-accent text-sm transition-colors duration-300"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-5">
              Newsletter
            </h4>
            <p className="text-white/60 text-sm mb-4">
              Subscribe to get updates about school events and announcements.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-l-xl bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/40 outline-none focus:border-accent transition-colors"
              />
              <button className="px-4 py-3 bg-accent hover:bg-accent-light text-white rounded-r-xl transition-colors flex-shrink-0">
                <Send className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                +91-XXXX-XXXXXX
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                info@phoenixschool.edu
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                123 Education Avenue, Your City
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Phoenix School. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-accent text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-accent text-xs transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/40 hover:text-accent text-xs transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-accent hover:bg-accent-light flex items-center justify-center text-white shadow-lg transition-colors"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
