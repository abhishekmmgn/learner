import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="fixed z-50 flex items-center justify-center backdrop-filter backdrop-blur-xl bg-opacity-70 bg-background-light top-0 inset-x-0 h-[52px] w-full mx-auto md:max-w-5xl xl:max-w-7xl md:justify-start">
      <h1 className="text-xl font-medium w-full px-4 md:w-[180px] lg:w-[204px] xl:w-[232px] md:border-r md:border-r-gray-light-400 lg:text-2xl">
        Title
      </h1>
    </div>
  );
}
