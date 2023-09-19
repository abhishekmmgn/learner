import {
  GoTelescope,
  GoSearch,
  GoBook,
} from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5"
import { Link } from "react-router-dom";

export default function TabBar() {
  return (
    <div
      className={`fixed px-4 border-t border-t-gray-light-400 bg-background-light-primary backdrop-filter backdrop-blur-xl bg-opacity-90 z-50 inset-x-0 bottom-0 w-full h-[52px] pb-1 flex items-center md:hidden dark:border-t-gray-dark-600 dark:bg-background-dark-primary`}
    >
      <div className="w-1/4 h-full flex items-center justify-center pb-1">
        <Link to="/" className="h-full w-[60%] flex items-center justify-center group">
          <GoTelescope title='Explore' className="text-2xl text-black-tertiary group-hover:text-pink-light dark:text-gray-dark-100 dark:group-hover:text-pink-dark" />
        </Link>
      </div>

      <div className="w-1/4 h-full flex items-center justify-center pb-1">
        <Link to="/library" className="h-full w-[60%] flex items-center justify-center group">
          <GoBook title='Library' className="text-2xl text-black-tertiary group-hover:text-pink-light dark:text-gray-dark-100 dark:group-hover:text-pink-dark" />
        </Link>
      </div>

      <div className="w-1/4 h-full flex items-center justify-center pb-1">
        <Link to="/search" className="h-full w-[60%] flex items-center justify-center group">
          <GoSearch title='Search' className="text-2xl text-black-tertiary group-hover:text-pink-light dark:text-gray-dark-100 dark:group-hover:text-pink-dark" />
        </Link>
      </div>

      <div className="w-1/4 h-full flex items-center justify-center pb-1">
        <Link to="/settings" className="h-full w-[60%] flex items-center justify-center group">
          <IoSettingsOutline title='Settings' className="text-2xl text-black-tertiary group-hover:text-pink-light dark:text-gray-dark-100 dark:group-hover:text-pink-dark" />
        </Link>
      </div>
    </div>
  );
}
