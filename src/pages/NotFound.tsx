import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function CreateProfile() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  });

  return (
    <div className="flex flex-col gap-4 items-center justify-center px-4 md:px-8 h-full w-full md:gap-8">
      <div>
        <h1 className="mt-16 text-center text-2xl font-semibold md:text-3xl">
          Oops! You came to wrong page.
        </h1>
        <p className="text-center font-medium text-secondary-foreground text-base lg:text-lg">
          Nothing here.
        </p>
      </div>
    </div>
  );
}
