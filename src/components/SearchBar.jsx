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
    <div className="fixed top-[52px] md:left-[210px] lg:left-[232px] xl:left-[248px] inset-0 h-14 z-20 flex items-center justify-center gap-3 md:h-16 bg-background-light-primary px-4 md:px-6 xl:px-8 dark:bg-background-dark-primary">
      <input
        type="search"
        placeholder="Courses, Topics and more"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={handleFocus}
        className={`w-full rounded-xl bg-background-light-secondary h-10 px-3 text-base leading-[1.6] text-gray-800 placeholder-gray-light-100 border border-gray-light-500 outline-none transition duration-200 ease-in-out focus:outline-none sm:max-w-lg md:h-11 md:max-w-2xl md:px-4 lg:max-w-3xl dark:bg-background-dark-secondary dark:placeholder-gray-dark-300 dark:text-white-secondary dark:border-gray-dark-700`}
      />
      {isFocused && (
        <button
          className="md:hidden transform text-pink-light md:text-base+ lg:text-lg dark:text-pink-dark"
          onClick={handleClick}
        >
          Cancel
        </button>
      )}
    </div>
  );
}