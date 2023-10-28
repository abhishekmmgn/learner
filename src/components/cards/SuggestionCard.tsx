import { Link } from "react-router-dom";

export default function SuggestionCard({ title }: { title: string }) {
  return (
    <Link to={`/search?query=${title}`} >
      <div className="mx-auto border-b-2 py-2 h-11 w-full">
        <p className="overflow-clip line-clamp-1 lg:text-lg">{title}</p>
      </div>
    </Link>
  );
}
