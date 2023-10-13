import { ChevronLeftIcon } from "@radix-ui/react-icons";

export default function Back() {
  return (
    <div
      className="fixed z-50 backdrop-filter bg-tertiary backdrop-blur-lg bg-opacity-90 top-0 inset-x-0 px-4 h-[52px] w-full flex items-center justify-between md:hidden"
      onClick={() => window.history.back()}
    >
      <div className="flex items-center cursor-pointer">
        <ChevronLeftIcon className="w-6 h-6 text-lg md:text-lg+" />
        <h1 className="md:text-base+">Back</h1>
      </div>
    </div>
  );
}
