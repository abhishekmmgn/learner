import TopicCard from "./TopicCard";
import { ChevronRightIcon } from "@radix-ui/react-icons";

export default function TopicCardGallery() {
  const topics = [
    "Python Programming",
    "Data Science",
    "Web Development",
    "Mobile App Development",
    "Java Programming",
    "C++ Programming",
    "Software Engineering",
    "Machine Learning",
    "Artificial Intelligence",
    "Front-end Development",
    "Back-end Development",
    "Data Engineering",
    "Full Stack Development",
    "JavaScript Development",
    "Blockchain Development",
    "Cybersecurity",
    "Ethical Hacking",
    "Data Analytics",
    "Game Development",
    "Cloud Computing",
    "Computer Vision",
    "Natural Language Processing",
    "Database Management",
    "DevOps Practices",
    "Programming Languages",
  ];
  return (
    <div className="w-full">
      <div className="mb-3 flex items-center">
        <h1 className="max-w-[332px] text-xl font-semibold line-clamp-1 lg:text-xl lg:max-w-[80%]">
          Explore by topics
        </h1>
        <ChevronRightIcon className="w-5 h-5 sm:hidden" />
      </div>
      <div className="h-full flex flex-row gap-4 pr-4 overflow-visible overflow-x-scroll no-scrollbar">
        {topics.map((topic, index) => (
          <TopicCard title={"title"} key={index} />
        ))}
      </div>
    </div>
  );
}
