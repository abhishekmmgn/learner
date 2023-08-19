import { GoTelescope } from "react-icons/go";
import { BiSearch, BiLibrary, BiBadgeCheck } from "react-icons/bi";
import useDetectKeyboardOpen from "use-detect-keyboard-open";
import { Link } from "react-router-dom";

export default function TabBar() {
  const isKeyboardOpen = useDetectKeyboardOpen();
  return (
    <div
      className={`backdrop-filter backdrop-blur-lg bg-opacity-90 fixed z-50 inset-x-0 bottom-0 w-full bg-background-light h-[52px] pb-1 flex items-center ${
        isKeyboardOpen && "hidden"
      } md:hidden`}
    >
      <div className="w-1/4 h-full px-5 sm:px-12">
        <Link
          to="/"
          className="h-full flex flex-col items-center justify-end group"
        >
          <GoTelescope className="text-xl text-black-secondary group-hover:text-pink-light" />
          <p className="text-sm text-black-secondary group-hover:text-pink-light">
            Explore
          </p>
        </Link>
      </div>
      <div className="w-1/4 h-full px-5 sm:px-12">
        <Link
          to="/library"
          className="h-full flex flex-col items-center justify-end group"
        >
          <BiLibrary className="text-xl text-black-secondary group-hover:text-pink-light" />
          <p className="text-sm text-black-secondary group-hover:text-pink-light">
            Library
          </p>
        </Link>
      </div>
      <div className="w-1/4 h-full px-5 sm:px-12">
        <Link
          to="/search"
          className="h-full flex flex-col items-center justify-end group"
        >
          <BiSearch className="text-xl text-black-secondary group-hover:text-pink-light" />
          <p className="text-sm text-black-secondary group-hover:text-pink-light">
            Search
          </p>
        </Link>
      </div>
      <div className="w-1/4 h-full px-5 sm:px-12">
        <Link
          to="/subscription"
          className="h-full flex flex-col items-center justify-end group"
        >
          <BiBadgeCheck className="text-xl text-black-secondary group-hover:text-pink-light" />
          <p className="text-sm text-black-secondary group-hover:text-pink-light">
            Pro
          </p>
        </Link>
      </div>
    </div>
  );
}
