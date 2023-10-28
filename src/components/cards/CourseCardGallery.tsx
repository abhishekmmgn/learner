import { ChevronRightIcon } from "@radix-ui/react-icons";
import { CourseCard, EnrolledCourseCard } from "./CourseCard";

type PropsType = {
  title: string;
  enrolled: boolean;
  progress?: number;
  courses: {
    title: string;
    image: string;
    students: number;
    instructor: string;
    duration: string;
    courseId: string;
  }[];
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

      {/* <div className="h-full flex flex-row gap-4 pr-4 overflow-visible overflow-x-scroll no-scrollbar">
        {props.enrolled ? (
          {props.courses?.map((course, index) => (
            <EnrolledCourseCard
              title={course.title}
              progress={props.progress}
              image={course.image}
              key={index}
            />
          ))}
        ) : (
        {props.courses?.map((course, index) => (
          <CourseCard
            title={course.title}
            duration={course.duration}
            students={course.students}
            instructor={course.instructor}
            image={course.image}
            key={index}
          />
        ))}
        )}
      </div> */}
    </div>
  );
}

export default CourseCardGallery;
