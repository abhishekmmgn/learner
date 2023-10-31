import CategoryCard from "../cards/CategoryCard";
import { categories } from "@/utils/Categories";
import { CategoryType } from "@/types/CategoryType";
export default function DefaultSearch() {
  return (
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
  );
}
