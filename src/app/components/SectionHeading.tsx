"use client";

import React from "react";
import { motion } from "framer-motion";

// ANIMATION VARIANTS
// 1. The Container: Controls the timing (stagger) of the words
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each word
      delayChildren: 0.2, // Wait 0.2s before starting
    },
  },
};

// 2. The Word: The actual slide-up animation
const wordVariants = {
  hidden: {
    y: "110%", // Start below the visible area
    rotateX: 45,
    opacity: 0,
  },
  visible: {
    y: "0%", // Slide up to normal
    rotateX: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

// HELPER: Splits text and wraps it for the mask effect
const MaskedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <span className={`inline-block ${className}`}>
      {text.split(" ").map((word, i) => (
        // The Mask (Overflow Hidden)
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom mx-2"
        >
          {/* The Content (Slides Up) */}
          <motion.span className="inline-block" variants={wordVariants}>
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default function SectionHeading({
  text1,
  text2,
}: {
  text1: string;
  text2: string;
}) {
  return (
    <div className="relative mb-12 py-4 pl-6">
      {/* DECORATIVE BORDER (Slides down) */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="absolute left-0 top-0 bottom-0 w-1 bg-tf-accent h-full origin-top"
      />

      {/* BACKGROUND TEXT (Parallax Fade) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.05, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-4 left-6 text-8xl font-black text-white uppercase select-none pointer-events-none z-0"
      >
        {text1}
      </motion.div>

      {/* MAIN HEADING */}
      <motion.h1
        className="relative z-10 font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white leading-tight"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Ensures it only plays once when scrolled into view
      >
        <MaskedText text={text1} />
        {/* Force a break or space if needed, or just let them flow */}
        <span className="block md:inline" />
        <MaskedText text={text2} className="text-tf-accent" />
      </motion.h1>

      {/* SUBTITLE */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-sm font-mono text-white/60 mt-2 uppercase tracking-widest pl-2"
      >
        TECHFUSE 2.0 <span className="text-tf-accent">//</span> IEEE SB RIT
      </motion.p>
    </div>
  );
}
