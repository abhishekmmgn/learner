import SearchBar from "../components/SearchBar";
import CourseCard from "../components/cards/CourseCard";
import SearchResultCard from "../components/cards/SearchResultCard";

import useDetectKeyboardOpen from "use-detect-keyboard-open";

export default function SearchResults() {
  const isKeyboardOpen = useDetectKeyboardOpen() || false;
  ``;
  return (
    <div>
      <SearchBar />
      {isKeyboardOpen ? (
        <div className="px-4 md:px-6 xl:px-8 mt-[82px] md:mt-[90px] md:max-w-[720px] lg:max-w-[828px] md:mx-auto ">
          <SearchResultCard title="Learning react with practical knowledge" />
          <SearchResultCard title="Learning react with practical knowledge" />
        </div>
      ) : (
        <div className="py-2 md:py-4 px-4 md:px-6 xl:px-8 mt-[82px] md:mt-[90px] flex items-center justify-center">
          <div className="min-w-min mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
            <CourseCard
              title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
              level="Beginner"
              progress={30}
              photo="https://picsum.photos/340/392"
            />
            <CourseCard
              title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
              level="Beginner"
              progress={30}
              photo="https://picsum.photos/399/131"
            />
            <CourseCard
              title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
              level="Beginner"
              progress={30}
              photo="https://picsum.photos/340/131"
            />
            <CourseCard
              title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
              level="Beginner"
              progress={30}
              photo="https://picsum.photos/393/131"
            />
            <CourseCard
              title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
              level="Beginner"
              progress={30}
              photo="https://picsum.photos/340/131"
            />
            <CourseCard
              title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
              level="Beginner"
              progress={30}
              photo="https://picsum.photos/340/131"
            />
          </div>
        </div>
      )}
    </div>
  );
}
