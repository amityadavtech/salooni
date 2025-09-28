import { motion } from "framer-motion";
import { Heart, Star, Award, Users, Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import salonImage from "@assets/generated_images/Luxury_salon_interior_546af048.png";
import stylistImage from "@assets/generated_images/Professional_hair_stylist_282ce7b5.png";
import instructorImage from "@assets/generated_images/Hair_academy_instructor_4f654dd4.png";

// todo: remove mock functionality
const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Master Stylist & Color Specialist",
    bio: "With over 12 years of experience, Sarah is renowned for her innovative color techniques and has trained stylists across the country.",
    image: stylistImage,
    specialties: ["Color Correction", "Balayage", "Bridal Styling"],
  },
  {
    name: "Maria Rodriguez",
    role: "Academy Director & Senior Instructor",
    bio: "Maria leads our academy with passion and expertise, having graduated over 500 successful stylists in her 15-year teaching career.",
    image: instructorImage,
    specialties: ["Hair Cutting", "Education", "Business Training"],
  },
  {
    name: "Isabella Chen",
    role: "Creative Director",
    bio: "Isabella brings artistic vision to every project, specializing in avant-garde styling and fashion week looks.",
    image: stylistImage,
    specialties: ["Editorial Styling", "Fashion Week", "Creative Color"],
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion for Beauty",
    description: "We believe beauty is an art form that should be celebrated and nurtured with genuine care and creativity.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We strive for perfection in every service, continuously learning and improving our techniques and skills.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We foster a supportive community where clients and students feel valued, inspired, and empowered.",
  },
];

const milestones = [
  { year: "2009", event: "Luxe Academy Founded", description: "Started with a small salon and big dreams" },
  { year: "2012", event: "Academy Launch", description: "Opened our professional training program" },
  { year: "2016", event: "Award Recognition", description: "Named 'Best Salon' by City Beauty Awards" },
  { year: "2020", event: "Digital Expansion", description: "Launched online courses and virtual consultations" },
  { year: "2024", event: "500+ Graduates", description: "Celebrated our 500th successful graduate" },
];

export default function AboutPage() {
  return (
    <div className="pt-32 lg:pt-40">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
                Our Story
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Founded in 2009, Luxe Academy began as a vision to create a space where beauty meets artistry. 
                What started as a small salon has grown into a premier destination for both luxury services and 
                professional education.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're proud to be recognized as a leader in the beauty industry, having transformed 
                thousands of lives through our services and trained hundreds of successful beauty professionals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src={salonImage}
                alt="Luxe Academy Interior"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-card-border h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower individuals through transformative beauty experiences and world-class education. 
                    We're committed to helping our clients look and feel their absolute best while training the 
                    next generation of beauty professionals with the skills, knowledge, and confidence to succeed.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-card-border h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading destination where beauty, education, and innovation converge. We envision a 
                    future where everyone has access to exceptional beauty services and where passionate individuals 
                    can build successful careers in an industry that celebrates creativity and self-expression.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do, from the services we provide to the education we offer.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-card-border hover-elevate h-full">
                    <CardContent className="p-8 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our talented team of stylists and instructors bring years of experience and passion to every client and student.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="bg-card/50 backdrop-blur-sm border-card-border hover-elevate h-full">
                  <CardContent className="p-8 text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-6 border-4 border-primary/20">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped our growth and success over the years.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden lg:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <Card className="bg-card/50 backdrop-blur-sm border-card-border hover-elevate">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                            {milestone.year}
                          </div>
                          <Award className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{milestone.event}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="hidden lg:block w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10" />
                  
                  <div className="flex-1 lg:block hidden" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}