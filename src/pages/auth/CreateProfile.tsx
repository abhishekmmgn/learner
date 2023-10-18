import CreateProfileForm from "../../forms/CreateProfileForm";
import AuthLeftPane from "../../components/AuthLeftPane";
import { db } from "../../firebase-cofig";
import { getDoc, doc } from "firebase/firestore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
import GeneralSkeleton from "../../components/skeletons/GeneralSkeleton";

export default function CreateProfile() {
  const { user, setIsInstructor, loading } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          if (userData?.isInstructor) {
            localStorage.setItem("isInstructor", `true`);
          }
          setIsInstructor(userData?.isInstructor);

          navigate("/");
        }
      } catch (error) {
        console.log(error.code);
      }
    };
    getUserData();
  }, []);

  if (loading) {
    return (
      <div>
        <GeneralSkeleton />
      </div>
    );
  } else {
    return (
      <div className="container relative bg-background h-screen pt-10 flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 md:pt-0">
        <AuthLeftPane />
        <div className="mx-auto flex w-full flex-col justify-center space-y-8 sm:w-[350px]">
          <div className="flex flex-col space-y-1 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create Profile
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your details below to create your account
            </p>
          </div>
          <CreateProfileForm />
        </div>
      </div>
    );
  }
}
