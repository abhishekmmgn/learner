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
    <div className="z-40 hidden fixed top-[52px] bottom-0 h-full border-r bg-background-light-primary backdrop-filter backdrop-blur-xl bg-opacity-90 border-r-gray-light-400 p-2 w-[180px] lg:w-[204px] xl:w-[232px] md:flex flex-col space-y-2 dark:border-r-gray-dark-600 dark:bg-background-dark-primary">
      <Link
        to="/"
        className="pl-4 rounded-lg h-10 w-full flex flex-row items-center justify-start gap-2 group hover:bg-pink-light/20 dark:hover:bg-pink-dark/20"
      >
        <GoTelescope className="text-lg text-black-tertiary dark:text-white-tertiary" />
        <p className="text-lg text-black-tertiary dark:text-white-tertiary">Explore</p>
      </Link>

      <Link
        to="/library"
        className="pl-4 rounded-lg h-10 w-full flex flex-row items-center justify-start gap-2 group hover:bg-pink-light/20 dark:hover:bg-pink-dark/20"
      >
        <GoBook className="text-lg text-black-tertiary dark:text-white-tertiary" />
        <p className="text-lg text-black-tertiary dark:text-white-tertiary">Library</p>
      </Link>

      <Link
        to="/search"
        className="pl-4 rounded-lg h-10 w-full flex flex-row items-center justify-start gap-2 group hover:bg-pink-light/20 dark:hover:bg-pink-dark/20"
      >
        <GoSearch className="text-lg text-black-tertiary dark:text-white-tertiary" />
        <p className="text-lg text-black-tertiary dark:text-white-tertiary">Search</p>
      </Link>

      <Link
        to="/subscription"
        className="pl-4 rounded-lg h-10 w-full flex flex-row items-center justify-start gap-2 group hover:bg-pink-light/20 dark:hover:bg-pink-dark/20"
      >
        <GoFlame className="text-lg text-black-tertiary dark:text-white-tertiary" />
        <p className="text-lg text-black-tertiary dark:text-white-tertiary">Pro</p>
      </Link>

      <Link
        to="/settings"
        className="pl-4 rounded-lg h-10 w-full flex flex-row items-center justify-start gap-2 group hover:bg-pink-light/20 dark:hover:bg-pink-dark/20"
      >
        <GoTools className="text-lg text-black-tertiary dark:text-white-tertiary" />
        <p className="text-lg text-black-tertiary dark:text-white-tertiary">Settings</p>
      </Link>
    </div>
  );
}
