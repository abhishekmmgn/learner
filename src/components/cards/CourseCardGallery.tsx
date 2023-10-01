import CourseCard from "./CourseCard";
import EnrolledCourseCard from "./EnrolledCourseCard";

function CourseCardGallery(props) {
  const photo = "https://picsum.photos/340/132";
  return (
    <div className="w-full">
      <div className="mb-3 flex items-center">
        <h1 className="max-w-[332px] text-2xl font-semibold line-clamp-1  md:text-base lg:text-xl lg:max-w-[80%] dark:text-white-tertiary/90">
          {props.title}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mt-1 text-2xl text-black md:text-3xl lg:text-4xl sm:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>

      {props.enrolled ? (
        <div className="h-full flex flex-row gap-4 pr-4 overflow-visible overflow-x-scroll no-scrollbar">
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
        <div className="h-full flex flex-row gap-4 pr-4 overflow-visible overflow-x-scroll no-scrollbar">
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