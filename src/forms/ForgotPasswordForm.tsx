import { Button, buttonVariants } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useFormik } from "formik";
import * as Yup from "yup";

const onSubmit = async (values, actions) => {
  console.log("Hi, Mom!");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const initialValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Please enter a valid email").required("Required")
});

export default function ForgotPasswordForm() {
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
          <div className="grid gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isSubmitting}
              className={errors.email && touched.email ? "input-error" : ""}
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
            Reset Password
          </Button>
        </div>
      </form>
    </div>
  );
}
