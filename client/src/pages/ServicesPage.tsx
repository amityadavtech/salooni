import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, DollarSign, Star, Sparkles, Scissors, Palette, Crown, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceCard from "@/components/ServiceCard";
import transformationImage from "@assets/generated_images/Hair_transformation_gallery_a3a9b585.png";
import salonImage from "@assets/generated_images/Luxury_salon_interior_546af048.png";

const serviceCategories = [
  {
    id: "hair-styling",
    label: "Hair Styling",
    icon: Scissors,
    description: "Professional cuts and styling"
  },
  {
    id: "color-treatments",
    label: "Color & Treatments", 
    icon: Palette,
    description: "Color services and hair treatments"
  },
  {
    id: "premium-packages",
    label: "Premium Packages",
    icon: Crown,
    description: "Luxury comprehensive services"
  },
  {
    id: "bridal-special",
    label: "Bridal & Events",
    icon: Heart,
    description: "Special occasion styling"
  }
];

const services = {
  "hair-styling": [
    {
      title: "Signature Cut & Style",
      description: "Personalized consultation and precision cut with professional styling using premium products for a look that's uniquely you.",
      price: "85",
      duration: "1.5 hrs",
      image: salonImage,
      rating: 5,
      stylist: "Sarah Johnson",
      features: ["Consultation", "Wash & Cut", "Professional Styling", "Product Finish"]
    },
    {
      title: "Luxury Blowout",
      description: "Transform your hair with our signature blowout service featuring deep cleansing, nourishing treatment, and expert styling.",
      price: "65",
      duration: "1 hr",
      image: transformationImage,
      rating: 5,
      stylist: "Maria Rodriguez",
      features: ["Deep Cleanse", "Nourishing Treatment", "Professional Blowout", "Heat Protection"]
    },
    {
      title: "Keratin Treatment",
      description: "Smoothing treatment that eliminates frizz and reduces styling time, leaving hair silky and manageable for months.",
      price: "250",
      duration: "3 hrs",
      image: salonImage,
      rating: 5,
      stylist: "Isabella Chen",
      features: ["Keratin Application", "Smoothing Treatment", "6-Month Results", "Aftercare Kit"]
    }
  ],
  "color-treatments": [
    {
      title: "Premium Color Service",
      description: "Full color transformation using high-end organic products with expert color matching and application techniques.",
      price: "150",
      duration: "2.5 hrs",
      image: transformationImage,
      rating: 5,
      stylist: "Sarah Johnson",
      isPopular: true,
      features: ["Color Consultation", "Premium Products", "Custom Mixing", "Gloss Treatment"]
    },
    {
      title: "Balayage Highlights",
      description: "Hand-painted highlights for natural-looking dimension and movement, customized to complement your skin tone.",
      price: "200",
      duration: "3 hrs",
      image: salonImage,
      rating: 5,
      stylist: "Isabella Chen",
      features: ["Hand-Painted Technique", "Custom Color", "Toning", "Styling Included"]
    },
    {
      title: "Color Correction",
      description: "Expert color correction services to fix previous color treatments and achieve your desired look safely.",
      price: "300",
      duration: "4 hrs",
      image: transformationImage,
      rating: 5,
      stylist: "Sarah Johnson",
      features: ["Color Analysis", "Safe Correction", "Multiple Sessions", "Aftercare Plan"]
    }
  ],
  "premium-packages": [
    {
      title: "The Luxe Experience",
      description: "Our signature premium package including consultation, cut, color, treatment, and styling with complimentary refreshments.",
      price: "350",
      duration: "4 hrs",
      image: salonImage,
      rating: 5,
      stylist: "Team Service",
      features: ["Full Consultation", "Cut & Color", "Deep Treatment", "Luxury Amenities"]
    },
    {
      title: "Transformation Package",
      description: "Complete makeover package with color, cut, treatment, and styling consultation to create your perfect new look.",
      price: "450",
      duration: "5 hrs", 
      image: transformationImage,
      rating: 5,
      stylist: "Sarah Johnson",
      features: ["Style Consultation", "Color Design", "Precision Cut", "Treatment & Styling"]
    }
  ],
  "bridal-special": [
    {
      title: "Bridal Hair & Makeup",
      description: "Complete bridal beauty package including trial session, wedding day styling, and touch-up services for your special day.",
      price: "400",
      duration: "4 hrs",
      image: transformationImage,
      rating: 5,
      stylist: "Isabella Chen",
      features: ["Trial Session", "Wedding Day Service", "Touch-up Kit", "Travel Available"]
    },
    {
      title: "Bridal Party Package",
      description: "Group styling services for the entire bridal party, ensuring everyone looks perfect with coordinated styles.",
      price: "200",
      duration: "2 hrs",
      image: salonImage,
      rating: 5,
      stylist: "Team Service", 
      features: ["Group Styling", "Coordinated Looks", "Touch-up Services", "Photo Ready"]
    }
  ]
};

const premiumFeatures = [
  {
    icon: Sparkles,
    title: "Premium Products",
    description: "We use only the finest organic and sustainable beauty products"
  },
  {
    icon: Star,
    title: "Expert Stylists",
    description: "Our team consists of award-winning professionals with years of experience"
  },
  {
    icon: Crown,
    title: "Luxury Experience",
    description: "Enjoy complimentary refreshments and a relaxing atmosphere"
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Every service is tailored to your unique style and preferences"
  }
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("hair-styling");
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <div className="pt-32 lg:pt-40">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-muted/20" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
              Premium Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of luxury beauty services, each designed to enhance your natural beauty 
              with the finest techniques and premium products in an atmosphere of pure elegance.
            </p>
          </motion.div>

          {/* Premium Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {premiumFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-card-border hover-elevate h-full">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full h-auto p-1 bg-muted/50 backdrop-blur-sm">
                {serviceCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      data-testid={`tab-${category.id}`}
                    >
                      <Icon className="w-5 h-5" />
                      <div className="text-center">
                        <div className="font-medium text-sm">{category.label}</div>
                        <div className="text-xs opacity-70 hidden lg:block">{category.description}</div>
                      </div>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              <div className="mt-12">
                {serviceCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id} className="mt-0">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        <AnimatePresence mode="wait">
                          {services[category.id as keyof typeof services]?.map((service, index) => (
                            <motion.div
                              key={`${category.id}-${index}`}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ delay: index * 0.1 }}
                              className="group"
                            >
                              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-card-border hover-elevate h-full">
                                {'isPopular' in service && service.isPopular && (
                                  <div className="absolute top-4 left-4 z-10">
                                    <Badge className="bg-primary text-primary-foreground">
                                      Most Popular
                                    </Badge>
                                  </div>
                                )}
                                
                                <div className="relative overflow-hidden h-48">
                                  <motion.img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    whileHover={{ scale: 1.05 }}
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <CardContent className="p-6 space-y-4">
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <h3 className="text-xl font-serif font-semibold text-card-foreground group-hover:text-primary transition-colors">
                                        {service.title}
                                      </h3>
                                      <div className="flex items-center gap-2 mt-1">
                                        <div className="flex items-center gap-1">
                                          {[...Array(5)].map((_, i) => (
                                            <Star
                                              key={i}
                                              className={`w-4 h-4 ${
                                                i < service.rating ? "fill-primary text-primary" : "text-muted-foreground"
                                              }`}
                                            />
                                          ))}
                                        </div>
                                        <span className="text-sm text-muted-foreground">({service.rating}.0)</span>
                                      </div>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-2xl font-bold text-primary">${service.price}</div>
                                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {service.duration}
                                      </div>
                                    </div>
                                  </div>

                                  <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                  </p>

                                  {service.features && (
                                    <div className="space-y-2">
                                      <h4 className="font-medium text-sm">Includes:</h4>
                                      <div className="grid grid-cols-2 gap-1">
                                        {service.features.map((feature, i) => (
                                          <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            {feature}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  <div className="flex gap-3 pt-4">
                                    <Button 
                                      className="flex-1" 
                                      data-testid={`button-book-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                      onClick={() => setSelectedService(service)}
                                    >
                                      Book Now
                                    </Button>
                                    <Button 
                                      variant="outline" 
                                      size="sm" 
                                      data-testid={`button-details-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                    >
                                      Details
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-transparent to-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Ready for Your Transformation?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Book your appointment today and experience the luxury of premium beauty services in our state-of-the-art salon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" data-testid="button-book-appointment">
                Book Your Appointment
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" data-testid="button-consultation">
                Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal Placeholder */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-card rounded-lg p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-serif font-bold mb-4">{selectedService.title}</h3>
              <p className="text-muted-foreground mb-6">{selectedService.description}</p>
              <div className="flex gap-3">
                <Button className="flex-1" data-testid="button-confirm-booking">
                  Confirm Booking
                </Button>
                <Button variant="outline" onClick={() => setSelectedService(null)} data-testid="button-close-modal">
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}