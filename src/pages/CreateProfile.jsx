import { useState } from "react";

export default function CreateProfile() {
  const [formData, setFormData] = useState({ photo: "", name: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 px-4 h-full w-full sm:justify-center sm:space-y-8 dark:bg-background-dark-secondary">
      <h1 className="w-full text-4xl font-semibold text-center md:text-5xl lg:text-6xl dark:text-white">
        Create Profile
      </h1>
        <img
          src={formData.photo}
          alt="Profile Photo"
          className="mb-2 bg-gray-light-600 h-28 w-28 rounded-full md:h-32 md:w-32 dark:bg-gray-dark-700"
        />
      <form className="w-full flex flex-col items-center space-y-4">
        <input
          type="file"
          accept="image/*"
          value={formData.photo}
          onChange={handleChange}
          className={`mb-3 w-full max-w-sm border-b border-gray-light-400 bg-transparent h-12 px-2 py-[0.25rem] text-base font-normal leading-[1.6] text-black placeholder-gray-light-100 outline-none transition duration-200 focus:outline-none sm:h-14 sm:px-4 sm:text-base+ md:text-lg dark:text-white dark:border-gray-dark-400 dark:placeholder-gray-dark-200`}
        />
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={`mb-3 w-full max-w-sm border-b border-gray-light-400 bg-transparent h-12 px-2 py-[0.25rem] text-base font-normal leading-[1.6] text-black placeholder-gray-light-100 outline-none transition duration-200 focus:outline-none sm:h-14 sm:px-4 sm:text-base+ md:text-lg dark:text-white dark:border-gray-dark-400 dark:placeholder-gray-dark-200`}
        />
        <button className="mt-1 btn mx-auto" onClick={handleSubmit}>
          Done
        </button>
      </form>
    </div>
  );
}
