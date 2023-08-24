import SearchBar from "../components/SearchBar";
import SuggestionCard from "../components/cards/SuggestionCard";
import SearchResultCard from "../components/cards/SearchResultCard";

import useDetectKeyboardOpen from "use-detect-keyboard-open";

export default function Search() {
  const isKeyboardOpen = useDetectKeyboardOpen();

  return (
    <div>
      <SearchBar />
      {isKeyboardOpen ? (
        <div className="px-4 mt-1 md:max-w-[720px] lg:max-w-[828px] md:mx-auto md:px-auto">
          <SearchResultCard title="Learning react with practical knowledge" />
          <SearchResultCard title="Learning react with practical knowledge" />
        </div>
      ) : (
        <div className="px-4 bg-transparent">
          <h1 className="mb-2 text-2xl font-semibold md:text-3xl xl:text-4xl">Browse Topics</h1>

          <div className="w-full grid grid-cols-2 gap-2 overflow-y-scroll xl:grid-cols-3 md:gap-3">
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
    </div>
  );
}
