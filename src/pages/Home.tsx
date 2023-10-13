import TopicCardGallery from "../components/cards/TopicCardGallery";
import CourseCardGallery from "../components/cards/CourseCardGallery";

export default function Home() {
  return (
    <div className="pl-4 py-6 md:pl-6 space-y-6 xl:pl-8 sm:py-8 md:py-10 lg:pt-12 md:pb-0 sm:space-y-8 xl:space-y-10">
      <TopicCardGallery title="Explore by Topics" />
      <CourseCardGallery title="Featured Courses" />
      <CourseCardGallery title="New Courses" />
    </div>
  );
}
