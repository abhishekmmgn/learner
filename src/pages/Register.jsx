import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 px-4 h-full w-full bg-background-light sm:justify-center sm:space-y-8">
      <h1 className="w-full text-4xl font-semibold text-center md:text-5xl lg:text-6xl">
        Create Account
      </h1>
      <div className="flex flex-col items-center space-y-3 w-full">
        <form className="w-full flex flex-col items-center space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`mb-3 w-full max-w-sm border-b border-gray-light-400 bg-transparent h-12 px-2 py-[0.25rem] text-base font-normal leading-[1.6] text-black placeholder-gray-800 outline-none transition duration-200 focus:outline-none sm:h-14 sm:px-4 sm:text-base+ md:text-lg`}
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full max-w-sm border-b border-gray-light-400 bg-transparent h-12 px-2 py-[0.25rem] text-base font-normal leading-[1.6] text-black placeholder-gray-800 outline-none transition duration-200 focus:outline-none sm:h-14 sm:px-4 sm:text-base+ md:text-lg`}
          />
          <button className="btn mx-auto" onClick={handleSubmit}>
            Create Account
          </button>
        </form>
        <Link to="/login" className="w-full">
          <button className="btn-text mx-auto">
            Log in to Existing Account
          </button>
        </Link>
      </div>
    </div>
  );
}
