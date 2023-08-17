import { useState } from 'react';

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleClick =() => {
    setSearchValue('');
    setIsFocused(false);  
  }
  const handleFocus = () => {
    setIsFocused(true)
  }
  return (
    <div className="sticky px-4 top-[51px] z-20 bg-[#f2f2f2] py-2 w-full flex items-center justify-between gap-3">
      <input
        type="search"
        placeholder="Courses, Topics and more"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={handleFocus}
        className={`w-full rounded-xl bg-gray-200 h-10 px-3 text-base font-normal leading-[1.6] text-gray-800 placeholder-gray-500 outline-none transition duration-200 ease-in-out focus:outline-none`}
      />
      {isFocused && (
        <button
          className="transform text-red-500"
          onClick={handleClick}
        >
          Cancel
        </button>
      )}
    </div>
  );
}