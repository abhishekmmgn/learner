import { Link } from "react-router-dom";

export default function Auth() {
  return (
    <div className="h-full">
      <div className="border-2 mx-auto relative bg-white-secondary p-4 max-h-[800px] w-full flex flex-col items-center justify-between sm:justify-center">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl">
          Learner
        </h1>
        <p className="mt-2 mb-10 text-center text-lg font-medium sm:text-lg+ md:text-xl">
          The best way to learn anything you want.
        </p>
      </div>
      <div className="w-full flex flex-col items-center gap-3">
        <Link to="/register">
          <button className="btn">Create Account</button>
        </Link>
        <Link to="/login">
          <button className="btn-outline">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
