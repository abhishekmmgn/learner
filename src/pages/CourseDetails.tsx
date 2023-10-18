import { Button } from "../components/ui/button";
import Back from "../components/Back";
import { useState, useEffect } from "react";
import { useAuthContext } from "../contexts/AuthProvider";
import GeneralSkeleton from "../components/skeletons/GeneralSkeleton";
import { getCourse, enrollCourse } from "../utils/Course";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CourseType } from "../types/CourseType";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../components/ui/dialog";
import { deleteCourse } from "../utils/Course";

export default function CourseDetails(props) {
  const [enrolled, setEnrolled] = useState<boolean>(false);
  const navigate = useNavigate();

  const location = useLocation();
  const { user, loading, isInstructor } = useAuthContext();
  const [course, setCourse] = useState<CourseType>({
    title: "",
    description: "",
    image: "",
    duration: "",
    topics: "",
    audio: "",
    subtitles: "",
    attachments: [],
    instructorId: "",
    instructor: "",
    students: 0,
  });

  const id = location.pathname.split("/")[2];
  useEffect(() => {
    getCourse(id)
      .then((course) => {
        setCourse(course);
      })
      .catch((error) => {
        toast.error("Something went wrong");
      });
  }, []);

  function handleCourseEnroll() {
    enrollCourse(id);
    setEnrolled(true);
  }

  function handleCourseDelete() {
    deleteCourse(id);
    toast.success("Course deleted successfully");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  if (loading) {
    return <GeneralSkeleton />;
  }
  if (enrolled) {
    return (
      <>
        <Back />
        <div className="flex flex-col items-center gap-6 pb-4 md:py-8">
          <img
            src={course?.image}
            alt="Course Photo"
            className="w-full aspect-video bg-secondary max-w-4xl"
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Back />
        <div className="flex flex-col items-center gap-6 pb-4 md:py-8">
          <img
            src={course?.image}
            alt="Course Photo"
            className="w-full aspect-video bg-secondary max-w-4xl"
          />
          <div className="w-full max-w-4xl px-4 md:px-6 xl:px-0 space-y-6 xl:space-y-8">
            <div className="space-y-6">
              <div className="w-full">
                <h1 className="text-xl font-semibold line-clamp-2 md:text-2xl">
                  {course?.title}
                </h1>
                <p className="mt-1 text-tertiary-foreground line-clamp-5 md:line-clamp-3">
                  {course?.description}
                </p>
              </div>
              <div className="w-full md:max-w-xl mx-auto">
                {isInstructor && (
                  <div className="space-y-3">
                    <Button variant="secondary">Edit Course</Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="destructive">Delete Course</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Delete Course</DialogTitle>
                        </DialogHeader>
                        <DialogFooter>
                          <Button
                            type="submit"
                            variant="secondary"
                            onClick={handleCourseDelete}
                          >
                            Confirm
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                )}
                {!isInstructor && !enrolled && (
                  <Button onClick={handleCourseEnroll}>Enroll</Button>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {/* Syllabus */}
              <div>
                <p className="mb-3 md:text-lg font-medium">Syllabus</p>
                <div className="p-4 rounded-lg bg-background text-sm+ md:text-base lg:text-base+"></div>
              </div>

              {/* Information */}
              <div>
                <p className="mb-3 md:text-lg font-medium">Information</p>
                <div className="p-4 rounded-lg bg-background text-sm+ md:text-base lg:text-base+">
                  <p>Duration</p>
                  <p className="mb-3 text-tertiary-foreground">
                    {course?.duration}
                  </p>
                  <p>Topics</p>
                  <p className="mb-3 text-tertiary-foreground">
                    {course?.topics}
                  </p>
                  <p>Instructor</p>
                  <p className="mb-3 text-tertiary-foreground">
                    {course?.instructor}
                  </p>
                  <p>Students</p>
                  <p className="text-tertiary-foreground">{course?.students}</p>
                </div>
              </div>

              {/* Language */}
              <div>
                <p className="mb-3 md:text-lg font-medium">Languages</p>
                <div className="p-4 rounded-lg bg-background text-sm+ md:text-base lg:text-base+">
                  <p>Audio</p>
                  <p className="mb-3 text-tertiary-foreground">
                    {course?.audio}
                  </p>
                  <p>Subtitles</p>
                  <p className="mb-3 text-tertiary-foreground">
                    {course?.subtitles}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
