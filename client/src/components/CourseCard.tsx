import { motion } from "framer-motion";
import { Calendar, Clock, Users, Star, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  instructor: string;
  students: number;
  rating: number;
  startDate: string;
  isEnrollmentOpen?: boolean;
}

export default function CourseCard({
  title,
  description,
  price,
  duration,
  image,
  level,
  instructor,
  students,
  rating,
  startDate,
  isEnrollmentOpen = true,
}: CourseCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-card-border hover-elevate h-full">
        {!isEnrollmentOpen && (
          <div className="absolute top-4 right-4 z-10">
            <Badge variant="secondary">
              Enrollment Closed
            </Badge>
          </div>
        )}
        
        <div className="relative overflow-hidden h-48">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute top-4 left-4">
            <Badge className={getLevelColor(level)}>
              {level}
            </Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-serif font-semibold text-card-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rating ? "fill-primary text-primary" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({rating}.0)</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">${price}</div>
              <div className="text-sm text-muted-foreground">{duration}</div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>

          <div className="grid grid-cols-2 gap-4 py-3 border-t border-b border-border">
            <div className="flex items-center gap-2 text-sm">
              <GraduationCap className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{instructor}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{students} students</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Starts {startDate}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{duration}</span>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              className="flex-1" 
              disabled={!isEnrollmentOpen}
              data-testid={`button-enroll-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {isEnrollmentOpen ? "Enroll Now" : "Enrollment Closed"}
            </Button>
            <Button variant="outline" size="sm" data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              Learn More
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}