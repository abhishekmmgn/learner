import ForgotPasswordForm from "../../forms/ForgotPasswordForm";
import AuthLeftPane from "../../components/AuthLeftPane";

export default function ForgotPassword() {
  return (
    <>
      <div className="container relative h-screen bg-background pt-10 flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 md:pt-0">
        <AuthLeftPane />
        <div className="mx-auto flex w-full flex-col justify-center space-y-8 sm:w-[350px]">
          <div className="flex flex-col space-y-1 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Forgot Password</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to reset your password
            </p>
          </div>
          <ForgotPasswordForm />
        </div>
      </div>
    </>
  );
}
