import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Switch } from "../components/ui/switch";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth, db } from "../firebase-cofig";
import { updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthProvider";

const initialValues = {
  name: "",
  bio: "",
  isInstructor: false,
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Please enter a valid name")
    .max(20, "Please enter a name in short")
    .required("Required"),
  bio: Yup.string()
    .min(20, "Bio should be minimum of 20 characters")
    .max(256, "Bio should not exceed 256 characters")
    .optional(),
  isInstructor: Yup.boolean().optional(),
});

export default function CreateProfileForm() {
  const navigate = useNavigate();
  const { user, profileId, setProfileId, setIsInstructor } = useAuthContext();

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

      actions.resetForm();

      if (!user.displayName) {
        await updateProfile(auth.currentUser, {
          displayName: values.name,
        });
      }

      const profile = {
        bio: values.bio,
        isInstructor: values.isInstructor,
        uid: user.uid,
      };

      const docRef = await addDoc(collection(db, "users"), profile);

      localStorage.setItem("profileId", docRef.id);
      setProfileId(docRef.id);

      setIsInstructor(
        localStorage.setItem("isInstructor", `${values.isInstructor}`)
      );

      if (profileId) {
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
          />
          {errors.name && touched.name && (
            <p className="text-destructive text-sm">{errors.name}</p>
          )}
        </div>
        {values.isInstructor && (
          <div className="grid gap-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Type your bio here."
              value={values.bio}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              className="max-h-32"
            />
            {errors.bio && touched.bio && (
              <p className="text-destructive text-sm">{errors.bio}</p>
            )}
          </div>
        )}
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="isInstructor">Instructor</Label>
          <Switch
            id="isInstructor"
            checked={values.isInstructor}
            onCheckedChange={(checked) => {
              handleChange({
                target: { id: "isInstructor", value: checked },
              });
            }}
          />
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
