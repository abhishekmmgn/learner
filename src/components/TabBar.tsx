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
  const { isInstructor } = useAuthContext() as { isInstructor: boolean };

  const defaultTabs = [
    {
      name: "Discover",
      path: "/",
      icon: <HomeIcon className="w-5 h-5" />,
    },
    {
      name: "Library",
      path: "/library",
      icon: <BookmarkIcon className="w-5 h-5" />,
    },
    {
      name: "Search",
      path: "/search",
      icon: <MagnifyingGlassIcon className="w-5 h-5" />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <GearIcon className="w-5 h-5" />,
    },
  ];
  const instructorTabs = [
    {
      name: "Courses",
      path: "/",
      icon: <HomeIcon className="w-5 h-5" />,
    },
    {
      name: "New Course",
      path: "/new",
      icon: <Pencil1Icon className="w-5 h-5" />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <GearIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div
      className={`fixed px-4 border-t bg-tertiary backdrop-filter backdrop-blur-xl bg-opacity-90 z-[45] inset-x-0 bottom-0 w-full h-[52px] pb-1 flex items-center md:hidden`}
    >
      {isInstructor
        ? instructorTabs.map((tab, index) => (
            <div
              className="w-1/3 h-full flex items-center justify-center"
              key={index}
            >
              <Link
                to={tab.path}
                className={`h-full w-[40%] flex items-center justify-center group hover:bg-secondary ${
                  location.pathname === tab.path ||
                  location.pathname.startsWith(`${tab.path}/`)
                    ? "text-primary"
                    : "hover:bg-secondary"
                }`}
                key={tab.name}
              >
                {tab.icon}
              </Link>
            </div>
          ))
        : defaultTabs.map((tab, index) => (
            <div
              className="w-1/3 h-full flex items-center justify-center"
              key={index}
            >
              <Link
                to={tab.path}
                className={`h-full w-[40%] flex items-center justify-center group hover:bg-secondary ${
                  location.pathname === tab.path ||
                  location.pathname.startsWith(`${tab.path}/`)
                    ? "text-primary"
                    : "hover:bg-secondary"
                }`}
                key={tab.name}
              >
                {tab.icon}
              </Link>
            </div>
          ))}
    </div>
  );
}
