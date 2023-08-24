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
    <div className="sticky mx-auto px-4 top-[92px] h-14 z-20 bg-background-light w-full flex items-center justify-center gap-3 md:h-16 backdrop-filter backdrop-blur-xl bg-opacity-70 md:top-[52px]">
      <input
        type="search"
        placeholder="Courses, Topics and more"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={handleFocus}
        className={`w-full rounded-xl bg-gray-light-700 h-10 px-3 text-base font-normal leading-[1.6] text-gray-800 placeholder-gray-dark-100 border border-gray-light-500 outline-none transition duration-200 ease-in-out focus:outline-none sm:max-w-lg md:h-11 md:max-w-2xl md:px-4 lg:max-w-3xl`}
      />
      {isFocused && (
        <button
          className="transform text-pink-light md:text-base+ lg:text-lg"
          onClick={handleClick}
        >
          Cancel
        </button>
      )}
    </div>
  );
}