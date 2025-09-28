import ServiceCard from '../ServiceCard'
import transformationImage from "@assets/generated_images/Hair_transformation_gallery_a3a9b585.png";

export default function ServiceCardExample() {
  return (
    <div className="p-6 bg-background">
      <ServiceCard
        title="Premium Hair Color"
        description="Transform your look with our expert color specialists using premium organic products for stunning, long-lasting results."
        price="150"
        duration="2.5 hrs"
        image={transformationImage}
        rating={5}
        stylist="Sarah Johnson"
        isPopular={true}
      />
    </div>
  )
}