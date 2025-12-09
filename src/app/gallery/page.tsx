"use client";

import { useState, useEffect, useCallback } from "react";
import { galleryImages, GalleryItem } from "@/app/lib/gallery-data";
import SectionHeading from "../components/SectionHeading";
import GridBackground from "../components/gridBackground";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // --- HANDLERS ---
  const openLightbox = (image: GalleryItem) => setSelectedImage(image);

  const closeLightbox = () => setSelectedImage(null);

  const navigate = useCallback(
    (direction: "next" | "prev") => {
      if (!selectedImage) return;
      const currentIndex = galleryImages.findIndex(
        (img) => img.id === selectedImage.id
      );
      const newIndex =
        direction === "next"
          ? (currentIndex + 1) % galleryImages.length
          : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[newIndex]);
    },
    [selectedImage]
  );

  // --- EFFECTS ---

  // 1. Keyboard Navigation
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

  // 2. Lock Body Scroll
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  // 3. Page Load Animation Trigger
  useEffect(() => setIsLoaded(true), []);

  return (
    <div className="min-h-screen bg-tf-primary pt-32 pb-20 px-6">
      <GridBackground />
      {/* --- HEADER --- */}
      <div
        className={`max-w-7xl mx-auto mb-16 transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <SectionHeading text1="Event" text2="Gallery" />
        <p className="font-sans text-zinc-400 max-w-2xl text-lg leading-relaxed border-l-2 border-tf-accent/30 pl-6">
          A visual journey through our past events. Explore the moments of
          innovation, collaboration, and breakthrough technologies.
        </p>
      </div>

      {/* --- MASONRY GRID --- */}
      {/* columns-1 sm:columns-2 lg:columns-3 creates the masonry effect */}
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
            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-auto transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:opacity-80"
            />

            {/* Overlay Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="font-mono text-tf-accent text-xs uppercase tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {image.category}
              </span>
              <h3 className="font-display text-white text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {image.alt}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-8 right-8 z-[110] text-white/70 hover:text-tf-accent transition-colors p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate("prev");
            }}
            className="absolute left-4 md:left-10 z-[110] text-white/50 hover:text-white p-4 transition-colors hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate("next");
            }}
            className="absolute right-4 md:right-10 z-[110] text-white/50 hover:text-white p-4 transition-colors hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Main Image Container */}
          <div
            className="relative w-full h-full max-w-7xl max-h-[90vh] p-4 flex items-center justify-center"
            onClick={closeLightbox} // Click outside to close
          >
            <div
              className="relative w-auto h-auto max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                className="object-contain max-h-[85vh] w-auto shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-sm"
              />

              {/* Caption in Modal */}
              <div className="absolute -bottom-10 left-0 w-full text-center">
                <p className="font-mono text-white/80 text-sm tracking-widest uppercase">
                  {selectedImage.alt}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
