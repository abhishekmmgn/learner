import TopicCard from "./TopicCard";

export default function TopicCardGallery(props) {
  return (
    <div className="w-full">
    <div className="mb-3 flex items-center">
        <h1 className="max-w-[332px] text-xl font-semibold line-clamp-1 lg:text-xl lg:max-w-[80%]">
          {props.title}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 sm:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <div className="h-full flex flex-row gap-4 pr-4 overflow-visible overflow-x-scroll no-scrollbar">
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
