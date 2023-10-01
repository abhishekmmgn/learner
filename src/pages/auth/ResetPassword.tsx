import ResetPasswordForm from "../../forms/reset-password-form";
import AuthLeftPane from "../../components/AuthLeftPane";

export default function ResetPassword() {
  return (
    <>
      <div className="container relative h-screen mt-10 flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 md:mt-0">
        <AuthLeftPane />
        <div className="mx-auto flex w-full flex-col justify-center space-y-8 sm:w-[350px]">
          <div className="flex flex-col space-y-1 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Reset Password</h1>
            <p className="text-sm text-muted-foreground">
              Enter a strong new password
            </p>
          </div>
          <ResetPasswordForm />
        </div>
      </div>
    </>
  );
}
