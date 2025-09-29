import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "(555) 123-4567",
    subtitle: "Call us directly"
  },
  {
    icon: Mail,
    title: "Email",
  details: "info@summerasalon.com",
    subtitle: "Send us a message"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "123 Beauty Street, City, State 12345",
    subtitle: "Visit our salon"
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
    subtitle: "We're open"
  }
];

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    console.log(`Form field ${name} updated:`, value); // todo: remove mock functionality
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // todo: remove mock functionality
    console.log("Form submitted:", formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Card className="bg-card/50 backdrop-blur-sm border-card-border">
          <CardContent className="p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-serif font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground">
                Ready to transform your look or start your beauty career? Send us a message and we'll get back to you soon.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                    data-testid="input-phone"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <Input
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    placeholder="Hair styling, courses, etc."
                    data-testid="input-service"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us how we can help you..."
                  rows={4}
                  data-testid="textarea-message"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
                data-testid="button-submit-contact"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="mb-8">
          <h3 className="text-2xl font-serif font-bold mb-4">Visit Our Salon</h3>
          <p className="text-muted-foreground">
            Experience luxury beauty services in our state-of-the-art facility, or join our academy to start your career.
          </p>
        </div>

        <div className="space-y-4">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/30 backdrop-blur-sm border-card-border hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                        <p className="text-card-foreground font-medium">{info.details}</p>
                        <p className="text-muted-foreground text-sm">{info.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Map Placeholder */}
        <Card className="bg-card/30 backdrop-blur-sm border-card-border overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
              <p className="text-muted-foreground">Interactive Map Coming Soon</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}