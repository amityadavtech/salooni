import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  Users, 
  Calendar, 
  Award, 
  BookOpen, 
  Video, 
  CheckCircle, 
  Clock,
  TrendingUp,
  Target,
  Lightbulb,
  Briefcase
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCard from "@/components/CourseCard";
import academyImage from "@assets/generated_images/Hair_academy_classroom_0991572b.png";
import instructorImage from "@assets/generated_images/Hair_academy_instructor_4f654dd4.png";
import stylistImage from "@assets/generated_images/Professional_hair_stylist_282ce7b5.png";

const courseCategories = [
  {
    id: "foundation",
    label: "Foundation Courses",
    icon: BookOpen,
    description: "Start your beauty journey"
  },
  {
    id: "advanced",
    label: "Advanced Training",
    icon: TrendingUp,
    description: "Master advanced techniques"
  },
  {
    id: "specialized",
    label: "Specialized Skills",
    icon: Target,
    description: "Niche expertise development"
  },
  {
    id: "business",
    label: "Business & Career",
    icon: Briefcase,
    description: "Build your beauty business"
  }
];

const courses = {
  foundation: [
    {
      title: "Hair Styling Fundamentals",
      description: "Master the basics of professional hair styling with comprehensive hands-on training covering all essential techniques and tools.",
      price: "2,499",
      duration: "12 weeks",
      image: academyImage,
      level: "Beginner" as const,
      instructor: "Maria Rodriguez",
      students: 24,
      rating: 5,
      startDate: "Feb 15",
      isEnrollmentOpen: true,
      modules: 8,
      practicalHours: 120
    },
    {
      title: "Color Theory & Application",
      description: "Learn color science, mixing techniques, and application methods to create stunning color transformations safely and effectively.",
      price: "2,899",
      duration: "10 weeks",
      image: instructorImage,
      level: "Beginner" as const,
      instructor: "Sarah Johnson",
      students: 18,
      rating: 5,
      startDate: "Mar 1",
      isEnrollmentOpen: true,
      modules: 6,
      practicalHours: 100
    }
  ],
  advanced: [
    {
      title: "Advanced Color Correction",
      description: "Master complex color correction techniques and problem-solving for challenging color situations with expert guidance.",
      price: "3,299",
      duration: "8 weeks",
      image: stylistImage,
      level: "Advanced" as const,
      instructor: "Sarah Johnson",
      students: 12,
      rating: 5,
      startDate: "Mar 15",
      isEnrollmentOpen: true,
      modules: 4,
      practicalHours: 80
    },
    {
      title: "Editorial & Fashion Styling",
      description: "Develop skills for high-fashion, editorial, and runway styling with creative techniques and industry insights.",
      price: "3,799",
      duration: "6 weeks",
      image: academyImage,
      level: "Advanced" as const,
      instructor: "Isabella Chen",
      students: 10,
      rating: 5,
      startDate: "Apr 1",
      isEnrollmentOpen: true,
      modules: 6,
      practicalHours: 60
    }
  ],
  specialized: [
    {
      title: "Bridal Styling Specialist",
      description: "Specialize in bridal and special occasion styling with techniques for creating elegant, long-lasting looks.",
      price: "2,799",
      duration: "8 weeks",
      image: instructorImage,
      level: "Intermediate" as const,
      instructor: "Isabella Chen",
      students: 16,
      rating: 5,
      startDate: "Feb 20",
      isEnrollmentOpen: true,
      modules: 5,
      practicalHours: 90
    }
  ],
  business: [
    {
      title: "Salon Business Management",
      description: "Learn to run a successful salon business with marketing, finance, client management, and operations training.",
      price: "1,999",
      duration: "6 weeks",
      image: academyImage,
      level: "Intermediate" as const,
      instructor: "Business Expert",
      students: 20,
      rating: 5,
      startDate: "Mar 10",
      isEnrollmentOpen: true,
      modules: 6,
      practicalHours: 40
    }
  ]
};

const features = [
  {
    icon: Video,
    title: "Online Learning Platform",
    description: "Access course materials, tutorials, and resources 24/7 through our modern learning platform"
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Personalized attention with maximum 15 students per class for optimal learning experience"
  },
  {
    icon: Award,
    title: "Industry Certification",
    description: "Receive recognized certification upon completion to boost your professional credentials"
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description: "Job placement assistance, portfolio development, and ongoing career guidance"
  }
];

const instructors = [
  {
    name: "Maria Rodriguez",
    role: "Academy Director & Master Educator",
    specialties: ["Hair Cutting", "Education Leadership", "Curriculum Development"],
    experience: "15+ years",
    image: instructorImage,
    bio: "Maria has trained over 500 successful stylists and leads our academy with passion for education and industry excellence."
  },
  {
    name: "Sarah Johnson", 
    role: "Color Specialist & Senior Instructor",
    specialties: ["Color Theory", "Correction Techniques", "Creative Color"],
    experience: "12+ years",
    image: stylistImage,
    bio: "Sarah is renowned for her innovative color techniques and has been featured in top beauty publications."
  },
  {
    name: "Isabella Chen",
    role: "Creative Director & Fashion Instructor", 
    specialties: ["Editorial Styling", "Fashion Week", "Creative Direction"],
    experience: "10+ years",
    image: instructorImage,
    bio: "Isabella brings high-fashion expertise with experience styling for major fashion shows and editorial shoots."
  }
];

const stats = [
  { number: "500+", label: "Graduates", icon: GraduationCap },
  { number: "95%", label: "Job Placement Rate", icon: TrendingUp },
  { number: "15+", label: "Expert Instructors", icon: Users },
  { number: "20+", label: "Course Programs", icon: BookOpen }
];

export default function AcademyPage() {
  const [activeCategory, setActiveCategory] = useState("foundation");
  const [selectedInstructor, setSelectedInstructor] = useState<any>(null);

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
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6"
            >
              <GraduationCap className="w-10 h-10 text-primary" />
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Beauty Academy
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Transform your passion into a professional career with our comprehensive beauty education programs. 
              Learn from industry experts and join the next generation of beauty professionals.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <Button size="lg" className="text-lg px-8" data-testid="button-explore-courses">
                Explore Courses
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" data-testid="button-schedule-tour">
                Schedule Campus Tour
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-card-border hover-elevate text-center">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
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

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Why Choose Our Academy?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience world-class beauty education with modern facilities, expert instructors, and comprehensive career support.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
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
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors"
                      >
                        <Icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Our Course Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training programs designed to take you from beginner to professional with hands-on experience and industry expertise.
            </p>
          </motion.div>

          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full h-auto p-1 bg-muted/50 backdrop-blur-sm">
                {courseCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                      data-testid={`tab-${category.id}`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                      <div className="text-center">
                        <div className="font-medium text-sm">{category.label}</div>
                        <div className="text-xs opacity-70 hidden lg:block">{category.description}</div>
                      </div>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </motion.div>

            <div className="mt-12">
              {courseCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="grid lg:grid-cols-2 gap-8">
                      <AnimatePresence mode="wait">
                        {courses[category.id as keyof typeof courses]?.map((course, index) => (
                          <motion.div
                            key={`${category.id}-${index}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="group"
                          >
                            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-card-border hover-elevate h-full">
                              <div className="relative overflow-hidden h-48">
                                <motion.img
                                  src={course.image}
                                  alt={course.title}
                                  className="w-full h-full object-cover"
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ duration: 0.4 }}
                                />
                                <div className="absolute top-4 left-4">
                                  <Badge className={
                                    course.level === "Beginner" ? "bg-green-600" :
                                    course.level === "Intermediate" ? "bg-yellow-600" : "bg-red-600"
                                  }>
                                    {course.level}
                                  </Badge>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>

                              <CardContent className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
                                      {course.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                                      <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {course.duration}
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        {course.students} students
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-2xl font-bold text-primary">${course.price}</div>
                                  </div>
                                </div>

                                <p className="text-muted-foreground leading-relaxed">
                                  {course.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 py-3 border-t border-border">
                                  <div className="flex items-center gap-2 text-sm">
                                    <BookOpen className="w-4 h-4 text-primary" />
                                    <span>{course.modules} modules</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm">
                                    <Clock className="w-4 h-4 text-primary" />
                                    <span>{course.practicalHours}h practical</span>
                                  </div>
                                </div>

                                <div className="flex gap-3 pt-4">
                                  <Button 
                                    className="flex-1" 
                                    data-testid={`button-enroll-${course.title.toLowerCase().replace(/\s+/g, '-')}`}
                                  >
                                    Enroll Now
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    data-testid={`button-learn-more-${course.title.toLowerCase().replace(/\s+/g, '-')}`}
                                  >
                                    Learn More
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
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Learn from the Best
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our expert instructors bring years of industry experience and passion for education to guide your learning journey.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => setSelectedInstructor(instructor)}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-card-border hover-elevate h-full overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <Badge className="bg-white/20 text-white backdrop-blur-sm mb-2">
                        {instructor.experience}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {instructor.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">{instructor.role}</p>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      {instructor.bio}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {instructor.specialties.map((specialty, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              <Lightbulb className="w-8 h-8 text-primary" />
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join hundreds of successful graduates and turn your passion for beauty into a thriving professional career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" data-testid="button-apply-now">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" data-testid="button-info-session">
                Attend Info Session
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instructor Detail Modal */}
      <AnimatePresence>
        {selectedInstructor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setSelectedInstructor(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-card rounded-lg overflow-hidden max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedInstructor.image}
                alt={selectedInstructor.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">{selectedInstructor.name}</h3>
                <p className="text-primary font-medium mb-4">{selectedInstructor.role}</p>
                <p className="text-muted-foreground mb-6">{selectedInstructor.bio}</p>
                <Button onClick={() => setSelectedInstructor(null)} className="w-full" data-testid="button-close-instructor-modal">
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