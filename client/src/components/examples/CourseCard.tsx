import CourseCard from '../CourseCard'
import academyImage from "@assets/generated_images/Hair_academy_classroom_0991572b.png";

export default function CourseCardExample() {
  return (
    <div className="p-6 bg-background">
      <CourseCard
        title="Professional Hair Styling"
        description="Master the fundamentals of hair styling with hands-on training from industry experts. Learn cutting-edge techniques and build your portfolio."
        price="2,499"
        duration="12 weeks"
        image={academyImage}
        level="Beginner"
        instructor="Maria Rodriguez"
        students={24}
        rating={5}
        startDate="Feb 15"
        isEnrollmentOpen={true}
      />
    </div>
  )
}