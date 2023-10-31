import { ChevronRightIcon } from "@radix-ui/react-icons";
import { EnrolledCourseCard } from "./CourseCard";
import { enrolledCourseType } from "@/types/CourseType";

type PropsType = {
  title: string;
  courses: Array<enrolledCourseType>;
};
function CourseCardGallery(props: PropsType) {
  return (
    <div className="w-full">
      <div className="mb-3 flex items-center">
        <h1 className="max-w-[332px] text-xl font-semibold line-clamp-1 lg:text-xl lg:max-w-[80%]">
          {props.title}
        </h1>
        <ChevronRightIcon className="w-5 h-5 sm:hidden" />
      </div>

      <div className="h-full flex flex-row gap-4 pr-4 overflow-visible overflow-x-scroll no-scrollbar">
        {props.courses?.map((course, index: number) => (
          <EnrolledCourseCard
            title={course.title}
            progress={course.progress}
            image={course.image}
            courseId={course.courseId}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseCardGallery;
