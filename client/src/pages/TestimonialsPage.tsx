import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Filter, Heart, Award, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TestimonialCard from "@/components/TestimonialCard";

const testimonialCategories = [
  { id: "all", label: "All Reviews", icon: Heart },
  { id: "salon", label: "Salon Clients", icon: Sparkles },
  { id: "academy", label: "Academy Graduates", icon: Award },
];

// todo: remove mock functionality
const testimonials = [
  {
    id: 1,
    name: "Emily Chen",
    role: "Marketing Executive",
    content: "The transformation at Luxe Academy was incredible! The stylists are true artists and the atmosphere is so luxurious. I always leave feeling like a new person. The attention to detail and personalized service is unmatched.",
    rating: 5,
    type: "salon" as const,
    service: "Premium Color & Cut",
    date: "December 2024",
    verified: true
  },
  {
    id: 2,
    name: "Jessica Williams",
    role: "Hair Stylist & Salon Owner",
    content: "The academy gave me the skills and confidence to start my own salon. The instructors are amazing and the hands-on training is unmatched in the industry. I now run a successful salon with 3 employees.",
    rating: 5,
    type: "academy" as const,
    service: "Professional Hair Styling Course",
    date: "November 2024",
    verified: true
  },
  {
    id: 3,
    name: "Amanda Foster",
    role: "Bride & Fashion Blogger",
    content: "I've been a client for 3 years and every visit exceeds my expectations. The bridal package for my wedding was absolutely perfect. The attention to detail and personalized service is what keeps me coming back.",
    rating: 5,
    type: "salon" as const,
    service: "Bridal Hair & Makeup",
    date: "October 2024",
    verified: true
  },
  {
    id: 4,
    name: "Sarah Martinez",
    role: "Color Specialist",
    content: "The advanced color theory course completely transformed my career. I went from basic cuts to being a sought-after colorist. The techniques I learned here are cutting-edge and the business training was invaluable.",
    rating: 5,
    type: "academy" as const,
    service: "Advanced Color Theory",
    date: "September 2024",
    verified: true
  },
  {
    id: 5,
    name: "Rachel Thompson",
    role: "Corporate Executive",
    content: "The luxury experience here is unmatched. From the moment you walk in, you feel pampered. The keratin treatment has been life-changing - my hair has never looked better. Worth every penny!",
    rating: 5,
    type: "salon" as const,
    service: "Keratin Treatment",
    date: "December 2024",
    verified: true
  },
  {
    id: 6,
    name: "Michael Rodriguez",
    role: "Salon Manager",
    content: "The business management course taught me everything I needed to know about running a successful salon. From client relations to financial planning, every module was practical and immediately applicable.",
    rating: 5,
    type: "academy" as const,
    service: "Salon Business Management",
    date: "October 2024",
    verified: true
  },
  {
    id: 7,
    name: "Lisa Wang",
    role: "Fashion Designer",
    content: "As someone in the fashion industry, I have high standards for styling. The team here consistently delivers editorial-quality work. My hair always photographs beautifully for fashion shoots.",
    rating: 5,
    type: "salon" as const,
    service: "Editorial Styling",
    date: "November 2024",
    verified: true
  },
  {
    id: 8,
    name: "David Kim",
    role: "Beauty Academy Graduate",
    content: "The foundation course gave me everything I needed to start my career. The instructors are patient, knowledgeable, and genuinely care about your success. I'm now working at a top salon in the city.",
    rating: 5,
    type: "academy" as const,
    service: "Hair Styling Fundamentals",
    date: "August 2024",
    verified: true
  }
];

const stats = [
  { number: "500+", label: "5-Star Reviews", icon: Star },
  { number: "98%", label: "Client Satisfaction", icon: Heart },
  { number: "95%", label: "Recommend Us", icon: Award },
  { number: "1000+", label: "Happy Clients", icon: Users }
];

export default function TestimonialsPage() {
  const [filter, setFilter] = useState("all");
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

  const filteredTestimonials = testimonials.filter(testimonial => 
    filter === "all" || testimonial.type === filter
  );

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="pt-32 lg:pt-40">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6"
            >
              <Quote className="w-10 h-10 text-primary" />
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Client Stories
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Discover why thousands of clients trust us with their beauty transformations and career aspirations. 
              Read authentic stories from our satisfied clients and successful graduates.
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-card-border hover-elevate text-center">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors"
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {testimonialCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={filter === category.id ? "default" : "outline"}
                    onClick={() => setFilter(category.id)}
                    className="flex items-center gap-2 text-sm"
                    data-testid={`button-filter-${category.id}`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.label}
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedTestimonial(testimonial)}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-card-border hover-elevate h-full overflow-hidden">
                    <CardContent className="p-6 relative">
                      {/* Background Pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                        <Quote className="w-full h-full text-primary" />
                      </div>

                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4 relative">
                        <Avatar className="w-16 h-16 border-2 border-primary/20">
                          <AvatarImage src="" alt={testimonial.name} />
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                            {getInitials(testimonial.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-lg text-card-foreground">{testimonial.name}</h4>
                            {testimonial.verified && (
                              <Badge variant="secondary" className="text-xs">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground text-sm mb-2">{testimonial.role}</p>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <blockquote className="text-card-foreground leading-relaxed italic relative mb-4">
                        "{testimonial.content}"
                      </blockquote>
                      
                      {/* Footer */}
                      <div className="pt-4 border-t border-border space-y-2">
                        <div className="flex items-center justify-between">
                          <Badge className={
                            testimonial.type === "salon" 
                              ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                              : "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300"
                          }>
                            {testimonial.type === "salon" ? "Salon Client" : "Academy Graduate"}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{testimonial.service}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
            >
              <Heart className="w-8 h-8 text-primary" />
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of satisfied clients and successful graduates. Experience the luxury and expertise 
              that has earned us hundreds of 5-star reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" data-testid="button-book-consultation">
                Book Your Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" data-testid="button-explore-academy">
                Explore Academy Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Detail Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-card rounded-lg overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Avatar className="w-20 h-20 border-2 border-primary/20">
                    <AvatarImage src="" alt={selectedTestimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xl">
                      {getInitials(selectedTestimonial.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-serif font-bold">{selectedTestimonial.name}</h3>
                      {selectedTestimonial.verified && (
                        <Badge variant="secondary">Verified Client</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-3">{selectedTestimonial.role}</p>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < selectedTestimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">({selectedTestimonial.rating}.0/5.0)</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{selectedTestimonial.service}</span>
                      <span>•</span>
                      <span>{selectedTestimonial.date}</span>
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-lg leading-relaxed italic mb-6 p-6 bg-muted/30 rounded-lg border-l-4 border-primary">
                  "{selectedTestimonial.content}"
                </blockquote>
                
                <div className="flex gap-3">
                  <Button className="flex-1" data-testid="button-book-similar-service">
                    Book Similar Service
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedTestimonial(null)} data-testid="button-close-testimonial-modal">
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}