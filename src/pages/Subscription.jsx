import PrimaryBtn from "../components/btn/PrimaryBtn";

export default function Subscription() {
  return (
    <div className="flex flex-col justify-center px-4 w-full md:items-center">
      <p className="font-medium text-gray-800 text-base md:text-center">
        Learner <span className="text-red-500">Pro</span>
      </p>
      <h1 className="text-3xl font-semibold md:text-center">
        Explore all courses.<span className="block">All Access</span>
      </h1>
      <p className="font-medium text-gray-800 mt-1 mb-4 text-base+ md:text-center">
        Learn anywhere. Cancel anytime.
      </p>
      <PrimaryBtn title="Subscribe Now" />
    </div>
  );
}
