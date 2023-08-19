import { useState } from "react";
import Back from "../components/Back";
import { Fragment } from "react";

export default function CreateProfile() {
  const [formData, setFormData] = useState({ name: "", photo: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <Back />
      <div className="mx-auto relative bg-white-secondary p-4 max-h-[800px] w-full xl container rounded-lg flex flex-col items-center justify-between sm:justify-center">
        <h1 className="mt-16 text-center text-4xl font-medium sm:text-5xl md:text-6xl">
          Create Profile
        </h1>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`mb-3 w-full border border-transparent border-b-gray-400 bg-transparent h-12 px-2 py-[0.25rem] text-base font-normal leading-[1.6] text-black placeholder-gray-800 outline-none transition duration-200 focus:outline-none sm:h-14 sm:px-4 sm:text-base+ md:text-lg sm:mb-5`}
          />
          <input
            type="file"
            accept=".png, .jpeg, .jpg"
            value={formData.photo}
            onChange={handleChange}
            className={`w-full border border-transparent border-b-gray-400 bg-transparent h-12 px-2 py-[0.25rem] text-base font-normal leading-[1.6] text-black placeholder-gray-800 outline-none transition duration-200 focus:outline-none sm:h-14 sm:px-4 sm:text-base+ md:text-lg`}
          />
          <div className="mt-6 w-full flex flex-col items-center justify-center">
            <button className="btn" onClick={handleSubmit}>
              Done
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
