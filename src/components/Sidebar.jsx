import {
  GoTelescope,
  GoSearch,
  GoBook,
  GoFlame,
  GoTools,
} from "react-icons/go";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="z-40 hidden fixed top-0 bottom-0 h-full border-r bg-[#f0f0f0] backdrop-filter backdrop-blur-xl bg-opacity-90 border-r-gray-light-400 py-2 px-6 w-[210px] lg:w-[232px] xl:w-[248px] md:flex flex-col space-y-2 dark:border-r-gray-dark-600 dark:bg-background-dark-primary">
        <h1 className="mt-2 h-11 text-xl font-medium w-full md:w-[180px] lg:w-[204px] xl:w-[232px] lg:text-2xl">
          Learner
        </h1>
      <Link
        to="/"
        className="pl-3 rounded-lg h-9 w-full flex flex-row items-center justify-start gap-2 group hover:bg-pink-light/20 dark:hover:bg-pink-dark/20"
      >
        <GoTelescope className="text-lg text-black-tertiary dark:text-white-tertiary" />
        <p className="text-lg text-black-tertiary dark:text-white-tertiary">
          Explore
        </p>
      </Link>

      <Link
        to="/library"
        className="pl-3 rounded-lg h-9 w-full flex flex-row items-center justify-start gap-2 group hover:bg-pink-light/20 dark:hover:bg-pink-dark/20"
      >
        <GoBook className="text-lg text-black-tertiary dark:text-white-tertiary" />
        <p className="text-lg text-black-tertiary dark:text-white-tertiary">
          Library
        </p>
      </Link>

      <Link
        to="/search"
        className="pl-3 rounded-lg h-9 w-full flex flex-row items-center justify-start gap-2 group hover:bg-pink-light/20 dark:hover:bg-pink-dark/20"
      >
        <GoSearch className="text-lg text-black-tertiary dark:text-white-tertiary" />
        <p className="text-lg text-black-tertiary dark:text-white-tertiary">
          Search
        </p>
      </Link>

      <Link
        to="/subscription"
        className="pl-3 rounded-lg h-9 w-full flex flex-row items-center justify-start gap-2 group hover:bg-pink-light/20 dark:hover:bg-pink-dark/20"
      >
        <GoFlame className="text-lg text-black-tertiary dark:text-white-tertiary" />
        <p className="text-lg text-black-tertiary dark:text-white-tertiary">
          Pro
        </p>
      </Link>

      <Link
        to="/settings"
        className="pl-3 rounded-lg h-9 w-full flex flex-row items-center justify-start gap-2 group hover:bg-pink-light/20 dark:hover:bg-pink-dark/20"
      >
        <GoTools className="text-lg text-black-tertiary dark:text-white-tertiary" />
        <p className="text-lg text-black-tertiary dark:text-white-tertiary">
          Settings
        </p>
      </Link>
    </div>
  );
}
