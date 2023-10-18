import { ChevronRightIcon } from "@radix-ui/react-icons";
import { CourseCard, EnrolledCourseCard } from "./CourseCard";

function CourseCardGallery(props) {
  const courses = [];
  return (
    <div className="w-full">
      <div className="mb-3 flex items-center">
        <h1 className="max-w-[332px] text-xl font-semibold line-clamp-1 lg:text-xl lg:max-w-[80%]">
          {props.title}
        </h1>
        <ChevronRightIcon className="w-5 h-5 sm:hidden" />
      </div>

      <div className="h-full flex flex-row gap-4 pr-4 overflow-visible overflow-x-scroll no-scrollbar">
        {/* {props.enrolled ? (
          {courses.map((course, index) => (
            <EnrolledCourseCard
              title={course.title}
              progress={course.progress}
              photo={course.photo}
              key={course.index}
            />
          ))}
        ) : (
          {courses.map((course, index) => (
            <CourseCard
              title={course.title}
              progress={course.progress}
              photo={course.photo}
              key={course.index}
            />
          ))}
        )} */}
      </div>
    </div>
  );
}

export default CourseCardGallery;
