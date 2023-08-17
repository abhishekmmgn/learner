import CourseCard from "./CourseCard";
import EnrolledCourseCard from "./EnrolledCourseCard";
import { GoChevronRight } from "react-icons/go";

function CourseCardGallery(props) {
  const photo = "https://picsum.photos/340/132";
  return (
    <div className="w-full overflow-clip">
      <div className="mb-3 flex items-center">
        <h1 className="scroll-smooth overflow-clip max-w-[332px] text-2xl font-semibold">
          {props.title}
        </h1>
        <GoChevronRight className="mt-1 text-black text-2xl" />
      </div>
      {props.enrolled ? (
        <div className="flex flex-row gap-2 overflow-visible overflow-x-scroll sm:gap-3">
          <EnrolledCourseCard
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            progress={30}
            photo="https://picsum.photos/340/131"
          />
          <EnrolledCourseCard
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            progress={30}
            photo="https://picsum.photos/340/131"
          />
          <EnrolledCourseCard
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            progress={30}
            photo="https://picsum.photos/340/131"
          />
          <EnrolledCourseCard
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            progress={30}
            photo="https://picsum.photos/340/131"
          />
          <EnrolledCourseCard
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            progress={30}
            photo="https://picsum.photos/340/131"
          />
          <EnrolledCourseCard
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            progress={30}
            photo="https://picsum.photos/340/131"
          />
        </div>
      ) : (
        <div className="flex flex-row gap-2 overflow-visible overflow-x-scroll sm:gap-3">
          <CourseCard
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            progress={30}
            photo="https://picsum.photos/340/131"
          />
          <CourseCard
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            progress={30}
            photo="https://picsum.photos/340/131"
          />
          <CourseCard
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            progress={30}
            photo="https://picsum.photos/340/131"
          />
          <CourseCard
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            progress={30}
            photo="https://picsum.photos/340/131"
          />
        </div>
      )}
    </div>
  );
}

export default CourseCardGallery;
