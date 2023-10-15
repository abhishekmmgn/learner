import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth, db } from "../firebase-cofig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthProvider";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Please enter a valid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be minimum 8 characters")
    .max(20, "Password must be at most 20 characters")
    .required("Required"),
});

export default function LoginForm() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const getUserData = async () => {
    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
    } catch (error) {
      console.log(error.code);
    }
    // Put in id here
  };

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

      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setError(errorMessage);
        });

      getUserData();

      actions.resetForm();

      if (user) {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-3">
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
          />
          {errors.password && touched.password && (
            <p className="text-destructive text-sm">{errors.password}</p>
          )}
        </div>

        {error && <p className="text-destructive text-sm">{error}</p>}

        <Button type="submit" disabled={isSubmitting} className="mt-1">
          {isSubmitting && (
            <AiOutlineLoading3Quarters className="mr-2 h-4 w-4 animate-spin" />
          )}
          Sign In
        </Button>
      </div>
    </form>
  );
}
