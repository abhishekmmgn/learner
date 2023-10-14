import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useFormik } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import * as Yup from "yup";
import { auth } from "../firebase-cofig";
import { useState } from "react";

const initialValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Please enter a valid email").required("Required"),
});

export default function ForgotPasswordForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

      try {
        await auth.sendPasswordResetEmail(values.email);
        setSuccess("Password reset link sent successfully. Check your email.");
      } catch (error) {
        setError(error.message);
      }

      actions.resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <div className="grid gap-2">
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
          />
          {errors.email && touched.email && (
            <p className="text-destructive text-sm">{errors.email}</p>
          )}
        </div>

        {error && <p className="text-destructive text-sm">{error}</p>}

        {success && <p className="text-[#0081ff] text-sm">{success}</p>}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && (
            <AiOutlineLoading3Quarters className="mr-2 h-4 w-4 animate-spin" />
          )}
          Reset Password
        </Button>
      </div>
    </form>
  );
}
