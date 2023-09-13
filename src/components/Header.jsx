import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="fixed z-50 flex items-center justify-start bg-background-light-primary backdrop-filter backdrop-blur-xl bg-opacity-90 top-0 inset-x-0 md:left-[210px] lg:left-[232px] xl:left-[248px] h-[52px] w-full mx-auto md:border-b md:border-b-gray-light-400 md:justify-start dark:bg-background-dark-primary dark:md:border-b-gray-dark-600">
      <Link to="/">
        <h1 className="md:hidden text-xl font-medium w-full px-4 md:w-[180px] lg:w-[204px] xl:w-[232px] lg:text-2xl">
          Learner
        </h1>
      </Link>
    </div>
  );
}
