"use client";

import { useState, useEffect, useCallback } from "react";
import { galleryImages, GalleryItem } from "@/app/lib/gallery-data";
import SectionHeading from "../components/SectionHeading";
import GridBackground from "../components/gridBackground";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [direction, setDirection] = useState(0);

  // --- HANDLERS ---
  const openLightbox = (image: GalleryItem) => {
    setSelectedImage(image);
    setDirection(0);
  };

  const closeLightbox = () => setSelectedImage(null);

  const navigate = useCallback(
    (newDirection: "next" | "prev") => {
      if (!selectedImage) return;
      setDirection(newDirection === "next" ? 1 : -1);
      const currentIndex = galleryImages.findIndex(
        (img) => img.id === selectedImage.id
      );
      const newIndex =
        newDirection === "next"
          ? (currentIndex + 1) % galleryImages.length
          : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[newIndex]);
    },
    [selectedImage]
  );

  // --- ANIMATION VARIANTS ---
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  // --- EFFECTS ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigate("next");
      if (e.key === "ArrowLeft") navigate("prev");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, navigate]);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  useEffect(() => setIsLoaded(true), []);

  return (
    <div className="min-h-screen bg-tf-primary pt-32 pb-20 px-6">
      <GridBackground />

      {/* HEADER */}
      <div
        className={`max-w-7xl mx-auto mb-16 transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <SectionHeading text1="Event" text2="Gallery" />
        <p className="font-sans text-zinc-400 max-w-2xl text-lg leading-relaxed border-l-2 border-tf-accent/30 pl-6">
          A visual journey through our past events. Explore the moments of
          innovation.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => openLightbox(image)}
            className={`relative group cursor-zoom-in break-inside-avoid rounded-xl overflow-hidden bg-white/5 border border-white/10 transition-all duration-500 ease-out hover:border-tf-accent/50 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="font-display text-white text-xl">{image.alt}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* --- LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl touch-none"
            onClick={closeLightbox}
          >
            {/* BUTTONS */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-[120] p-2 bg-black/20 rounded-full text-white/70 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("prev");
              }}
              className="absolute left-2 md:left-8 z-[120] p-3 bg-black/20 rounded-full text-white/70 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("next");
              }}
              className="absolute right-2 md:right-8 z-[120] p-3 bg-black/20 rounded-full text-white/70 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* --- IMAGE CONTAINER --- */}
            <div
              className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={selectedImage.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      navigate("next");
                    } else if (swipe > swipeConfidenceThreshold) {
                      navigate("prev");
                    }
                  }}
                  className="absolute inset-0 flex items-center justify-center p-4"
                >
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="object-contain w-auto h-auto max-w-full max-h-full shadow-2xl rounded-sm select-none pointer-events-none"
                    draggable={false}
                  />

                  {/* --- FIX IS HERE: Increased bottom spacing for mobile (bottom-20) --- */}
                  <div className="absolute bottom-20 md:bottom-8 left-0 w-full text-center pointer-events-none">
                    <p className="font-mono text-white/80 text-sm tracking-widest uppercase bg-black/50 inline-block px-3 py-1 rounded-full">
                      {selectedImage.alt}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Swipe Hint */}
            <div className="absolute bottom-8 left-0 w-full text-center md:hidden pointer-events-none">
              <p className="text-white/40 text-[10px] font-mono uppercase tracking-[0.2em] animate-pulse">
                &larr; Swipe to Navigate &rarr;
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
