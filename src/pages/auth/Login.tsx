import RegistrationForm from "../../forms/LoginForm";
import { Link } from "react-router-dom";
import AuthLeftPane from "../../components/AuthLeftPane";

export default function LoginPage() {
  return (
    <>
      <div className="container relative h-screen mt-10 flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 md:mt-0">
        <AuthLeftPane />
        <div className="mx-auto flex w-full flex-col justify-center space-y-8 sm:w-[350px]">
          <div className="flex flex-col space-y-1 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to sign in to your account
            </p>
          </div>
          <RegistrationForm />
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
    </>
  );
}
