import {
  HomeIcon,
  Pencil1Icon,
  GearIcon,
  MagnifyingGlassIcon,
  BookmarkIcon,
} from "@radix-ui/react-icons";
import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthProvider";


export default function Sidebar() {
  const location = useLocation();
  const { isInstructor } = useAuthContext();

  return (
    <div className="z-50 hidden fixed inset-y-0 h-full border-r bg-background backdrop-filter backdrop-blur-xl bg-opacity-90 py-2 px-3 w-[210px] lg:w-[232px] xl:w-[248px] md:flex flex-col gap-2">
      <h1 className="mt-2 h-11 text-xl pl-2 pt-1 lg:pt-0 font-medium w-full">
        Learner
      </h1>
      <Link
        to="/"
        className={`pl-3 rounded-lg h-9 w-full flex flex-row items-center justify-start gap-2 group hover:bg-secondary ${
          location.pathname == "/" && "bg-secondary text-primary"
        }`}
      >
        <HomeIcon className="w-5 h-5" />
        <p className="text-black-tertiary">{`${isInstructor? "Courses" : "Discover"}`}</p>
      </Link>
      {isInstructor ? (
        <>
          <Link
            to="/new"
            className={`pl-3 rounded-lg h-9 w-full flex flex-row items-center justify-start gap-2 group hover:bg-secondary ${
              location.pathname == "/new" && "bg-secondary text-primary"
            }`}
          >
            <Pencil1Icon className="w-5 h-5" />

            <p className="text-black-tertiary">New Course</p>
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/library"
            className={`pl-3 rounded-lg h-9 w-full flex flex-row items-center justify-start gap-2 group hover:bg-secondary ${
              location.pathname == "/library" && "bg-secondary text-primary"
            }`}
          >
            <BookmarkIcon className="w-5 h-5" />
            <p className="text-black-tertiary">Library</p>
          </Link>

          <Link
            to="/search"
            className={`pl-3 rounded-lg h-9 w-full flex flex-row items-center justify-start gap-2 group hover:bg-secondary ${
              location.pathname.includes("/search") &&
              "bg-secondary text-primary"
            }`}
          >
            <MagnifyingGlassIcon className="w-5 h-5" />
            <p className="text-black-tertiary">Search</p>
          </Link>
        </>
      )}
      <Link
        to="/settings"
        className={`pl-3 rounded-lg h-9 w-full flex flex-row items-center justify-start gap-2 group hover:bg-secondary ${
          location.pathname == "/settings" && "bg-secondary text-primary"
        }`}
      >
        <GearIcon className="w-5 h-5" />
        <p className="text-black-tertiary">Settings</p>
      </Link>
    </div>
  );
}
