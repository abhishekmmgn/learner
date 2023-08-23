import { Link } from "react-router-dom";

export default function Header() {

  return (
    <div className="mx-auto fixed z-50 flex items-center backdrop-filter backdrop-blur-lg bg-opacity-90 bg-background-light top-0 inset-x-0 h-[52px] w-full max-w-[1536px] md:bg-opacity-100">
      <div className="flex items-center justify-between h-full w-full px-4 mx-auto md:px-0">
        <h1 className="text-xl font-medium md:text-2xl md:w-[220px] xl:w-[232px] md:pl-4 md:bg-gray-light-800 md:border-r border-r-gray-light-500 md:pt-4 md:h-full 2xl:bg-transparent 2xl:border-none">Title</h1>
        <Link to="/profile">
          <img
            src="https://www.picsum.photos/200/300"
            alt="Profile Photo"
            className="bg-gray-light-700 border border-gray-light-500 h-7 w-7 rounded-full md:hidden"
          />
        </Link>
      </div>
    </div>
  );
}
