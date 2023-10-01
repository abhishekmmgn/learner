import SearchBar from "../components/SearchBar";
import SuggestionCard from "../components/cards/SuggestionCard";
import SearchResultCard from "../components/cards/SearchResultCard";

import useDetectKeyboardOpen from "use-detect-keyboard-open";

export default function Search() {
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
        <div className="px-4 md:px-6 xl:px-8 mt-[82px] md:mt-[90px] bg-transparent">
          <h1 className="mb-3 text-2xl font-medium  md:text-base lg:text-xl dark:text-white-tertiary/90">Browse Topics</h1>

          <div className="w-full grid grid-cols-2 gap-3 overflow-y-scroll lg:grid-cols-3 xl:grid-cols-4 sm:gap-4 no-scrollbar">
            <SuggestionCard
              photo="https://picsum.photos/500/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/100/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/200/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/400/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/500/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/500/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/100/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/200/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/400/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/500/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/500/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/100/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/200/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/400/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/500/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/600/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/700/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/800/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/300/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/300/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/300/200"
              topic="Beginner"
            />
            <SuggestionCard
              photo="https://picsum.photos/300/200"
              topic="Beginner"
            />
          </div>
        </div>
      )}
    </>
  );
}