import TestimonialCard from '../TestimonialCard'

export default function TestimonialCardExample() {
  return (
    <div className="p-6 bg-background">
      <TestimonialCard
        name="Emily Chen"
        role="Marketing Executive"
  content="The transformation at Summera Salon & Accademy was incredible! The stylists are true artists and the atmosphere is so luxurious. I always leave feeling like a new person. The attention to detail and personalized service is unmatched."
        rating={5}
        type="salon"
      />
    </div>
  )
}