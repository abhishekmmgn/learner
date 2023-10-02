import CourseCardGallery from "../components/cards/CourseCardGallery";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Library(props) {
  const hasCourses = true;

  return (
    <div className="h-full">
      {hasCourses ? (
        <div className="pl-4 md:pl-6 xl:pl-8 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 space-y-6 sm:space-y-8 xl:space-y-10">
          <CourseCardGallery
            enrolled={true}
            title="Currently Learning"
            details={props.details}
          />
          <CourseCardGallery
            enrolled={true}
            title="Not Started"
            details={props.details}
          />
          <CourseCardGallery
            enrolled={true}
            title="Completed"
            details={props.details}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-center justify-center px-4 md:px-8 h-full w-full md:gap-8">
          <div>
            <h1 className="mt-16 text-center text-2xl font-semibold md:text-3xl">
              You don't have any courses.
            </h1>
            <p className="text-center font-medium text-secondary-foreground text-base lg:text-lg">
              Enroll in any course and start learning.
            </p>
          </div>
          <Link to="/" className="w-full max-w-md sm:max-w-sm">
            <Button className="btn-outline mx-auto">Explore Courses</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
