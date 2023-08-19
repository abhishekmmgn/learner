import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="fixed z-50 backdrop-filter backdrop-blur-lg bg-opacity-90 bg-background-light top-0 inset-x-0 px-4 h-[52px] w-full flex items-center justify-between md:h-14 md:px-6">
      <h1 className="text-xl font-medium md:text-2xl">Title</h1>
      <Link to='/profile'>
        <img
          src="https://www.picsum.photos/200/300"
          alt="Profile Photo"
          className="bg-gray-light-700 border border-gray-light-500 h-7 w-7 rounded-full md:h-8 md:w-8"
        />
      </Link>
    </div>
  );
}
