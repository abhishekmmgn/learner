import PrimaryBtn from "../components/btn/PrimaryBtn";
import SecondaryBtn from "../components/btn/SecondaryBtn";

export default function Auth() {
  return (
    <div className="mx-auto relative bg-white-secondary p-4 max-h-[800px] w-full xl container rounded-lg flex flex-col items-center justify-between sm:justify-center">
      <div>
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl">
          Learner
        </h1>
        <p className="mt-2 mb-10 text-center text-lg font-medium sm:text-lg+ md:text-xl">
          The best way to learn anything you want.
        </p>
      </div>
      <div className="w-full flex flex-col items-center gap-3">
        <PrimaryBtn title="Create Account" />
        <SecondaryBtn title="Sign In" />
      </div>
    </div>
  );
}
