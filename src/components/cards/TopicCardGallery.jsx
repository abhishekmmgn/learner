import TopicCard from "./TopicCard";
import { GoChevronRight } from "react-icons/go";

export default function TopicCardGallery(props) {
  return (
    <div className="w-full bg-transparent">
      <div className="mb-3 flex items-center">
        <h1 className="max-w-[332px] text-2xl font-semibold max-h-10 md:max-h-12 overflow-hidden md:text-3xl xl:text-4xl">
          {props.title}
        </h1>
        <GoChevronRight className="text-black text-2xl mt-1 lg:mt-2" />
      </div>
      <div className="h-full flex flex-row gap-3 overflow-visible overflow-x-scroll">
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
