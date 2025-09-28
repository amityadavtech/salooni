import { motion } from "framer-motion";
import { Clock, DollarSign, Star, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  rating: number;
  stylist: string;
  isPopular?: boolean;
}

export default function ServiceCard({
  title,
  description,
  price,
  duration,
  image,
  rating,
  stylist,
  isPopular = false,
}: ServiceCardProps) {
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
        {isPopular && (
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-primary text-primary-foreground">
              Most Popular
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div>
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
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {duration}
              </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>

          <div className="flex items-center gap-2 pt-2 border-t border-border">
            <User className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">with {stylist}</span>
          </div>

          <div className="flex gap-3 pt-4">
            <Button className="flex-1" data-testid={`button-book-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              Book Now
            </Button>
            <Button variant="outline" size="sm" data-testid={`button-details-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}