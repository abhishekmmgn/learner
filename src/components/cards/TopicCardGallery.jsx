import TopicCard from "./TopicCard";
import { GoChevronRight } from "react-icons/go";

export default function TopicCardGallery(props) {
  return (
    <div className="mt-4 w-full bg-transparent">
      <div className="mb-3 flex items-center">
        <h1 className="max-w-[332px] text-2xl font-semibold line-clamp-1 overflow-hidden md:text-3xl xl:text-4xl">
          {props.title}
        </h1>
        <GoChevronRight className="text-2xl text-black md:text-3xl lg:text-4xl" />
      </div>
      <div className="h-full flex flex-row gap-4 overflow-visible overflow-x-scroll no-scrollbar">
        <TopicCard
          photo="https://source.unsplash.com/random"
          topic="Life Sciences"
        />
        <TopicCard
          photo="https://source.unsplash.com/random"
          topic="Microbiology"
        />
        <TopicCard
          photo="https://source.unsplash.com/random"
          topic="Life Sciences"
        />
        <TopicCard
          photo="https://source.unsplash.com/random"
          topic="Microbiology"
        />
        <TopicCard
          photo="https://source.unsplash.com/random"
          topic="Life Sciences"
        />
      </div>
    </div>
  );
}
