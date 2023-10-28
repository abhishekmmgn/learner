import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="fixed z-50 flex items-center justify-start backdrop-filter bg-secondary backdrop-blur-xl bg-opacity-90 top-0 inset-x-0 md:left-[210px] lg:left-[232px] xl:left-[248px] h-[52px] w-full mx-auto md:border-b">
      <Link to="/">
        <h1 className="md:hidden text-xl font-medium w-full px-4 text-primary">
          Learner
        </h1>
      </Link>
    </div>
  );
}
