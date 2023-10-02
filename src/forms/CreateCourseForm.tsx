import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Textarea } from "../components/ui/textarea";

const onSubmit = async (values, actions) => {
  console.log("Hi, Mom!");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const initialValues = {
  title: "",
  description: "",
  image: "",
  duration: "",
  level: "",
  topic: "",
  audio: "",
  subtitles: "",
};

const validationSchema = Yup.object({
  title: Yup.string()
    .min(5, "Title should be atleast 5 characters long")
    .max(28, "Title should be less than 28 characters")
    .required("Required"),
  description: Yup.string()
    .min(20, "Title should be atleast 20 characters long")
    .max(128, "Title should be less than 128 characters")
    .required("Required"),
  image: Yup.string().required("Required"),
  duration: Yup.string().required("Required"),
  level: Yup.string().required("Required"),
  topic: Yup.string().required("Required"),
  audio: Yup.string().required("Required"),
  subtitles: Yup.string().required("Required"),
});

export default function CreateCourseForm() {
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
    onSubmit,
  });

  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="grid gap-4">
          <div className="flex flex-col items-center gap-2">
            <img
              src={values.image}
              alt="Cover Image"
              className="w-full aspect-video bg-white"
            />
            <Input
              id="image"
              type="file"
              accept="image/*"
              value={values.image}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className={`w-fit border-none ${
                errors.image && touched.image ? "input-error" : ""
              }`}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="title">Title</Label>
            <Textarea
              id="title"
              placeholder="Wrtie a title for your course"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className={`resize-none ${
                errors.title && touched.title ? "input-error" : ""
              }`}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Wrtie a description for your course"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className={`h-32 resize-none ${
                errors.description && touched.description ? "input-error" : ""
              }`}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="level">Level</Label>
            <Input
              id="level"
              type="text"
              placeholder="Beginner, Intermediate, Advanced"
              value={values.level}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className={`${
                errors.level && touched.level ? "input-error" : ""
              }`}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="level">Level</Label>
            <Input
              id="level"
              type="text"
              placeholder="Beginner, Intermediate, Advanced, etc."
              value={values.level}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className={`${
                errors.level && touched.level ? "input-error" : ""
              }`}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="duration">Duration</Label>
            <Input
              id="duration"
              type="text"
              placeholder="12 hours, 30 minutes, 1 hour 30 minutes etc."
              value={values.duration}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className={`${
                errors.duration && touched.duration ? "input-error" : ""
              }`}bg-red-300 
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="topic">Topic</Label>
            <Input
              id="topic"
              type="text"
              placeholder="Angular, Smart Farming, Biotechnology etc."
              value={values.topic}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className={`${
                errors.topic && touched.topic ? "input-error" : ""
              }`}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="audio">Audio</Label>
            <Input
              id="audio"
              type="text"
              placeholder="English, Spanish, Hindi, German etc."
              value={values.audio}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className={`${
                errors.audio && touched.audio ? "input-error" : ""
              }`}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="subtitles">Subtitles</Label>
            <Input
              id="subtitles"
              type="text"
              placeholder="English, Spanish, Hindi, German etc."
              value={values.subtitles}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className={`${
                errors.subtitles && touched.subtitles ? "input-error" : ""
              }`}
            />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-4 w-4 animate-spin"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
            Done
          </Button>
        </div>
      </form>
    </div>
  );
}
