import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import salonInteriorImage from "@assets/generated_images/Luxury_salon_interior_546af048.png";
import academyClassroomImage from "@assets/generated_images/Hair_academy_classroom_0991572b.png";
import transformationGalleryImage from "@assets/generated_images/Hair_transformation_gallery_a3a9b585.png";

const heroSlides = [
  {
    id: 1,
    image: salonInteriorImage,
    title: "Transform Your Beauty",
    subtitle: "Experience luxury salon services with our expert stylists",
    ctaPrimary: "Book Appointment",
    ctaSecondary: "View Services",
  },
  {
    id: 2,
    image: academyClassroomImage,
    title: "Master the Art of Beauty",
    subtitle: "Join our professional academy and start your career in beauty",
    ctaPrimary: "Enroll Now",
    ctaSecondary: "View Courses",
  },
  {
    id: 3,
    image: transformationGalleryImage,
    title: "Unleash Your Potential",
    subtitle: "Discover the artist within you with our comprehensive training programs",
    ctaPrimary: "Start Learning",
    ctaSecondary: "Gallery",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white"
            >
              <motion.h1 
                className="text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {heroSlides[currentSlide].title}
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl mb-8 leading-relaxed text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {heroSlides[currentSlide].subtitle}
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 border border-primary/20"
                  data-testid="button-hero-primary"
                >
                  {heroSlides[currentSlide].ctaPrimary}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 text-white border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20"
                  data-testid="button-hero-secondary"
                >
                  {heroSlides[currentSlide].ctaSecondary}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-4 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="text-white hover:bg-white/20 w-12 h-12"
          data-testid="button-prev-slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="text-white hover:bg-white/20 w-12 h-12"
          data-testid="button-next-slide"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary scale-125" : "bg-white/50"
            }`}
            data-testid={`button-slide-${index}`}
          />
        ))}
      </div>

      {/* Auto-play Control */}
      <div className="absolute bottom-8 right-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-white hover:bg-white/20"
          data-testid="button-autoplay-toggle"
        >
          <Play className={`w-5 h-5 ${isAutoPlaying ? "opacity-100" : "opacity-50"}`} />
        </Button>
      </div>
    </div>
  );
}