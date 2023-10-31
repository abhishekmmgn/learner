import SuggestionCard from "../cards/SuggestionCard";
import { categories } from "@/utils/Categories";

export default function Searching({ searchValue }: { searchValue: string }) {
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().startsWith(searchValue.toLowerCase())
  );

  return (
    <div className="h-screen w-full bg-secondary absolute z-[46] px-4 md:px-6 xl:px-8 mt-[82px] md:mt-[90px] md:max-w-[720px] lg:max-w-[828px] md:mx-auto sm:static">
      {filteredCategories.map((category, index) => (
        <SuggestionCard title={category.name} key={index} />
      ))}
    </div>
  );
}
