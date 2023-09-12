import SearchBar from "../components/SearchBar";
import CourseCardStretched from "../components/cards/CourseCardStretched";
import SearchResultCard from "../components/cards/SearchResultCard";

import useDetectKeyboardOpen from "use-detect-keyboard-open";

export default function SearchResults() {
  const isKeyboardOpen = useDetectKeyboardOpen() || false;

  return (
    <div>
      <SearchBar />
      {isKeyboardOpen ? (
        <div className="px-4 md:px-8 mt-1 md:max-w-[720px] md:px-0 lg:max-w-[828px] md:mx-auto ">
          <SearchResultCard title="Learning react with practical knowledge" />
          <SearchResultCard title="Learning react with practical knowledge" />
        </div>
      ) : (
        <div className="px-4 md:px-8 mx-auto flex flex-col gap-3 items-center">
          <CourseCardStretched
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            progress={30}
            photo="https://picsum.photos/340/131"
          />
          <CourseCardStretched
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            progress={30}
            photo="https://picsum.photos/340/131"
          />
          <CourseCardStretched
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            progress={30}
            photo="https://picsum.photos/340/131"
          />
          <CourseCardStretched
            title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            level="Beginner"
            progress={30}
            photo="https://picsum.photos/340/131"
          />
        </div>
      )}
    </div>
  );
}
