import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";

type SearchBarProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  focused: boolean;
  setFocused: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function SearchBar(props: SearchBarProps) {
  const navigate = useNavigate();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search?query=${encodeURIComponent(props.searchValue)}`);
    }
    props.setFocused(false);
  };

  return (
    <div className="fixed top-[52px] md:left-[210px] lg:left-[232px] xl:left-[248px] inset-0 h-14 z-50 flex items-center justify-center gap-3 md:h-16 bg-tertiary px-4 md:px-6">
      <Input
        type="search"
        placeholder="Courses, Topics and more"
        value={props.searchValue}
        onChange={(e) => {
          props.setSearchValue(e.target.value);
        }}
        onFocus={() => props.setFocused(true)}
        onBlur={() => props.setFocused(false)}
        onKeyDown={handleKeyPress}
        className="bg-[#efefef] transition duration-200 ease-in-out sm:max-w-lg md:max-w-2xl lg:max-w-3xl dark:bg-[#1f1f1f]"
      />
      {props.focused && (
        <button className="lg:hidden transform text-primary">Cancel</button>
      )}
    </div>
  );
}
