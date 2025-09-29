import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
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
    accent: "Luxury Salon",
    stats: { number: "500+", label: "Happy Clients" }
  },
  {
    id: 2,
    image: academyClassroomImage,
    title: "Master the Art of Beauty",
    subtitle: "Join our professional academy and start your career in beauty",
    ctaPrimary: "Enroll Now",
    ctaSecondary: "View Courses",
    accent: "Professional Academy",
    stats: { number: "95%", label: "Job Placement" }
  },
  {
    id: 3,
    image: transformationGalleryImage,
    title: "Unleash Your Potential",
    subtitle: "Discover the artist within you with our comprehensive training programs",
    ctaPrimary: "Start Learning",
    ctaSecondary: "Gallery",
    accent: "Expert Training",
    stats: { number: "15+", label: "Expert Instructors" }
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
    rotateY: direction > 0 ? 25 : -25,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
    rotateY: direction < 0 ? 25 : -25,
  })
};

const contentVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      type: "spring",
      stiffness: 100
    }
  })
};

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const parallaxX = useTransform(mouseX, [0, 1000], [-20, 20]);
  const parallaxY = useTransform(mouseY, [0, 1000], [-10, 10]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setProgress(0);
    }, 6000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + (100 / 60)));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isAutoPlaying, currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setProgress(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div 
      ref={containerRef}
      className="relative h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 },
            rotateY: { duration: 0.6 }
          }}
          className="absolute inset-0"
        >
          <motion.div
            style={{ x: parallaxX, y: parallaxY }}
            className="absolute inset-0 scale-110"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/60" />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-20 h-20 bg-primary/20 rounded-full backdrop-blur-sm border border-primary/30 hidden lg:block"
      >
        <div className="w-full h-full flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-primary" />
        </div>
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 right-32 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hidden lg:block"
      >
        <div className="w-full h-full flex items-center justify-center">
          <Star className="w-6 h-6 text-white/80" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="text-white"
              >
                {/* Accent Badge */}
                <motion.div
                  custom={0}
                  variants={contentVariants}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 mb-6"
                >
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-primary-foreground">
                    {heroSlides[currentSlide].accent}
                  </span>
                </motion.div>

                {/* Title with Split Animation */}
                <motion.h1 
                  custom={1}
                  variants={contentVariants}
                  className="text-5xl lg:text-8xl font-serif font-bold mb-8 leading-tight"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 100, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                    className="inline-block"
                  >
                    {heroSlides[currentSlide].title.split(' ').map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                        className="inline-block mr-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p 
                  custom={2}
                  variants={contentVariants}
                  className="text-xl lg:text-2xl mb-8 leading-relaxed text-white/90 max-w-2xl"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>

                {/* Stats */}
                <motion.div
                  custom={3}
                  variants={contentVariants}
                  className="flex items-center gap-8 mb-8"
                >
                  <div className="flex items-center gap-4 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <div className="text-3xl font-bold text-primary">
                      {heroSlides[currentSlide].stats.number}
                    </div>
                    <div className="text-sm text-white/80">
                      {heroSlides[currentSlide].stats.label}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                    <span className="text-white/80 ml-2">5.0 Rating</span>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  custom={4}
                  variants={contentVariants}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 border border-primary/20 shadow-lg shadow-primary/25"
                      data-testid="button-hero-primary"
                    >
                      {heroSlides[currentSlide].ctaPrimary}
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
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
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Modern Navigation */}
      <div className="absolute inset-y-0 left-4 flex items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="text-white hover:bg-white/20 w-14 h-14 backdrop-blur-sm border border-white/20"
            data-testid="button-prev-slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
        </motion.div>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="text-white hover:bg-white/20 w-14 h-14 backdrop-blur-sm border border-white/20"
            data-testid="button-next-slide"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </motion.div>
      </div>

      {/* Modern Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-4 px-6 py-3 bg-black/30 backdrop-blur-sm rounded-full border border-white/20">
          <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative overflow-hidden"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                data-testid={`button-slide-${index}`}
              >
                <div className={`w-12 h-1 rounded-full ${
                  index === currentSlide ? "bg-primary" : "bg-white/30"
                }`}>
                  {index === currentSlide && (
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  )}
                </div>
                <span className="sr-only">Go to slide {index + 1}</span>
              </motion.button>
            ))}
          </div>
          
          <div className="h-4 w-px bg-white/30" />
          
          <motion.button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-white hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            data-testid="button-autoplay-toggle"
          >
            {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </motion.button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8">
        <div className="flex items-center gap-3 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full border border-white/20 text-white">
          <span className="text-sm font-medium">
            {String(currentSlide + 1).padStart(2, '0')}
          </span>
          <div className="w-px h-4 bg-white/30" />
          <span className="text-sm text-white/70">
            {String(heroSlides.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
}