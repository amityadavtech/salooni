import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Calendar, MessageSquare, Send, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const quickActions = [
  {
    icon: Calendar,
    title: "Book Appointment",
    description: "Schedule your salon visit",
    action: "Book Now",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: MessageSquare,
    title: "Academy Inquiry",
    description: "Learn about our courses",
    action: "Get Info",
    color: "bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300"
  },
  {
    icon: Send,
    title: "General Questions",
    description: "Any other inquiries",
    action: "Contact Us",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
  }
];

const contactHighlights = [
  {
    icon: Star,
    title: "Award-Winning Service",
    description: "Recognized for excellence in beauty education and salon services"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling", 
    description: "Evening and weekend appointments available for your convenience"
  },
  {
    icon: Phone,
    title: "Quick Response",
    description: "We respond to all inquiries within 2 hours during business hours"
  }
];

export default function ContactPage() {
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
              <MessageSquare className="w-10 h-10 text-primary" />
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Ready to transform your look or start your beauty career? We're here to help you every step of the way. 
              Reach out to our expert team for personalized consultation and guidance.
            </motion.p>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid lg:grid-cols-3 gap-6 mb-16"
          >
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-card-border hover-elevate h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${action.color}`}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{action.description}</p>
                      <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {action.action}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid lg:grid-cols-3 gap-6 mb-16"
          >
            {contactHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-card-border"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Visit Our Location
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience our luxurious salon and state-of-the-art academy facilities in person.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-card-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Address</h3>
                      <p className="text-muted-foreground">
                        123 Beauty Street<br />
                        Downtown District<br />
                        City, State 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                        <p>Saturday: 9:00 AM - 7:00 PM</p>
                        <p>Sunday: 10:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Phone: (555) 123-4567</p>
                        <p>Email: info@luxeacademy.com</p>
                        <p>Emergency: (555) 987-6543</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-card-border overflow-hidden h-96">
                <div className="h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground mb-4">
                      Find us in the heart of the downtown beauty district
                    </p>
                    <Button variant="outline" data-testid="button-get-directions">
                      Get Directions
                    </Button>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-primary/20 rounded-full" />
                  <div className="absolute bottom-8 right-8 w-12 h-12 bg-primary/10 rounded-full" />
                  <div className="absolute top-1/2 right-4 w-6 h-6 bg-primary/30 rounded-full" />
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              <Send className="w-8 h-8 text-primary" />
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you're looking for a stunning transformation or ready to start your beauty career, 
              we're here to make your vision a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" data-testid="button-schedule-consultation">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" data-testid="button-call-now">
                Call Now: (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}