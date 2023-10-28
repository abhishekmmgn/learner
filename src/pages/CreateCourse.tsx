import CreateCourseForm from "../forms/CreateCourseForm";
import { useAuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import GeneralSkeleton from "@/components/skeletons/GeneralSkeleton";

export default function CreateCourse() {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <GeneralSkeleton />;
  }

  if (user) {
    return (
      <div className="px-4 pt-6 pb-2 flex flex-col items-center sm:py-8 md:py-10 lg:pt-12 md:pb-0 md:px-6 lg:px-0">
        <div className="w-full sm:max-w-xl md:max-w-2xl">
          <CreateCourseForm />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-6 items-center justify-center px-4 md:px-8 h-full w-full">
        <h1 className="mt-16 text-center text-2xl font-medium">
          You must be logged in to create a course.
        </h1>
        <Link to="/auth" className="w-full max-w-md sm:max-w-sm">
          <Button className="btn-outline mx-auto">Login</Button>
        </Link>
      </div>
    );
  }
}
