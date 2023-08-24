export default function Subscription() {
  return (
    <div className="flex flex-col items-center justify-center px-4 h-full w-full bg-background-light">
      <p className="text-center font-medium text-black-secondary text-base md:text-base+">
        Learner <span className="text-red-500">Pro</span>
      </p>
      <h1 className="text-center text-2xl font-semibold md:text-4xl xl:text-5xl">
        Explore all courses.<span className="block">All Access</span>
      </h1>
      <p className="text-center font-medium text-black-secondary mt-1 mb-4 text-base+ md:text-center md:text-lg">
        Learn anywhere. Cancel anytime.
      </p>
      <button className="btn">Subscribe Now</button>
    </div>
  );
}
