import TopicCardGallery from "../components/cards/TopicCardGallery";
import CourseCardGallery from "../components/cards/CourseCardGallery";

export default function Home() {
  return (
    <div className="pl-4 md:pl-6 xl:pl-8 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 space-y-6 sm:space-y-8 xl:space-y-10">
      <TopicCardGallery title="Explore by Topics" />
      <CourseCardGallery title="Featured Courses" />
      <CourseCardGallery title="New Courses" />
    </div>
  );
}
