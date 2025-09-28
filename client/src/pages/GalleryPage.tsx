import { motion } from "framer-motion";
import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="pt-32 lg:pt-40">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of transformations and see the artistry that defines our work.
            </p>
          </motion.div>

          <GalleryGrid />
        </div>
      </section>
    </div>
  );
}