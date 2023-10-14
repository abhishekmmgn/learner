import {
  HomeIcon,
  Pencil1Icon,
  GearIcon,
  MagnifyingGlassIcon,
  BookmarkIcon,
} from "@radix-ui/react-icons";
import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthProvider";


export default function TabBar() {
  const location = useLocation();
  const { isInstructor } = useAuthContext();
  return (
    <div
      className={`fixed px-4 border-t bg-tertiary backdrop-filter backdrop-blur-xl bg-opacity-90 z-50 inset-x-0 bottom-0 w-full h-[52px] pb-1 flex items-center md:hidden`}
    >
      <div className="w-1/3 h-full flex items-center justify-center">
        <Link
          to="/"
          className="h-full w-[40%] flex items-center justify-center group hover:bg-secondary"
        >
          <HomeIcon
            className={`w-6 h-6 ${
              location.pathname == "/" && "text-primary"
            }`}
          />
        </Link>
      </div>
      {isInstructor ? (
        <>
          <div className="w-1/3 h-full flex items-center justify-center">
            <Link
              to="/new"
              className="h-full w-[40%] flex items-center justify-center group hover:bg-secondary"
            >
              <Pencil1Icon
                className={`w-6 h-6 ${
                  location.pathname == "/new" && "text-primary"
                }`}
              />
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="w-1/4 h-full flex items-center justify-center">
            <Link
              to="/library"
              className="h-full w-[40%] flex items-center justify-center group hover:bg-secondary"
            >
              <BookmarkIcon
                className={`w-6 h-6 ${
                  location.pathname == "/library" && "text-primary"
                }`}
              />
            </Link>
          </div>

          <div className="w-1/4 h-full flex items-center justify-center">
            <Link
              to="/search"
              className="h-full w-[40%] flex items-center justify-center group hover:bg-secondary"
            >
              <MagnifyingGlassIcon
                className={`w-6 h-6 ${
                  location.pathname.includes("/search") && "text-primary"
                }`}
              />
            </Link>
          </div>
        </>
      )}
      <div className="w-1/3 h-full flex items-center justify-center">
        <Link
          to="/settings"
          className="h-full w-[40%] flex items-center justify-center group hover:bg-secondary"
        >
          <GearIcon
            className={`w-6 h-6 ${
              location.pathname == "/settings" && "text-primary"
            }`}
          />
        </Link>
      </div>
    </div>
  );
}
