import { Link } from "react-router-dom";

type PropsType = {
  title: string;
};
export default function Topic(props: PropsType) {
  return (
    <Link to={`/search?query=${props.title}`}>
      <div className="w-36 max-w-48 h-10 bg-tertiary hover:bg-accent rounded-lg max-w-sm flex items-center justify-center shadow-sm">
        <p className="text-tertiary-foreground line-clamp-1">
          {props.title}
        </p>
      </div>
    </Link>
  );
}
