import { motion } from "framer-motion";
import { Sparkles, Users, Award, Calendar } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import transformationImage from "@assets/generated_images/Hair_transformation_gallery_a3a9b585.png";
import academyImage from "@assets/generated_images/Hair_academy_classroom_0991572b.png";
import salonImage from "@assets/generated_images/Luxury_salon_interior_546af048.png";

// todo: remove mock functionality
const featuredServices = [
  {
    title: "Premium Hair Color",
    description: "Transform your look with our expert color specialists using premium organic products for stunning, long-lasting results.",
    price: "150",
    duration: "2.5 hrs",
    image: transformationImage,
    rating: 5,
    stylist: "Sarah Johnson",
    isPopular: true,
  },
  {
    title: "Luxury Hair Treatment",
    description: "Deep conditioning and restoration treatment using high-end products to revitalize and strengthen your hair.",
    price: "120",
    duration: "1.5 hrs",
    image: salonImage,
    rating: 5,
    stylist: "Maria Rodriguez",
  },
  {
    title: "Bridal Styling",
    description: "Complete bridal hair and makeup package for your special day, including trial session and touch-ups.",
    price: "300",
    duration: "4 hrs",
    image: transformationImage,
    rating: 5,
    stylist: "Isabella Chen",
  },
];

const featuredCourses = [
  {
    title: "Professional Hair Styling",
    description: "Master the fundamentals of hair styling with hands-on training from industry experts. Learn cutting-edge techniques and build your portfolio.",
    price: "2,499",
    duration: "12 weeks",
    image: academyImage,
    level: "Beginner" as const,
    instructor: "Maria Rodriguez",
    students: 24,
    rating: 5,
    startDate: "Feb 15",
    isEnrollmentOpen: true,
  },
  {
    title: "Advanced Color Theory",
    description: "Deep dive into color science, correction techniques, and creative applications. Perfect for stylists looking to specialize.",
    price: "3,299",
    duration: "8 weeks",
    image: transformationImage,
    level: "Advanced" as const,
    instructor: "Sarah Johnson",
    students: 16,
    rating: 5,
    startDate: "Mar 1",
    isEnrollmentOpen: true,
  },
];

const testimonials = [
  {
    name: "Emily Chen",
    role: "Marketing Executive",
  content: "The transformation at Summera Salon & Accademy was incredible! The stylists are true artists and the atmosphere is so luxurious. I always leave feeling like a new person.",
    rating: 5,
    type: "salon" as const,
  },
  {
    name: "Jessica Williams",
    role: "Hair Stylist",
    content: "The academy gave me the skills and confidence to start my own salon. The instructors are amazing and the hands-on training is unmatched in the industry.",
    rating: 5,
    type: "academy" as const,
  },
  {
    name: "Amanda Foster",
    role: "Salon Owner",
    content: "I've been a client for 3 years and every visit exceeds my expectations. The attention to detail and personalized service is what keeps me coming back.",
    rating: 5,
    type: "salon" as const,
  },
];

const stats = [
  { icon: Users, number: "5,000+", label: "Happy Clients" },
  { icon: Award, number: "15+", label: "Years Experience" },
  { icon: Sparkles, number: "500+", label: "Graduates" },
  { icon: Calendar, number: "1,200+", label: "Monthly Services" },
];

export default function HomePage() {
  return (
    <div className="pt-32 lg:pt-40">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Premium Salon Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience luxury beauty treatments with our expert stylists using the finest products and techniques.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/services">
              <Button size="lg" data-testid="button-view-all-services">
                View All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Start Your Beauty Career
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our professional academy and learn from industry experts with hands-on training and career support.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/courses">
              <Button size="lg" data-testid="button-view-all-courses">
                Explore All Courses
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied clients and successful graduates about their transformative experiences.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/testimonials">
              <Button variant="outline" size="lg" data-testid="button-view-all-testimonials">
                Read More Reviews
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Ready to Transform?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you're looking for a stunning new look or starting your beauty career, we're here to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" data-testid="button-book-appointment">
                Book Your Appointment
              </Button>
              <Button variant="outline" size="lg" data-testid="button-explore-courses">
                Explore Courses
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}