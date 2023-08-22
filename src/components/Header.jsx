import { Link } from "react-router-dom";

export default function Header() {

  return (
    <div className="mx-auto fixed z-50 flex items-center backdrop-filter backdrop-blur-lg bg-opacity-90 bg-background-light top-0 inset-x-0 h-[52px] w-full md:h-14 max-w-[1536px]">
      <div className="flex items-center justify-between w-full px-4 mx-auto md:px-8">
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
