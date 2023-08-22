import { GoTelescope } from "react-icons/go";
import { BiSearch, BiLibrary, BiBadgeCheck } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="z-40 hidden fixed top-14 bottom-0 left-0 h-full backdrop-filter backdrop-blur-lg bg-opacity-90 border-r border-r-gray-light-500 bg-background-light pt-4 px-4 w-[200px] md:flex flex-col space-y-2 lg:w-[232px] xl:W-[248px] 2xl:left-auto">
      <Link
        to="/"
        className="pl-4 rounded-lg h-10 w-full flex flex-row items-center justify-start gap-4 group hover:bg-pink-light/20"
      >
        <GoTelescope className="text-2xl text-black-secondary " />
        <p className="text-lg font-medium text-black-secondary">Explore</p>
      </Link>

      <Link
        to="/search"
        className="pl-4 rounded-lg h-10 w-full flex flex-row items-center justify-start gap-4 group hover:bg-pink-light/20"
      >
        <BiSearch className="text-2xl text-black-secondary" />
        <p className="text-lg font-medium text-black-secondary">Search</p>
      </Link>
      
      <Link
        to="/library"
        className="pl-4 rounded-lg h-10 w-full flex flex-row items-center justify-start gap-4 group hover:bg-pink-light/20"
      >
        <BiLibrary className="text-2xl text-black-secondary" />
        <p className="text-lg font-medium text-black-secondary">Library</p>
      </Link>
      
      <Link
        to="/subscription"
        className="pl-4 rounded-lg h-10 w-full flex flex-row items-center justify-start gap-4 group hover:bg-pink-light/20"
      >
        <BiBadgeCheck className="text-2xl text-black-secondary" />
        <p className="text-lg font-medium text-black-secondary">Pro</p>
      </Link>
    </div>
  );
}
