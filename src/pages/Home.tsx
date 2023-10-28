import TopicCardGallery from "../components/cards/TopicCardGallery";
import CourseCardGallery from "../components/cards/CourseCardGallery";
import { useAuthContext } from "../contexts/AuthProvider";
import HomePageSkeleton from "../components/skeletons/HomePageSkeleton";
import { Button } from "@/components/ui/button";
import { createCourse, getCourses, getCoursesByTopics } from "@/utils/Course";
import courses from "../utils/courses";
import toast from "react-hot-toast";

export default function Home() {
  const { loading } = useAuthContext();

  function getAllCourses() {
    // getCourses().then((res) => {
    //   console.log(res);
    // });
    const topics = [
      "Python Programming",
      "Data Science",
      "Web Development",
      "Mobile App Development",
      "Java Programming",
      "C++ Programming",
      "Software Engineering",
      "Machine Learning",
      "Artificial Intelligence",
      "Front-end Development",
      "Back-end Development",
      "Data Engineering",
      "Full Stack Development",
      "JavaScript Development",
      "Blockchain Development",
      "Cybersecurity",
      "Ethical Hacking",
      "Data Analytics",
      "Game Development",
      "Cloud Computing",
      "Computer Vision",
      "Natural Language Processing",
      "Database Management",
      "DevOps Practices",
      "Programming Languages",
    ];
    // create another topic array with 10 topics about business
    const businessTopics = [
      "Startup",
      "Supply Chain Management",
      "Finance",
      "Marketing",
      "Accounting",
      "Management",
      "Leadership",
      "Entrepreneurship",
      "Business Strategy",
      "Business Analysis",
      "Project Management",
    ];

    getCoursesByTopics(businessTopics).then((res) => {
      console.log(res);
    });
  }

  if (loading) {
    return <HomePageSkeleton />;
  } else {
    return (
      <div className="pl-4 py-6 md:pl-6 space-y-5 xl:pl-8 sm:py-8 md:py-10 lg:pt-12 md:pb-0 md:space-y-6 xl:space-y-8">
        <Button onClick={getAllCourses}>Get All Courses</Button>
        <TopicCardGallery />
        <CourseCardGallery
          title="Featured Courses"
          enrolled={false}
          courses={[
            {
              title: "Title1",
              image: "https://picsum.photos/200/200",
              students: 12,
              instructor: "James Clear",
              duration: "2h 30m",
              courseId: "19039042903",
            },
            {
              title: "Title1",
              image: "https://picsum.photos/200/200",
              students: 12,
              instructor: "James Clear",
              duration: "2h 30m",
              courseId: "19039042903",
            },
            {
              title: "Title1",
              image: "https://picsum.photos/200/200",
              students: 12,
              instructor: "James Clear",
              duration: "2h 30m",
              courseId: "19039042903",
            },
            {
              title: "Title1",
              image: "https://picsum.photos/200/200",
              students: 12,
              instructor: "James Clear",
              duration: "2h 30m",
              courseId: "19039042903",
            },
            {
              title: "Title1",
              image: "https://picsum.photos/200/200",
              students: 12,
              instructor: "James Clear",
              duration: "2h 30m",
              courseId: "19039042903",
            },
          ]}
        />
        <CourseCardGallery title="New Courses" />
      </div>
    );
  }
}
