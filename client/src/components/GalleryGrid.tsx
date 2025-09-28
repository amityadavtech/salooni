import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import transformationImage from "@assets/generated_images/Hair_transformation_gallery_a3a9b585.png";
import salonInteriorImage from "@assets/generated_images/Luxury_salon_interior_546af048.png";
import academyClassroomImage from "@assets/generated_images/Hair_academy_classroom_0991572b.png";

const galleryItems = [
  {
    id: 1,
    image: transformationImage,
    title: "Color Transformation",
    category: "salon",
    description: "Beautiful blonde highlights with dimensional color"
  },
  {
    id: 2,
    image: salonInteriorImage,
    title: "Salon Interior",
    category: "salon",
    description: "Our luxurious salon environment"
  },
  {
    id: 3,
    image: academyClassroomImage,
    title: "Academy Training",
    category: "academy",
    description: "Students learning advanced techniques"
  },
  {
    id: 4,
    image: transformationImage,
    title: "Bridal Styling",
    category: "salon",
    description: "Elegant bridal hair and makeup"
  },
  {
    id: 5,
    image: academyClassroomImage,
    title: "Hands-on Learning",
    category: "academy",
    description: "Practical training sessions"
  },
  {
    id: 6,
    image: salonInteriorImage,
    title: "Premium Services",
    category: "salon",
    description: "Luxury treatment rooms"
  }
];

type FilterType = "all" | "salon" | "academy";

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredItems = galleryItems.filter(item => 
    filter === "all" || item.category === filter
  );

  const filterButtons: { key: FilterType; label: string }[] = [
    { key: "all", label: "All Work" },
    { key: "salon", label: "Salon" },
    { key: "academy", label: "Academy" },
  ];

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        {filterButtons.map(({ key, label }) => (
          <Button
            key={key}
            variant={filter === key ? "default" : "outline"}
            onClick={() => setFilter(key)}
            className="flex items-center gap-2"
            data-testid={`button-filter-${key}`}
          >
            <Filter className="w-4 h-4" />
            {label}
          </Button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
              data-testid={`gallery-item-${item.id}`}
            >
              <div className="relative overflow-hidden rounded-lg bg-card border border-card-border hover-elevate">
                <div className="aspect-square overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white w-full">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={item.category === "salon" ? "bg-purple-600" : "bg-teal-600"}>
                        {item.category === "salon" ? "Salon" : "Academy"}
                      </Badge>
                      <ZoomIn className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
                onClick={() => setSelectedImage(null)}
                data-testid="button-close-lightbox"
              >
                <X className="w-6 h-6" />
              </Button>
              
              <div className="bg-card rounded-lg overflow-hidden">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className={selectedImage.category === "salon" ? "bg-purple-600" : "bg-teal-600"}>
                      {selectedImage.category === "salon" ? "Salon Work" : "Academy Training"}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}