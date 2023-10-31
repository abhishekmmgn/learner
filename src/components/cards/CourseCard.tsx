import { Link } from "react-router-dom";
import { Progress } from "../ui/progress";

type courseCardProps = {
  image?: string;
  title: string;
  students: number;
  instructor: string;
  duration: string;
  courseId: string;
};
export function CourseCard(props: courseCardProps) {
  return (
    <Link
      to={`/course/${props.courseId}`}
      className="mx-auto w-full max-w-md flex flex-col bg-background rounded-lg shadow-sm"
    >
      {props.image && (
        <img
          src={props.image}
          alt="Course Photo"
          className="bg-tertiary/80 object-cover aspect-video rounded-t-lg"
          loading="lazy"
        />
      )}
      <div className="h-32 flex flex-col justify-center px-3 w-full overflow-clip">
        <h1 className="mb-3 font-medium line-clamp-2 w-full lg:text-lg">
          {props.title}
        </h1>
        <div>
          <p className="line-clamp-1 text-gray-700 block text-sm lg:text-sm+ dark:text-gray-300">
            Students: {props.students}
          </p>
          <p className="line-clamp-1 text-gray-700 block text-sm lg:text-sm+ dark:text-gray-300">
            Instructors: {props.instructor}
          </p>
          <p className="line-clamp-1 text-gray-700 block text-sm lg:text-sm+ dark:text-gray-300">
            Duration: {props.duration}
          </p>
        </div>
      </div>
    </Link>
  );
}

type enrolledCourseCardProps = {
  image?: string;
  title: string;
  progress: number;
  courseId: string;
};
export function EnrolledCourseCard(props: enrolledCourseCardProps) {
  return (
    <Link
      to={`/course/${props.courseId}`}
      className="min-w-[calc(100%-32px)] w-full max-w-sm flex flex-col bg-background rounded-lg sm:min-w-[360px] sm:max-w-sm shadow-sm"
    >
      {props.image && (
        <img
          src={props.image}
          alt="Course Photo"
          className="bg-tertiary/80 object-cover aspect-video rounded-t-lg"
          loading="lazy"
        />
      )}
      <div className="h-24 flex flex-col justify-center px-3 w-full overflow-clip">
        <h1 className="mb-3 font-medium line-clamp-2 w-full lg:text-lg">
          {props.title}
        </h1>
        <Progress value={props.progress} className="rounded-[3px]" />
      </div>
    </Link>
  );
}

type instructorCourseCardProps = {
  image?: string;
  title: string;
  students: number;
  courseId: string;
};

export function InstructorCourseCard(props: instructorCourseCardProps) {
  return (
    <Link
      to={`/course/${props.courseId}`}
      className="mx-auto w-full max-w-md flex flex-col bg-background rounded-lg shadow-sm"
    >
      {props.image && (
        <img
          src={props.image}
          alt="Course Photo"
          className="bg-tertiary/80 object-cover aspect-video rounded-t-lg"
          loading="lazy"
        />
      )}
      <div className="h-20 flex flex-col justify-center px-3 w-full overflow-clip">
        <h1 className="mb-3 font-medium line-clamp-2 w-full lg:text-lg">
          {props.title}
        </h1>
        <p className="line-clamp-1 text-gray-700 block text-sm lg:text-sm+ dark:text-gray-300">
            Students: {props.students}
          </p>
      </div>
    </Link>
  );
}
