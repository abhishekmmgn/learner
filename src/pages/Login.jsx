import { useState } from "react";
import PrimaryBtn from "../components/btn/PrimaryBtn";
import TertiaryBtn from "../components/btn/TertiaryBtn";

export default function CreateProfile() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto relative bg-white-secondary p-4 max-h-[800px] w-full xl container rounded-lg flex flex-col items-center justify-between sm:justify-center">
      <h1 className="mt-16 text-center text-4xl sm:text-5xl md:text-6xl">Login</h1>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={`mb-3 w-full border border-transparent border-b-gray-400 bg-transparent h-12 px-2 py-[0.25rem] text-base font-normal leading-[1.6] text-black placeholder-gray-800 outline-none transition duration-200 focus:outline-none sm:h-14 sm:px-4 sm:text-base+ md:text-lg sm:mb-5`}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={`w-full border border-transparent border-b-gray-400 bg-transparent h-12 px-2 py-[0.25rem] text-base font-normal leading-[1.6] text-black placeholder-gray-800 outline-none transition duration-200 focus:outline-none sm:h-14 sm:px-4 sm:text-base+ md:text-lg`}
        />
        <div className="mt-6 w-full flex flex-col gap-3 items-center justify-center">
          <PrimaryBtn title="Sign In" />
          <TertiaryBtn title="Create Account" />
        </div>
      </div>
    </div>
  );
}
