import CourseCardGallery from "../components/cards/CourseCardGallery";
import PrimaryBtn from "../components/btn/PrimaryBtn";
import { Link } from "react-router-dom";

export default function Library(props) {
  return (
    <div>
      {props.hasCourses ? (
        <div className="pl-4 space-y-6 bg-[#f2f2f2]">
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
        <div className="w-full bg-[#f2f2f2] flex flex-col items-center px-4 h-screen justify-center">
          <h1 className="text-center text-3xl font-semibold">
            You do not have any courses
          </h1>
          <p className="text-center mt-1 mb-4 text-base+">
            Learn with your library across your devices.
          </p>
          <Link to='/' className="w-full">
            <PrimaryBtn title="Explore Courses" />
          </Link>
        </div>
      )}
    </div>
  );
}

