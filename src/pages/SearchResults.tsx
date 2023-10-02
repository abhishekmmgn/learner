import SearchBar from "../components/SearchBar";
import CourseCardStretched from "../components/cards/CourseCardStretched";
import CourseCard from "../components/cards/CourseCard";
import SearchResultCard from "../components/cards/SearchResultCard";

import useDetectKeyboardOpen from "use-detect-keyboard-open";

export default function SearchResults() {
  const isKeyboardOpen = useDetectKeyboardOpen() || false;
  return (
    <>
      <SearchBar />
      {isKeyboardOpen ? (
        <div className="px-4 md:px-6 xl:px-8 mt-[82px] md:mt-[90px] md:max-w-[720px] lg:max-w-[828px] md:mx-auto md:px-auto">
          <SearchResultCard title="Learning react with practical knowledge" />
          <SearchResultCard title="Learning react with practical knowledge" />
        </div>
      ) : (
        <>
          <div className="md:hidden py-2 md:py-4 px-4 mt-[82px] flex flex-col sm:flex-col gap-4 items-center justify-center">
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
          <div className="hidden py-4 px-6 xl:px-8 mt-[90px] md:flex flex-col gap-4 items-center justify-center">
            <CourseCardStretched
              title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
              level="Beginner"
              progress={30}
              photo="https://picsum.photos/340/392"
            />
            <CourseCardStretched
              title="Introduction to Python with google tekdfs jkkjfdskjdfsk jkjfdkj fdkjfdkjkjdfkjfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
              level="Beginner"
              progress={30}
              photo="https://picsum.photos/399/131"
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
              photo="https://picsum.photos/393/131"
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
        </>
      )}
    </>
  );
}
