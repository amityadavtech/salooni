import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  type: "salon" | "academy";
}

export default function TestimonialCard({
  name,
  role,
  content,
  rating,
  avatar,
  type,
}: TestimonialCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="bg-card/50 backdrop-blur-sm border-card-border hover-elevate h-full">
        <CardContent className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <Avatar className="w-16 h-16 border-2 border-primary/20">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                {getInitials(name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h4 className="font-semibold text-lg text-card-foreground">{name}</h4>
              <p className="text-muted-foreground text-sm">{role}</p>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rating ? "fill-primary text-primary" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
            <Quote className="w-8 h-8 text-primary/30 flex-shrink-0" />
          </div>
          
          <blockquote className="text-card-foreground leading-relaxed italic relative">
            "{content}"
          </blockquote>
          
          <div className="mt-4 pt-4 border-t border-border">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              type === "salon" 
                ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                : "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300"
            }`}>
              {type === "salon" ? "Salon Client" : "Academy Graduate"}
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}