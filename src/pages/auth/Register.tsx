import RegistrationForm from "../../forms/RegisterForm";
import AuthLeftPane from "../../components/AuthLeftPane";
import { buttonVariants } from "../../components/ui/button";
import { Link } from "react-router-dom";
import GeneralSkeleton from "../../components/skeletons/GeneralSkeleton";
import { useAuthContext } from "../../contexts/AuthProvider";

export default function RegisterPage() {
  const { loading } = useAuthContext();

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
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <div className="space-y-4">
            <RegistrationForm />
            <Link to="/login" className={buttonVariants({ variant: "ghost" })}>
              Login
            </Link>
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              to="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    );
  }
}
