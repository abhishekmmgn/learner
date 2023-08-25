import CourseCard from "./CourseCard";
import EnrolledCourseCard from "./EnrolledCourseCard";
import { GoChevronRight } from "react-icons/go";

function CourseCardGallery(props) {
  const photo = "https://picsum.photos/340/132";
  return (
    <div className="w-full bg-transparent">
      <div className="mb-3 flex items-center">
        <h1 className="max-w-[332px] text-2xl font-semibold max-h-10 md:max-h-12 overflow-hidden md:text-3xl xl:text-4xl lg:max-w-[80%]">
          {props.title}
        </h1>
        <GoChevronRight className="mt-1 text-black text-2xl md:text-3xl lg:text-4xl" />
      </div>

      {props.enrolled ? (
        <div className="h-full flex flex-row gap-3 overflow-visible overflow-x-scroll no-scrollbar">
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
        <div className="flex flex-row gap-3 overflow-visible overflow-x-scroll">
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