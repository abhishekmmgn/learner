import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useFormik } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { auth } from "../firebase-cofig";
import {
  connectAuthEmulator,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from "firebase/auth";
import { useState } from "react";

const initialValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Please enter a valid email").required("Required"),
});

export default function ForgotPasswordForm() {
  const [success, setSuccess] = useState<boolean>(false);

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
        await sendPasswordResetEmail(auth, values.email);
        setSuccess(!success);
        toast.success("Password reset link sent successfully. Check your email.");
      } catch (error) {
        toast.error("Something went wrong")
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
