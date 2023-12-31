import CourseCardGallery from "../components/cards/CourseCardGallery";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useAuthContext } from "../contexts/AuthProvider";
import LibrarySkeleton from "../components/skeletons/LibraryPageSkeleton";

export default function Library(props) {
  const hasCourses = true;
  const { loading } = useAuthContext();

  if (loading) {
    return <LibrarySkeleton />;
  } else {
    return (
      <>
        {hasCourses ? (
          <div className="pl-4 py-6 md:pl-6 space-y-6 xl:pl-8 sm:py-8 md:py-10 lg:pt-12 md:pb-0 sm:space-y-8 xl:space-y-10">
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
              <Button className="btn-outline mx-auto">Discover Courses</Button>
            </Link>
          </div>
        )}
      </>
    );
  }
}
