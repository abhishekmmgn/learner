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
    <div className="z-50 hidden fixed top-0 bottom-0 h-full border-r bg-[#f0f0f0] backdrop-filter backdrop-blur-xl bg-opacity-90 border-r-gray-light-400 py-2 px-6 w-[210px] lg:w-[232px] xl:w-[248px] md:flex flex-col space-y-2 dark:border-r-gray-dark-600 dark:bg-black-secondary">
        <h1 className="mt-2 h-11 text-xl font-medium w-full md:w-[180px] lg:w-[204px] xl:w-[232px] lg:text-2xl dark:text-white-secondary/80">
          Learner
        </h1>
      <Link
        to="/"
        className="pl-3 rounded-lg h-9 w-full flex flex-row items-center justify-start gap-2 group hover:bg-gray-light-500 dark:hover:bg-gray-dark-600"
      >
        <GoTelescope className="2xl:text-base+ text-black-tertiary dark:text-gray-dark-100" />
        <p className="2xl:text-base+ text-black-tertiary dark:text-gray-dark-100">
          Explore
        </p>
      </Link>

      <Link
        to="/library"
        className="pl-3 rounded-lg h-9 w-full flex flex-row items-center justify-start gap-2 group hover:bg-gray-light-500 dark:hover:bg-gray-dark-600"
      >
        <GoBook className="2xl:text-base+ text-black-tertiary dark:text-gray-dark-100" />
        <p className="2xl:text-base+ text-black-tertiary dark:text-gray-dark-100">
          Library
        </p>
      </Link>

      <Link
        to="/search"
        className="pl-3 rounded-lg h-9 w-full flex flex-row items-center justify-start gap-2 group hover:bg-gray-light-500 dark:hover:bg-gray-dark-600"
      >
        <GoSearch className="2xl:text-base+ text-black-tertiary dark:text-gray-dark-100" />
        <p className="2xl:text-base+ text-black-tertiary dark:text-gray-dark-100">
          Search
        </p>
      </Link>

      <Link
        to="/settings"
        className="pl-3 rounded-lg h-9 w-full flex flex-row items-center justify-start gap-2 group hover:bg-gray-light-500 dark:hover:bg-gray-dark-600"
      >
        <GoTools className="2xl:text-base+ text-black-tertiary dark:text-gray-dark-100" />
        <p className="2xl:text-base+ text-black-tertiary dark:text-gray-dark-100">
          Settings
        </p>
      </Link>
    </div>
  );
}
