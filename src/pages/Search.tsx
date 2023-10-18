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
import Categories from "@/utils/Categories";
import suggestCourse from "@/utils/SuggestCourse";
import { searchCourses } from "@/utils/Course";

export default function Search() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || "";

  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [queryState, setQueryState] = useState(query);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState([]);
  const categories = Categories;

  useEffect(() => {
    if (query) {
      setSearchValue(query);
      const courses = searchCourses(queryState);
      setSearchResults(courses);
      console.log("Rendered search results")
    }
  }, [queryState]);

  useEffect(() => {
    if (searchValue) {
      const courses = suggestCourse(searchValue);
      setSuggestions(courses);
      console.log("Rendered Suggestions")
    }
  }, [searchValue]);

  console.log(
    "query: ",
    query,
    "searchValue: ",
    searchValue,
    "focused: ",
    focused
  );

  return (
    <>
      <SearchBar
        focused={focused}
        setFocused={setFocused}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {/* default state */}
      {!query && !searchValue && (
        <div className="px-4 md:px-6 xl:px-8 mt-[82px] md:mt-[90px]">
          <h1 className="mb-3 text-xl font-semibold">Browse Topics</h1>
          <div className="w-full grid grid-cols-2 gap-3 overflow-y-scroll lg:grid-cols-3 xl:grid-cols-4 sm:gap-4 no-scrollbar">
            {categories.map((category, index) => (
              <CategoryCard
                image={category.image}
                name={category.name}
                key={index}
              />
            ))}
          </div>
        </div>
      )}

      {/* searching state */}
      {searchValue && (
        <div className="h-screen w-full bg-tertiary absolute z-[46] px-4 md:px-6 xl:px-8 mt-[82px] md:mt-[90px] md:max-w-[720px] lg:max-w-[828px] md:mx-auto sm:static">
          {suggestions.map((suggestion, index) => (
            <SuggestionCard title={suggestion} key={index} />
          ))}
        </div>
      )}

      {/* search results */}
      {query && (
        <>
          <div className="h-screen md:hidden py-2 md:py-4 px-4 mt-[82px] flex flex-col sm:flex-col gap-4 items-center justify-center">
            {/* {suggestions.map((suggestion) => (
        <CourseCard
          courseId={suggestion.courseId}
          image={suggestion.image}
          title={suggestion.title}
          students={suggestion.students}
          instructor={suggestion.instructor}
          duration={suggestion.duration}
          key={suggestion.courseId}
        />
      ))} */}
          </div>
          <div className="h-screen hidden py-4 px-6 xl:px-8 mt-[90px] md:flex flex-col gap-4 items-center justify-center">
            {/* {suggestions.map((suggestion) => (
        <StretchedCourseCard
          courseId={suggestion.courseId}
          image={suggestion.image}
          title={suggestion.title}
          students={suggestion.students}
          instructor={suggestion.instructor}
          duration={suggestion.duration}
          key={suggestion.courseId}
        />
          ))} */}
          </div>
        </>
      )}
    </>
  );
}
