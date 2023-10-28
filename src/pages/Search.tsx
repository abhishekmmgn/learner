import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryCard from "../components/cards/CategoryCard";
import SuggestionCard from "../components/cards/SuggestionCard";
import {
  CourseCard,
  StretchedCourseCard,
} from "../components/cards/CourseCard";
import { CourseType } from "@/types/CourseType";
import { useLocation } from "react-router-dom";
import { categories } from "@/utils/Categories";
import { CategoryType } from "@/types/CategoryType";
import suggestCourse from "@/utils/SuggestCourse";
import { searchCourses } from "@/utils/Course";
import Sort from "@/components/sort";

export default function Search() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query") || "";

  console.log(searchQuery);

  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState(searchQuery);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState([]);

  console.log(query);
  useEffect(() => {
    if (searchQuery) {
      setQuery(searchQuery);
      setSearchValue(query);
      const courses = searchCourses(query);
      setSearchResults(courses);
      console.log("Rendered search results");
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchValue) {
      const courses = suggestCourse(searchValue);
      setSuggestions(courses);
      console.log("Rendered Suggestions");
    }
  }, [searchValue]);
  console.log(focused);

  if (searchValue && focused) {
    return (
      <>
        <SearchBar
          focused={focused}
          setFocused={setFocused}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className="h-screen w-full bg-secondary absolute z-[46] px-4 md:px-6 xl:px-8 mt-[82px] md:mt-[90px] md:max-w-[720px] lg:max-w-[828px] md:mx-auto sm:static">
          {suggestions.map((suggestion, index) => (
            <SuggestionCard title={suggestion} key={index} />
          ))}
        </div>
      </>
    );
  } else {
    if (query) {
      // find the courses
      return (
        <>
          <SearchBar
            focused={focused}
            setFocused={setFocused}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <div className="h-screen w-full bg-secondary px-4 md:px-6 xl:px-8 mt-[82px] md:mt-[90px] md:max-w-[720px] lg:max-w-[828px] md:mx-auto">
            <div className="mt-2 mb-4 flex items-center justify-between gap-4">
              <Sort />
            </div>
            <h1 className="max-w-[332px] text-xl font-semibold line-clamp-1 lg:text-xl lg:max-w-[80%]">
              Search Results
            </h1>
          </div>
        </>
      );
    } else {
      return (
        <>
          <SearchBar
            focused={focused}
            setFocused={setFocused}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <div className="px-4 md:px-6 xl:px-8 mt-[82px] md:mt-[90px] flex justify-center">
            <div className="w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
              <h1 className="text-xl font-semibold">Browse Topics</h1>
              <div className="w-full">
                {categories.map((category: CategoryType, index) => (
                  <CategoryCard title={category.name} key={index} />
                ))}
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}
