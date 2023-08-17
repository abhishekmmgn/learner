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
        <div className="px-4 mt-1">
          <SearchResultCard title="Leraning react with practical knowledge" />
          <SearchResultCard title="Leraning react with practical knowledge" />
        </div>
      ) : (
        <div className="px-4 ">
          <h1 className="my-2 text-2xl font-semibold">Browse Topics</h1>
          <div className="flex gap-3 flex-wrap overflow-y-scroll">
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
