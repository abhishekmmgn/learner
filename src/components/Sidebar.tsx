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
    <div className="z-50 hidden fixed inset-y-0 h-full border-r bg-background backdrop-filter backdrop-blur-xl bg-opacity-90 py-2 px-3 w-[210px] lg:w-[232px] xl:w-[248px] md:flex flex-col gap-2">
      <h1 className="mt-2 h-11 text-xl pl-2 pt-1 lg:pt-0 font-medium w-full">
        Learner
      </h1>
      <div className="flex flex-col gap-2">
        {isInstructor
          ? instructorTabs.map((tab, index) => (
              <Link
                to={tab.path}
                className={`flex items-center gap-2 px-2 py-1 rounded-lg ${
                  location.pathname === tab.path ||
                  location.pathname.startsWith(`${tab.path}/`)
                    ? "bg-secondary text-primary"
                    : "hover:bg-secondary"
                }`}
                key={index}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </Link>
            ))
          : defaultTabs.map((tab, index) => (
              <Link
                to={tab.path}
                className={`flex items-center gap-2 px-2 py-1 rounded-lg ${
                  location.pathname === tab.path ||
                  location.pathname.startsWith(`${tab.path}/`)
                    ? "bg-secondary text-primary"
                    : "hover:bg-secondary"
                }`}
                key={index}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </Link>
            ))}
      </div>
    </div>
  );
}
