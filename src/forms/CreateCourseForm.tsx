import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Textarea } from "../components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../firebase-cofig";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  serverTimestamp,
  arrayUnion,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { useAuthContext } from "../contexts/AuthProvider";

const initialValues = {
  title: "",
  description: "",
  image: "",
  duration: "",
  topics: "",
  audio: "",
  subtitles: "",
};

const validationSchema = Yup.object({
  title: Yup.string()
    .min(10, "Title should be atleast 5 characters long")
    .max(28, "Title should be less than 28 characters")
    .required("Required"),
  description: Yup.string()
    .min(20, "Title should be atleast 20 characters long")
    .max(128, "Title should be less than 128 characters")
    .required("Required"),
  image: Yup.string().required("Required"),
  duration: Yup.string().required("Required"),
  topics: Yup.string().required("Required"),
  audio: Yup.string().required("Required"),
  subtitles: Yup.string().required("Required"),
  attachments: Yup.array().of(
    Yup.object({
      name: Yup.string().required("Required"),
      url: Yup.string().required("Required"),
    }).optional()
  ),
});

export default function CreateCourseForm() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, actions) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const data = {
        title: values.title,
        description: values.description,
        image: values.image,
        duration: values.duration,
        topics: values.topics,
        audio: values.audio,
        subtitles: values.subtitles,
        // attachments: values.attachments,
        instructorId: user.uid,
        instructor: user.displayName,
        students: 0,
      };

      try {
        const courseRef = await addDoc(collection(db, "courses"), {
          ...data,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });

        // Get the newly created course's ID
        const courseId = courseRef.id;

        // Add the course to the instructor's courses collection
        const userCoursesDocRef = doc(db, "users", user.uid);
        await updateDoc(userCoursesDocRef, {
          courses: arrayUnion(courseId),
        });

        toast.success("Course created successfully");
        
        actions.resetForm();

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } 
      catch (error) {
        toast.error("Course creation failed");
        console.error(error);
      }
    },
  });

  async function handleImageUpload(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const file = (e.target as HTMLInputElement).files[0];
    if (file) {
      const storageRef = await ref(
        storage,
        `courses/${Date.now()}-${file.name}`
      );
      try {
        await uploadBytes(storageRef, file); // Upload the file to Firebase Storage

        // Get the download URL
        const downloadURL = await getDownloadURL(storageRef);
        values.image = downloadURL;
      } catch (error) {
        console.error("Error uploading the file:", error);
      }
    }
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="grid gap-4">
          <div className="flex flex-col items-center gap-2">
            <img
              src={values.image}
              alt="Cover Image"
              className="w-full aspect-video bg-background"
            />
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={isSubmitting}
            />
            {errors.image && touched.image && (
              <p className="text-destructive text-sm">{errors.image}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Textarea
              id="title"
              placeholder="Write a catchy title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
            />
            {errors.title && touched.title && (
              <p className="text-destructive text-sm">{errors.title}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Wrtie a description for your course"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
            />
            {errors.description && touched.description && (
              <p className="text-destructive text-sm">{errors.description}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="duration">Duration</Label>
            <Input
              id="duration"
              type="text"
              placeholder="12 hours, 30 minutes, 1 hour 30 minutes etc."
              value={values.duration}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
            />
            {errors.duration && touched.duration && (
              <p className="text-destructive text-sm">{errors.duration}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="topics">Topics</Label>
            <Input
              id="topics"
              type="text"
              placeholder="Angular, Smart Farming, Biotechnology etc."
              value={values.topics}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
            />
            {errors.topics && touched.topics && (
              <p className="text-destructive text-sm">{errors.topics}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="audio">Audio</Label>
            <Input
              id="audio"
              type="text"
              placeholder="English, Spanish, Hindi, German etc."
              value={values.audio}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
            />
            {errors.audio && touched.audio && (
              <p className="text-destructive text-sm">{errors.audio}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subtitles">Subtitles</Label>
            <Input
              id="subtitles"
              type="text"
              placeholder="English, Spanish, Hindi, German etc."
              value={values.subtitles}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
            />
            {errors.subtitles && touched.subtitles && (
              <p className="text-destructive text-sm">{errors.subtitles}</p>
            )}
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && (
              <AiOutlineLoading3Quarters className="mr-2 h-4 w-4 animate-spin" />
            )}
            Done
          </Button>
        </div>
      </form>
    </div>
  );
}
