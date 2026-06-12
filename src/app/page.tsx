"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import AnnouncementTicker from "@/components/AnnouncementTicker";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutSchool from "@/components/AboutSchool";
import WhyChooseUs from "@/components/WhyChooseUs";
import AcademicPrograms from "@/components/AcademicPrograms";
import SmartCampus from "@/components/SmartCampus";
import Achievements from "@/components/Achievements";
import StudentLife from "@/components/StudentLife";
import Testimonials from "@/components/Testimonials";
import Faculty from "@/components/Faculty";
import VideoTour from "@/components/VideoTour";
import AdmissionsProcess from "@/components/AdmissionsProcess";
import AdmissionForm from "@/components/AdmissionForm";
import NewsEvents from "@/components/NewsEvents";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor?.hash && anchor.hash.startsWith("#")) {
        e.preventDefault();
        const el = document.querySelector(anchor.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <main className="min-h-screen">
      <AnnouncementTicker />
      <Navbar />
      <Hero />
      <TrustBar />
      <FadeInWhenVisible><AboutSchool /></FadeInWhenVisible>
      <FadeInWhenVisible><WhyChooseUs /></FadeInWhenVisible>
      <FadeInWhenVisible><AcademicPrograms /></FadeInWhenVisible>
      <FadeInWhenVisible><SmartCampus /></FadeInWhenVisible>
      <FadeInWhenVisible><Achievements /></FadeInWhenVisible>
      <FadeInWhenVisible><StudentLife /></FadeInWhenVisible>
      <FadeInWhenVisible><Testimonials /></FadeInWhenVisible>
      <FadeInWhenVisible><Faculty /></FadeInWhenVisible>
      <FadeInWhenVisible><VideoTour /></FadeInWhenVisible>
      <FadeInWhenVisible><AdmissionsProcess /></FadeInWhenVisible>
      <FadeInWhenVisible><AdmissionForm /></FadeInWhenVisible>
      <FadeInWhenVisible><NewsEvents /></FadeInWhenVisible>
      <FadeInWhenVisible><FAQ /></FadeInWhenVisible>
      <FadeInWhenVisible><Contact /></FadeInWhenVisible>
      <Footer />
      <FloatingCTA />
    </main>
  );
}
