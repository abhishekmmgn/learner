import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="sticky z-50 bg-[#f2f2f2] top-0 left-0 right-0 px-4 h-[52px] max-w-full flex items-center justify-between md:h-16 md:px-6">
      <h1 className="text-xl font-medium md:text-2xl">Title</h1>
      <Link to='/profile'>
        <img
          src="https://www.picsum.photos/200/300"
          alt="Profile Photo"
          className="bg-gray-200 border border-gray-300 h-7 w-7 rounded-full md:h-9 md:w-9"
        />
      </Link>
    </div>
  );
}
