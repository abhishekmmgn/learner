import CreateCourseForm from "../forms/CreateCourseForm";
import { useAuthContext } from "../contexts/AuthProvider";
import { Navigate } from "react-router-dom";

export default function CreateCourse() {
  const { user } = useAuthContext();
  return (
    <>
      {user ? (
        <div className="px-4 pt-6 pb-2 flex flex-col items-center sm:py-8 md:py-10 lg:pt-12 md:pb-0 md:px-6 lg:px-0">
          <div className="w-full sm:max-w-xl md:max-w-2xl">
            <CreateCourseForm />
          </div>
        </div>
      ) : (
        <Navigate to="/auth" />
      )}
    </>
  );
}
