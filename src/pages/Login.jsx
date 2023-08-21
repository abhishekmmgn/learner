import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    console.log(e.target.value)
    console.log(e.target.name)
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-start space-y-8 px-4 h-full w-full bg-background-light sm:justify-center sm:space-y-20">
      <h1 className="w-full text-4xl font-semibold text-center md:text-5xl lg:text-6xl">
        Log in
      </h1>
      <div className="flex flex-col items-center space-y-6 w-full">
        <div className="w-full flex flex-col items-center">
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
        </div>
        <div className="w-full">
          <button className="btn mx-auto mb-4" onClick={handleSubmit}>
            Sign In
          </button>
          <Link to="/register" className="w-full">
            <button className="btn-text mx-auto">Create Account</button>
          </Link>
        </div>
      </div>
    </div>
  );
}