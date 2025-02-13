"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const images = [
  {
    url: "/sovtranformcareer.webp",
    title: "",
    description: "",
  },
  {
    url: "/progcarousel.jpeg",
    title: "",
    description: "",
  },
  {
    url: "/businessexp.webp",
    title: "Learn from Industry Experts",
    description: "Get mentored by experienced professionals",
  },
  {
    url: "/handsonprac.webp",
    title: "Hands-on Training",
    description: "Practice with real-world projects",
  },
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let autoplay = setInterval(() => {
      emblaApi?.scrollNext();
    }, 50000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full h-[60vh] sm:h-[60vh] lg:h-[90vh] overflow-hidden">
      {/* Carousel Wrapper */}
      <div ref={emblaRef} className="overflow-hidden h-full">
        <div className="flex h-full">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative min-w-full flex-shrink-0 h-full"
              initial={{ opacity: 0.7, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Image tag instead of background-image */}
              <Image
                src={image.url}
                alt={image.title}
                fill
                className="object-fit"
                lazy 
                placeholder="empty"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-center text-center px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-white">{image.title}</h2>
                <p className="text-lg md:text-2xl text-white mt-2">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
