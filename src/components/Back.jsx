import { GoChevronLeft } from "react-icons/go";

export default function Back() {
  return (
    <div
      className=" backdrop-filter backdrop-blur-lg bg-opacity-90 w-full bg-background-light sticky top-0 left-0 right-0 px-4 h-11 flex items-center md:h-16 md:px-6"
      onClick={() => window.history.back()}
      >
      <div className="flex items-center hover:text-gray-700 cursor-pointer">
        <GoChevronLeft className="text-lg sm:text-lg+ md:text-xl" />
        <h1 className="sm:text-base+ md:text-lg">Back</h1>
      </div>
    </div>
  );
}
