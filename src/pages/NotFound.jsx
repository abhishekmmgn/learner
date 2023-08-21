import { Link } from "react-router-dom";

export default function CreateProfile() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center px-4 h-full w-full bg-background-light md:gap-5">
      <div>
        <h1 className="mt-16 text-center text-2xl font-medium md:text-4xl lg:text-5xl">
          Oops! You came to wrong page.
        </h1>
        <p className="text-center text-lg font-medium text-black-secondary md:text-lg+ lg:text-xl">
          Nothing here.
        </p>
      </div>
      <Link to="/" className="w-full">
        <button className="btn-outline mx-auto">Go to Homepage</button>
      </Link>
    </div>
  );
}
