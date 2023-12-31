import TopicCard from "./TopicCard";
import { ChevronRightIcon } from "@radix-ui/react-icons";

export default function TopicCardGallery(props) {
  const topic = [{title: "", photo: "", description: ""}]
  return (
    <div className="w-full">
      <div className="mb-3 flex items-center">
        <h1 className="max-w-[332px] text-xl font-semibold line-clamp-1 lg:text-xl lg:max-w-[80%]">
          {props.title}
        </h1>
        <ChevronRightIcon className="w-5 h-5 sm:hidden" />
      </div>
      <div className="h-full flex flex-row gap-4 pr-4 overflow-visible overflow-x-scroll no-scrollbar">
        {/* {props.topics.map((topic, index) => (
          <TopicCard
            title={topic.title}
            description={topic.description}
            photo={topic.photo}
            key={topic.index}
          />
        ))} */}
      </div>
    </div>
  );
}
