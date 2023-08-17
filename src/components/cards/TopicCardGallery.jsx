import TopicCard from "./TopicCard";
import { GoChevronRight } from "react-icons/go";

export default function TopicCardGallery(props) {
  return (
    <div className="w-full">
      <div className="mb-4 flex items-center">
        <h1 className="text-2xl font-semibold">{props.title}</h1>
        <GoChevronRight className="text-black text-2xl" />
      </div>
      <div className="flex flex-row gap-2 overflow-x-scroll md:gap-3">
        <TopicCard
          photo="https://picsum.photos/320/132"
          topic="Life Sciences"
        />
        <TopicCard
          photo="https://picsum.photos/320/133"
          topic="Microbiology"
        />
        <TopicCard
          photo="https://picsum.photos/320/132"
          topic="Life Sciences"
        />
        <TopicCard
          photo="https://picsum.photos/320/133"
          topic="Microbiology"
        />
        <TopicCard
          photo="https://picsum.photos/320/132"
          topic="Life Sciences"
        />
      </div>
    </div>
  );
}