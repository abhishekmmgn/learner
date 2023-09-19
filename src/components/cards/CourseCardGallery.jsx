import CourseCard from "./CourseCard";
import EnrolledCourseCard from "./EnrolledCourseCard";
import { GoChevronRight } from "react-icons/go";

function CourseCardGallery(props) {
  const photo = "https://picsum.photos/340/132";
  return (
    <div className="w-full py-4">
      <div className="mb-3 flex items-center">
        <h1 className="max-w-[332px] text-2xl font-semibold line-clamp-1 md:text-3xl xl:text-4xl lg:max-w-[80%] dark:text-white-tertiary/90">
          {props.title}
        </h1>
        <GoChevronRight className="mt-1 text-black text-2xl md:text-3xl lg:text-4xl" />
      </div>

      {props.enrolled ? (
        <div className="h-full flex flex-row gap-4 overflow-visible overflow-x-scroll no-scrollbar">
          <EnrolledCourseCard
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            progress={30}
            photo="https://source.unsplash.com/random"
          />
          <EnrolledCourseCard
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            progress={0}
            photo="https://source.unsplash.com/random"
          />
          <EnrolledCourseCard
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            progress={56}
            photo="https://source.unsplash.com/random"
          />
          <EnrolledCourseCard
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            progress={89}
            photo="https://source.unsplash.com/random"
          />
        </div>
      ) : (
        <div className="h-full flex flex-row gap-4 overflow-visible overflow-x-scroll no-scrollbar">
          <CourseCard
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            photo="https://source.unsplash.com/random"
          />
          <CourseCard
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            photo="https://source.unsplash.com/random"
          />
          <CourseCard
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            photo="https://source.unsplash.com/random"
          />
          <CourseCard
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            photo="https://source.unsplash.com/random"
          />
        </div>
      )}
    </div>
  );
}

export default CourseCardGallery;