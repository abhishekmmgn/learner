import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import AuthLeftPane from "../../components/AuthLeftPane";

export default function Auth() {
  return (
    <>
      <div className="container relative bg-background h-screen pt-10 flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 md:pt-0">
        <AuthLeftPane />
        <div className="mx-auto flex w-full text-center flex-col justify-center space-y-8 sm:w-[350px]">
          <h1 className="text-2xl font-semibold tracking-tight">
            Continue with Authentication
          </h1>
          <div className="mb-8 flex flex-col space-y-3 w-full max-w-md sm:max-w-sm">
            <Link to="/register">
              <Button>Create Account</Button>
            </Link>
            <Link to="/login">
              <Button variant="secondary">Log in to Existing Account</Button>
            </Link>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button variant="outline" type="button" className="gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Google
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

<div className="flex flex-col items-center justify-between text-center px-4 h-full w-full sm:justify-center sm:space-y-20">
  <div>
    <h1 className="mt-16 text-3xl font-medium md:text-4xl sm:mt-0">Learner</h1>
    <p className="text-lg text-tertiary-foreground font-medium md:text-lg+">
      The best place to learn anything you want to.
    </p>
  </div>
</div>;
