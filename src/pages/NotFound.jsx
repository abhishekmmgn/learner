import { Link } from "react-router-dom";

export default function CreateProfile() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center px-4 md:px-8 h-full w-full md:gap-5">
      <div>
        <h1 className="mt-16 text-center text-2xl font-medium md:text-4xl xl:text-5xl dark:text-white">
          Oops! You came to wrong page.
        </h1>
        <p className="text-center font-medium text-black-secondary text-base md:text-lg xl:text-lg+ dark:text-white-secondary">
          Nothing here.
        </p>
      </div>
      <Link to="/" className="w-full">
        <button className="btn-outline mx-auto">Go to Homepage</button>
      </Link>
    </div>
  );
}
