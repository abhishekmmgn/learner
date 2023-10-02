import { useState } from 'react';
import { Input } from './ui/input';

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
    <div className="fixed top-[52px] md:left-[210px] lg:left-[232px] xl:left-[248px] inset-0 h-14 z-20 flex items-center justify-center gap-3 md:h-16 bg-tertiary px-4 md:px-6">
      <Input
        type="search"
        placeholder="Courses, Topics and more"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={handleFocus}
        className={`bg-background transition duration-200 ease-in-out sm:max-w-lg md:max-w-2xl lg:max-w-3xl`}
      />
      {isFocused && (
        <button
          className="lg:hidden transform text-primary"
          onClick={handleClick}
        >
          Cancel
        </button>
      )}
    </div>
  );
}