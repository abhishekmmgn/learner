import CourseCardGallery from "../components/cards/CourseCardGallery";
import { Link } from "react-router-dom";

export default function Library(props) {
  const hasCourses = true;

  return (
    <div className="h-full">
      {hasCourses ? (
        <div className="pl-4 space-y-6 bg-gray-6-light md:px-8">
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
        <div className="flex flex-col items-center justify-center px-4 h-full w-full bg-background-light">
          <h1 className="text-center text-3xl font-semibold md:text-5xl">
            You do not have any courses
          </h1>
          <p className="text-center font-medium text-black-secondary mt-1 mb-4 text-base+ md:text-lg">
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
