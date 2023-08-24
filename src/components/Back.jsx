import { GoChevronLeft } from "react-icons/go";

export default function Back() {
  return (
    <div
      className="sticky z-50 backdrop-filter backdrop-blur-lg bg-opacity-70 bg-background-light top-0 inset-x-0 px-4 h-[52px] w-full flex items-center justify-between"
      onClick={() => window.history.back()}
      >
      <div className="flex items-center hover:text-gray-700 cursor-pointer">
        <GoChevronLeft className="text-lg md:text-lg+" />
        <h1 className="md:text-base+">Back</h1>
      </div>
    </div>
  );
}
