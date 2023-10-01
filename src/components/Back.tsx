export default function Back() {
  return (
    <div
      className="sticky z-50 backdrop-filter bg-background-light-primary backdrop-blur-lg bg-opacity-90 bg-background-light top-0 inset-x-0 px-4 h-[52px] w-full flex items-center justify-between md:hidden dark:bg-background-dark-primary"
      onClick={() => window.history.back()}
    >
      <div className="flex items-center hover:text-gray-700 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-lg md:text-lg+ dark:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <h1 className="md:text-base+ dark:text-white">Back</h1>
      </div>
    </div>
  );
}
