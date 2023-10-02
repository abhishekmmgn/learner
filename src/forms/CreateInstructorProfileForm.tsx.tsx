import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { useFormik } from "formik";
import * as Yup from "yup";

const onSubmit = async (values, actions) => {
  console.log("Hi, Mom!");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const initialValues = {
  photo: "",
  name: "",
  bio: "",
};

const validationSchema = Yup.object({
  photo: Yup.string()
    .min(3, "Something went wrong with photo")
    .required("Required"),
  name: Yup.string().min(3, "Please enter a valid name").required("Required"),
  bio: Yup.string()
    .min(10, "Bio should be more than 10 characters")
    .max(128, "Bio should be less than 128 characters")
    .required("Required"),
});

export default function CreateInstructorProfileForm() {
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
      <form onSubmit={handleSubmit}>
        <div className="grid gap-3">
          <div className="flex flex-col items-center justify-center gap-1">
            <Avatar className="w-24 h-24">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <Input
              id="photo"
              type="file"
              value={values.photo}
              onChange={handleChange}
              onBlur={handleBlur}
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isSubmitting}
              className={`border-0 w-fit ${
                errors.photo && touched.photo ? "input-error" : ""
              }`}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isSubmitting}
              className={errors.name && touched.name ? "input-error" : ""}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="name">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Write your bio"
              value={values.bio}
              onChange={handleChange}
              onBlur={handleBlur}
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isSubmitting}
              className={`h-32 resize-none ${
                errors.bio && touched.bio ? "input-error" : ""
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
