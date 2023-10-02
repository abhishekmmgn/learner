import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateProfile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ photo: "", name: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4 h-full w-full sm:justify-center sm:gap-8">
      <h1 className="w-full text-4xl font-semibold text-center md:text-5xl lg:text-6xl">
        Create Profile
      </h1>
      <img
        src={formData.photo}
        className="-mb-4 bg-gray-light-600 h-28 w-28 rounded-full md:h-32 md:w-32 "
      />
      <form className="w-full flex flex-col items-center gap-4">
        <input
          type="file"
          accept="image/*"
          name="photo"
          value={formData.photo}
          onChange={handleChange}
          className={`mb-3 w-full max-w-sm border-b border-gray-light-400 bg-transparent h-12 px-2 py-[0.25rem] text-base font-normal leading-[1.6] text-black placeholder-gray-light-100 outline-none transition duration-200 focus:outline-none sm:h-14 sm:px-4 sm:text-base+ md:text-lg   `}
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`mb-3 w-full max-w-sm border-b border-gray-light-400 bg-transparent h-12 px-2 py-[0.25rem] text-base font-normal leading-[1.6] text-black placeholder-gray-light-100 outline-none transition duration-200 focus:outline-none sm:h-14 sm:px-4 sm:text-base+ md:text-lg   `}
        />
        <button className="mt-1 btn mx-auto" onClick={handleSubmit}>
          Done
        </button>
      </form>
    </div>
  );
}
