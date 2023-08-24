import {
  GoTelescope,
  GoSearch,
  GoBook,
  GoFlame,
  GoTools,
} from "react-icons/go";
import useDetectKeyboardOpen from "use-detect-keyboard-open";
import { Link } from "react-router-dom";

export default function TabBar() {
  const isKeyboardOpen = useDetectKeyboardOpen();
  return (
    <div
      className={`px-4 border-b border-b-gray-light-400 backdrop-filter backdrop-blur-xl bg-opacity-70 fixed z-50 inset-x-0 top-[52px] w-full h-10 bg-background-light pb-1 flex items-center ${
        isKeyboardOpen && "hidden"
      } md:hidden`}
    >
      <div className="w-1/5 h-full flex items-center justify-center">
        <Link to="/" className="h-full w-[60%] flex items-center justify-center group">
          <GoTelescope className="text-lg+ text-black-tertiary group-hover:text-pink-light" />
        </Link>
      </div>

      <div className="w-1/5 h-full flex items-center justify-center">
        <Link to="/library" className="h-full w-[60%] flex items-center justify-center group">
          <GoBook className="text-lg+ text-black-tertiary group-hover:text-pink-light" />
        </Link>
      </div>

      <div className="w-1/5 h-full flex items-center justify-center">
        <Link to="/search" className="h-full w-[60%] flex items-center justify-center group">
          <GoSearch className="text-lg+ text-black-tertiary group-hover:text-pink-light" />
        </Link>
      </div>

      <div className="w-1/5 h-full flex items-center justify-center">
        <Link to="/subscription" className="h-full w-[60%] flex items-center justify-center group">
          <GoFlame className="text-lg+ text-black-tertiary group-hover:text-pink-light" />
        </Link>
      </div>

      <div className="w-1/5 h-full flex items-center justify-center">
        <Link to="/settings" className="h-full w-[60%] flex items-center justify-center group">
          <GoTools className="text-lg+ text-black-tertiary group-hover:text-pink-light" />
        </Link>
      </div>
    </div>
  );
}
