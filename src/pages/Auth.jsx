import { Link } from "react-router-dom";

export default function Auth() {
  return (
    <div className="flex flex-col items-center justify-between px-4 h-full w-full bg-background-light sm:justify-center sm:space-y-20">
      <div>
        <h1 className="mt-16 text-4xl font-semibold md:text-5xl lg:text-6xl sm:text-center sm:mt-0">
          Learner
        </h1>
        <p className="text-lg text-black-secondary font-medium md:text-lg+ lg:text-xl sm:text-center ">
          The best place to learn anything you want to.
        </p>
      </div>
      <div className="mb-16 flex flex-col space-y-4 w-full sm:mb-0">
        <Link to="/register">
          <button className="btn mx-auto">Create Account</button>
        </Link>
        <Link to="/login">
          <button className="btn-outline mx-auto">
            Log in to Existing Account
          </button>
        </Link>
      </div>
    </div>
  );
}
