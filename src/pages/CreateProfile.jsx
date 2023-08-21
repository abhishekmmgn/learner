import { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateProfile() {
  const [formData, setFormData] = useState({ name: "", photo: "" });

  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-start space-y-8 px-4 h-full w-full bg-background-light sm:justify-center sm:space-y-20">
      <h1 className="w-full text-4xl font-semibold text-center md:text-5xl lg:text-6xl">
        Create Profile
      </h1>
      <div className="flex flex-col items-center space-y-6 w-full">
        <div className="w-full flex flex-col items-center">
          <img
            src={formData.photo}
            alt="Profile Photo"
            className="mb-2 bg-gray-light-700 h-28 w-28 rounded-full md:h-32 md:w-32" 
          />
          <input
            type="file"
            accept="image/*"
            value={formData.password}
            onChange={handleChange}
            className={`w-full max-w-sm border-gray-light-400 bg-transparent h-12 px-2 py-[0.25rem] text-base font-normal leading-[1.6] text-black placeholder-gray-800 outline-none transition duration-200 focus:outline-none sm:h-14 sm:px-4 sm:text-base+ md:text-lg`}
          />
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full max-w-sm border-b border-gray-light-400 bg-transparent h-12 px-2 py-[0.25rem] text-base font-normal leading-[1.6] text-black placeholder-gray-800 outline-none transition duration-200 focus:outline-none sm:h-14 sm:px-4 sm:text-base+ md:text-lg`}
          />
        </div>
          <button className="btn mx-auto" onClick={handleSubmit}>
            Done
          </button>
      </div>
    </div>
  );
}
