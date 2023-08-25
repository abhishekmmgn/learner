export default function Subscription() {
  return (
    <div className="flex flex-col items-center justify-center px-4 h-full w-full">
      <p className="text-center font-medium text-black-secondary text-base md:text-base+ dark:text-white-secondary">
        Learner <span className="text-pink-light dark:text-pink-dark">Pro</span>
      </p>
      <h1 className="text-center text-2xl font-semibold md:text-4xl xl:text-5xl">
        Explore all courses.<span className="block">All Access</span>
      </h1>
      <p className="text-center font-medium text-black-secondary mt-1 mb-6 text-base+ md:text-center md:text-lg dark:text-white-secondary">
        Learn anywhere. Cancel anytime.
      </p>
      <button className="btn">Subscribe Now</button>
    </div>
  );
}
