import CourseCardGallery from "../components/cards/CourseCardGallery";
import { Link } from "react-router-dom";

export default function Library(props) {
  const hasCourses = true;

  return (
    <div className="h-full">
      {hasCourses ? (
        <div className="pl-4 md:pl-6 xl:pl-8 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 space-y-6 sm:space-y-8 xl:space-y-10 ">
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
        <div className="flex flex-col items-center justify-center px-4 md:px-8 h-full w-full">
          <h1 className="text-center text-3xl font-semibold md:text-4xl xl:text-5xl dark:text-white-tertiary/90">
            You do not have any courses
          </h1>
          <p className="text-center font-medium text-black-secondary mt-1 mb-6 text-base md:text-lg xl:text-lg+ dark:text-white-tertiary/70">
            Learn with your library across your devices.
          </p>
          <Link to="/" className="w-full">
            <button className="mx-auto btn">Explore Courses</button>
          </Link>
        </div>
      )}
    </div>
  );
}
