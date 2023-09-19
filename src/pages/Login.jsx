import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 px-4 h-full w-full sm:justify-center sm:space-y-8">
      <h1 className="w-full text-4xl font-semibold text-center md:text-5xl lg:text-6xl dark:text-white-tertiary/90">
        Login
      </h1>
      <div className="flex flex-col items-center space-y-3 w-full">
        <form className="w-full flex flex-col items-center gap-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mb-3 w-full max-w-sm border-b border-gray-light-400 bg-transparent h-12 px-2 py-[0.25rem] text-base font-normal leading-[1.6] text-black placeholder-gray-light-100 outline-none transition duration-200 focus:outline-none sm:h-14 sm:px-4 sm:text-base+ md:text-lg dark:text-white-secondary dark:border-gray-dark-500 dark:placeholder-gray-dark-300`}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full max-w-sm border-b border-gray-light-400 bg-transparent h-12 px-2 py-[0.25rem] text-base font-normal leading-[1.6] text-black placeholder-gray-light-100 outline-none transition duration-200 focus:outline-none sm:h-14 sm:px-4 sm:text-base+ md:text-lg dark:text-white-secondary dark:border-gray-dark-500 dark:placeholder-gray-dark-300`}
          />
          <button className="mt-1 btn mx-auto" onClick={handleSubmit}>
            Login
          </button>
        </form>
        <Link to="/register" className="w-full">
          <button className="btn-text mx-auto">
          Create Account
          </button>
        </Link>
      </div>
    </div>
  );
}
