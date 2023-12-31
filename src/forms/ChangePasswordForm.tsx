import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth } from "../firebase-cofig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const passwordRules: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const initialValues = {
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be minimum 8 characters")
    .max(20, "Password must be less than 20 characters")
    .matches(passwordRules, {
      message: "Please create a stronger password",
    })
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export default function ChangePasswordForm() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState<boolean>(false);
  const user = auth.currentUser;

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
        const user = firebase.auth().currentUser;
        if (user) {
          await user.updatePassword(values.password);
          setSuccess(!success);
          toast.success("Password updated successfully");
        } else {
          toast.error("You must be logged in to update your password.");
        }
      } catch (error) {
        setError(error.message);
        toast.error("Something went wrong");
      }

      actions.resetForm();

      if (success) {
        setTimeout(() => {
          navigate("/settings");
        }, 1000);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-3">
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect="off"
            disabled={isSubmitting}
          />{" "}
          {errors.password && touched.password && (
            <p className="text-destructive text-sm">{errors.password}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect="off"
            disabled={isSubmitting}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="text-destructive text-sm">{errors.confirmPassword}</p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting} className="mt-1">
          {isSubmitting && (
            <AiOutlineLoading3Quarters className="mr-2 h-4 w-4 animate-spin" />
          )}
          Done
        </Button>
      </div>
    </form>
  );
}
