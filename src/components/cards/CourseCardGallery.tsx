import { ChevronRightIcon } from "@radix-ui/react-icons";
import CourseCard from "./CourseCard";
import EnrolledCourseCard from "./EnrolledCourseCard";

function CourseCardGallery(props) {
  const photo = "https://picsum.photos/340/132";
  return (
    <div className="w-full">
      <div className="mb-3 flex items-center">
        <h1 className="max-w-[332px] text-xl font-semibold line-clamp-1 lg:text-xl lg:max-w-[80%]">
          {props.title}
        </h1>
        <ChevronRightIcon className="w-5 h-5 sm:hidden" />
      </div>

      <div className="h-full flex flex-row gap-4 pr-4 overflow-visible overflow-x-scroll no-scrollbar">
        {props.enrolled ? (
          <>
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
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default CourseCardGallery;
