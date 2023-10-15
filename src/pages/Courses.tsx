import InstructorCourseCard from "../components/cards/InstructorCourseCard";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { db } from "../firebase-cofig";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useAuthContext } from "../contexts/AuthProvider";
import { Separator } from "../components/ui/separator";

export default function Courses() {
  const { user } = useAuthContext();
  const [courses, setCourses] = useState<any>([]);

  useEffect(() => {
    const getCourse = async () => {
      const docRef = await doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCourses(docSnap.data().courses);
        console.log("Document data:", courses);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    user && getCourse();
  }, []);
  console.log("User: ", user?.uid);
  console.log(courses);

  return (
    <>
      {courses.length > 0 ? (
        <div className="px-4 py-6 space-y-6 md:pl-6 xl:pl-8 sm:py-8 md:py-10 lg:pt-12 md:pb-0">
          <div className="space-y-4">
            <h1 className="max-w-[332px] text-xl font-semibold line-clamp-1 lg:text-xl lg:max-w-[80%] md:px-0">
              Analytics
            </h1>
            <div className="h-20 w-full p-4 bg-background rounded-xl flex gap-4 items-center justify-evenly text-center line-clamp-1">
              <div>
                <h2 className="font-bold text-xl">{courses.length}</h2>
                <h2>Courses</h2>
              </div>
              <Separator orientation="vertical" />
              <div>
                <h2 className="font-bold text-xl">{courses.length+10000}</h2>
                <h2>Total Students Enrolled</h2>
              </div>
              <Separator orientation="vertical" />
              <div>
                <h2 className="font-bold text-xl">{courses.length+4}</h2>
                <h2>Popular Courses</h2>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="max-w-[332px] text-xl font-semibold line-clamp-1 lg:text-xl lg:max-w-[80%] md:px-0">
              Your Courses
            </h1>
            <div className="w-full xl:max-w-6xl flex flex-col items-center justify-center md:grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              <InstructorCourseCard
                title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
                photo="https://source.unsplash.com/random"
              />
              <InstructorCourseCard
                title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
                photo="https://source.unsplash.com/random"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8 items-center justify-center px-4 md:px-8 h-full w-full md:gap-8">
          <div>
            <h1 className="mt-16 text-center text-2xl font-semibold md:text-3xl">
              You don't have any courses.
            </h1>
            <p className="text-center font-medium text-secondary-foreground text-base lg:text-lg">
              Create any course.
            </p>
          </div>
          <Link to="/new" className="w-full max-w-md sm:max-w-sm">
            <Button className="btn-outline mx-auto">New Course</Button>
          </Link>
        </div>
      )}
    </>
  );
}
