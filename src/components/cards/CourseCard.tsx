import { Link } from "react-router-dom";
import { Progress } from "../ui/progress";

export function CourseCard(
  image: string,
  title: string,
  students: number,
  instructor: string,
  duration: string,
  courseId: string
) {
  return (
    <Link to={`/course/${courseId}`}>
      <div className="min-w-[calc(100%-32px)] w-full max-w-sm flex flex-col bg-background rounded-lg sm:min-w-[360px] sm:max-w-sm">
        <img
          src={image}
          alt="Course Photo"
          className="bg-secondary object-cover aspect-video rounded-t-lg"
          loading="lazy"
        />
        <div className="h-40 flex flex-col justify-center px-3 w-full overflow-clip">
          <h1 className="mb-3 font-medium line-clamp-2 w-full lg:text-lg">
            {title}
          </h1>
          <div>
            <p className="line-clamp-1 text-gray-700 block text-sm lg:text-sm+ dark:text-gray-300">
              Students: {students}
            </p>
            <p className="line-clamp-1 text-gray-700 block text-sm lg:text-sm+ dark:text-gray-300">
              Instructors: {instructor}
            </p>
            <p className="line-clamp-1 text-gray-700 block text-sm lg:text-sm+ dark:text-gray-300">
              Duration: {duration}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function StretchedCourseCard(
  image: string,
  title: string,
  students: number,
  instructor: string,
  duration: string,
  courseId: string
) {
  return (
    <Link to={`/course/${courseId}`}>
      <div className="w-full flex bg-background rounded-lg">
        <img
          src={image}
          alt="Course Photo"
          className="bg-secondary w-1/3 lg:w-1/4 object-cover aspect-video rounded-l-lg"
          loading="lazy"
        />
        <div className="w-2/3 lg:w-3/4 h-44 flex flex-col justify-center px-3 overflow-clip py-4">
          <h1 className="mb-3 font-medium line-clamp-2 w-full lg:text-lg">
            {title}
          </h1>
          <div>
            <p className="line-clamp-1 text-gray-700 block text-sm lg:text-sm+ dark:text-gray-300">
              Students: {students}
            </p>
            <p className="line-clamp-1 text-gray-700 block text-sm lg:text-sm+ dark:text-gray-300">
              Instructors: {instructor}
            </p>
            <p className="line-clamp-1 text-gray-700 block text-sm lg:text-sm+ dark:text-gray-300">
              Duration: {duration}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function EnrolledCourseCard(
  image: string,
  title: string,
  courseId: string,
  progress: number
) {
  return (
    <Link to={`/course/${courseId}`}>
      <div className="min-w-[calc(100%-32px)] w-full max-w-sm flex flex-col bg-background rounded-lg sm:min-w-[360px] sm:max-w-sm">
        <img
          src={image}
          alt="Course Photo"
          className="bg-secondary object-cover aspect-video rounded-t-lg"
          loading="lazy"
        />
        <div className="h-28 flex flex-col justify-center px-3 w-full overflow-clip">
          <h1 className="mb-3 font-medium line-clamp-2 w-full lg:text-lg">
            {title}
          </h1>
          <Progress value={progress} className="rounded-[3px]" />
        </div>
      </div>
    </Link>
  );
}

export function InstructorCourseCard(
  image: string,
  title: string,
  courseId: string
) {
  return (
    <Link to={`/course/${courseId}`}>
      <div className="min-w-[calc(100%-32px)] w-full max-w-sm flex flex-col bg-background rounded-lg sm:min-w-[360px] sm:max-w-sm">
        <img
          src={image}
          alt="Course Photo"
          className="bg-secondary object-cover aspect-video rounded-t-lg"
          loading="lazy"
        />
        <div className="h-24 flex flex-col justify-center px-3 w-full overflow-clip">
          <h1 className="mb-3 font-medium line-clamp-2 w-full lg:text-lg">
            {title}
          </h1>
        </div>
      </div>
    </Link>
  );
}
