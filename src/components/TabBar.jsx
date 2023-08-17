import { GoTelescope } from "react-icons/go";
import { BiSearch, BiLibrary, BiBadgeCheck } from "react-icons/bi";
import useDetectKeyboardOpen from "use-detect-keyboard-open";
import { Link } from "react-router-dom";

export default function TabBar() {
  const isKeyboardOpen = useDetectKeyboardOpen();
  return (
    <div
      className={`fixed z-50 left-0 right-0 bottom-0 w-full bg-[#f2f2f2] h-[52px] flex items-center ${
        isKeyboardOpen ? "hidden" : ""
      } md:hidden`}
    >
      <Link
        to="/"
        className="h-full w-1/4 flex flex-col items-center justify-center"
      >
        <GoTelescope className="h-5 text-xl text-gray-600" />
        <p className="text-sm text-gray-600">Explore</p>
      </Link>
      <Link
        to="/library"
        className="h-full w-1/4 flex flex-col items-center justify-center"
      >
        <BiLibrary className="h-5 text-xl text-gray-600" />
        <p className="text-sm text-gray-600">Library</p>
      </Link>
      <Link
        to="/search"
        className="h-full w-1/4 flex flex-col items-center justify-center"
      >
        <BiSearch className="h-5 text-xl text-gray-600" />
        <p className="text-sm text-gray-600">Search</p>
      </Link>
      <Link
        to="/subscription"
        className="h-full w-1/4 flex flex-col items-center justify-center"
      >
        <BiBadgeCheck className="h-5 text-xl text-gray-600" />
        <p className="text-sm text-gray-600">Pro</p>
      </Link>
    </div>
  );
}
