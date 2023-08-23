import { GoTelescope, GoSearch, GoBook, GoFlame, GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="z-40 hidden fixed top-[52px] bottom-0 left-0 h-full backdrop-filter backdrop-blur-lg bg-opacity-90 border-r border-r-gray-light-500 bg-background-light p-2 w-[220px] xl:w-[232px] md:flex flex-col space-y-2 md:bg-gray-light-800 2xl:left-auto 2xl:bg-transparent">
      <Link
        to="/"
        className="pl-4 rounded-lg h-10 w-full flex flex-row items-center justify-start gap-2 group hover:bg-pink-light/20"
      >
        <GoTelescope className="text-lg text-black-tertiary " />
        <p className="text-lg font-medium text-black-tertiary">Explore</p>
      </Link>
      
      <Link
        to="/library"
        className="pl-4 rounded-lg h-10 w-full flex flex-row items-center justify-start gap-2 group hover:bg-pink-light/20"
      >
        <GoBook className="text-lg text-black-tertiary" />
        <p className="text-lg font-medium text-black-tertiary">Library</p>
      </Link>
      
      <Link
        to="/search"
        className="pl-4 rounded-lg h-10 w-full flex flex-row items-center justify-start gap-2 group hover:bg-pink-light/20"
      >
        <GoSearch className="text-lg text-black-tertiary" />
        <p className="text-lg font-medium text-black-tertiary">Search</p>
      </Link>
      
      <Link
        to="/subscription"
        className="pl-4 rounded-lg h-10 w-full flex flex-row items-center justify-start gap-2 group hover:bg-pink-light/20"
      >
        <GoFlame className="text-lg text-black-tertiary" />
        <p className="text-lg font-medium text-black-tertiary">Pro</p>
      </Link>
      <Link
        to="/account"
        className="pl-4 rounded-lg h-10 w-full flex flex-row items-center justify-start gap-2 group hover:bg-pink-light/20"
      >
        <GoPerson className="text-lg text-black-tertiary" />
        <p className="text-lg font-medium text-black-tertiary">Account</p>
      </Link>
    </div>
  );
}
