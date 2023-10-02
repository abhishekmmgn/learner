import appIcon from "/appIcon.png";

export default function AuthLeftPane() {
  return (
    <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
      <div className="absolute inset-0 bg-zinc-900" />
      <div className="relative z-20 text-lg font-medium">
        <img src={appIcon} alt="App appIcon" className="w-28" />
      </div>
      <div className="relative z-20 mt-auto">
        <p className="text-lg text-tertiary-foreground">
          Discover, learn, and grow with Learner app. Access tons of courses,
          expert instructors, and flexible learning at your fingertips
        </p>
      </div>
    </div>
  );
}
