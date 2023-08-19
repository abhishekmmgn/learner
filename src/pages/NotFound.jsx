import { Link } from "react-router-dom";

export default function CreateProfile() {
  return (
    <div className="pb-4 z-10 mx-auto bg-[#f2f2f2] p-4 h-[100vh] max-w-[720px] w-full rounded-lg flex flex-col items-center justify-between">
      <div>
        <h1 className="mt-16 text-center text-2xl font-medium md:text-3xl lg:text-4xl">
          Oops! You came to wrong page.
        </h1>
        <p className="text-center text-lg font-medium text-gray-800 lg:text-lg+">Nothing here.</p>
      </div>
      <Link to='/'><button className="btn">Go to Homepage</button></Link>
    </div>
  );
}

