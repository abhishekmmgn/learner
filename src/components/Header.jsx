import { Link } from "react-router-dom";
import { useStore } from "zustand";

export default function Header() {

  return (
    <div className="sticky z-50 flex items-center backdrop-filter backdrop-blur-lg bg-opacity-90 bg-background-light top-0 inset-x-0 h-[52px] w-full md:h-14">
      <div className="flex items-center justify-between w-full px-4 md:px-0 mx-auto md:w-[768px] lg:w-[1024px]">
        <h1 className="text-xl font-medium md:text-2xl">Title</h1>
        <Link to="/profile">
          <img
            src="https://www.picsum.photos/200/300"
            alt="Profile Photo"
            className="bg-gray-light-700 border border-gray-light-500 h-7 w-7 rounded-full md:h-8 md:w-8"
          />
        </Link>
      </div>
    </div>
  );
}
