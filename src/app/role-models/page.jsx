"use client";
import { useState, useEffect, useRef } from "react";

export default function RoleModels() {
  const images = [
    "/role-models/lachit-borphukan.jpg",
    "/role-models/bappa-rawal.jpg",
    "/role-models/maharana-pratap.jpg",
    "/role-models/csm.jpg",
    "/role-models/csm.jpeg",
    "/role-models/gora-badal.jpg",
    "/role-models/sus.jpg",
    "/role-models/rana-sanga.jpg",
    "/role-models/indian.png",
    "/role-models/mossadlogo.png",
    "/role-models/zs-fs.jpg",
  ];

  // Clone edges: [last, ...images, first]
  const slides = [images[images.length - 1], ...images, images[0]];

  // Start at index 1 (which is images[0])
  const [index, setIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [withTransition, setWithTransition] = useState(true);
  const containerRef = useRef(null);

  const prevSlide = () => setIndex((i) => i - 1);
  const nextSlide = () => setIndex((i) => i + 1);

  // Auto-play every 3s (pause on hover)
  useEffect(() => {
    if (isHovered) return;
    const t = setInterval(nextSlide, 3000);
    return () => clearInterval(t);
  }, [isHovered]);

  // Handle seamless reset when hitting clones
  const handleTransitionEnd = () => {
    if (index === 0) {
      // Moved to cloned last -> jump to real last
      setWithTransition(false);
      setIndex(images.length);
    } else if (index === images.length + 1) {
      // Moved to cloned first -> jump to real first
      setWithTransition(false);
      setIndex(1);
    }
  };

  // Re-enable transition on next paint after a no-transition jump
  useEffect(() => {
    if (!withTransition) {
      const id = requestAnimationFrame(() => setWithTransition(true));
      return () => cancelAnimationFrame(id);
    }
  }, [withTransition]);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gray-900 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider Container */}
      <div className="relative w-full max-w-4xl overflow-hidden rounded-xl shadow-2xl">
        <div
          ref={containerRef}
          className={`flex ${withTransition ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((src, i) => (
            <div
              key={i}
              className="relative w-full h-[500px] flex-shrink-0 flex items-center justify-center bg-black"
            >
              {/* Blurred Background */}
              <img
                src={src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-lg opacity-30"
              />
              {/* Main Image */}
              <img
                src={src}
                alt={`Role Model ${i}`}
                className="relative max-h-[500px] w-auto object-contain rounded-lg shadow-lg transition-transform duration-700 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-3xl bg-black/50 hover:bg-black/70 p-2 rounded-full shadow-lg"
          aria-label="Previous"
        >
          ❮
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-3xl bg-black/50 hover:bg-black/70 p-2 rounded-full shadow-lg"
          aria-label="Next"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
