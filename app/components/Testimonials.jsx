"use client";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Quote,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { upworkReviews } from "../data/reviews";

export default function Testimonials() {
  const reviews = upworkReviews;
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 300;
  const gap = 24;
  const cardsPerView = 3;

  // Auto-slide functionality
  useEffect(() => {
    if (!isDragging && carouselRef.current) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => {
          const maxIndex = Math.max(0, reviews.length - cardsPerView);
          const next = prev >= maxIndex ? 0 : prev + 1;

          if (carouselRef.current) {
            const scrollPosition = next * (cardWidth + gap);
            carouselRef.current.scrollTo({
              left: scrollPosition,
              behavior: "smooth",
            });
          }

          return next;
        });
      }, 3000); // Auto-slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isDragging, reviews.length, cardsPerView, cardWidth, gap]);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const newIndex =
        prev === 0 ? Math.max(0, reviews.length - cardsPerView) : prev - 1;
      if (carouselRef.current) {
        carouselRef.current.scrollTo({
          left: newIndex * (cardWidth + gap),
          behavior: "smooth",
        });
      }
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, reviews.length - cardsPerView);
      const newIndex = prev >= maxIndex ? 0 : prev + 1;
      if (carouselRef.current) {
        carouselRef.current.scrollTo({
          left: newIndex * (cardWidth + gap),
          behavior: "smooth",
        });
      }
      return newIndex;
    });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (reviews.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className="py-16 bg-gray-900 px-6 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Client Reviews
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-3"></div>
          <p className="text-sm text-gray-400">Trusted by clients worldwide</p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 -translate-x-4 hidden md:flex items-center justify-center border border-gray-700"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 text-gray-300" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 translate-x-4 hidden md:flex items-center justify-center border border-gray-700"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5 text-gray-300" />
          </button>

          {/* Horizontal Scrollable Container */}
          <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex gap-6 overflow-x-hidden scrollbar-hide scroll-smooth pb-4"
            style={{
              cursor: isDragging ? "grabbing" : "grab",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5, shadow: "lg" }}
                className="w-[300px] bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-700 flex flex-col relative overflow-hidden flex-shrink-0"
              >
                {/* Decorative top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>

                {/* Quote Icon */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="p-2 bg-blue-900/30 rounded-lg">
                    <Quote className="w-5 h-5 text-blue-400" />
                  </div>
                  {/* Rating Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 mb-5 flex-1 leading-relaxed text-sm line-clamp-4">
                  &ldquo;{review.review}&rdquo;
                </p>

                {/* Client Info */}
                <div className="pt-4 border-t border-gray-700 mb-3">
                  <p className="font-bold text-white text-sm mb-1">
                    {review.clientName}
                  </p>
                  <p className="text-xs text-gray-400 line-clamp-1">
                    {review.project}
                  </p>
                  {review.date && (
                    <p className="text-xs text-gray-400 mt-1">{review.date}</p>
                  )}
                </div>

                {/* Upwork Link */}
                <a
                  href={
                    review.upworkUrl ||
                    "https://www.upwork.com/freelancers/~0175443912a5f8cd13?mp_source=share"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-green-400 hover:text-green-300 transition-colors pt-3 border-t border-gray-700"
                >
                  <Star className="w-3.5 h-3.5 fill-green-600 text-green-600" />
                  <span>View on Upwork</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
