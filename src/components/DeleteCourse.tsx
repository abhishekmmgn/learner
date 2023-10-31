import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { deleteCourse } from "../utils/Course";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function DeleteCourse({ courseId }: { courseId: string }) {
  const navigate = useNavigate();

  function handleCourseDelete() {
    deleteCourse(courseId)
      .then((res) => {
        if (res) {
          toast.success("Course deleted successfully!");
          navigate("/");
        } else {
          toast.error("Error deleting course!");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("An error occurred while deleting the course.");
      });
  }

  return (
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
  );
}
