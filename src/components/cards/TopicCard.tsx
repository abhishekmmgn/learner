import { Link } from "react-router-dom";

export default function Topic(props) {
  return (
    <Link to={`/search/topic/${props.topic}`}>
      <div className="relative aspect-video rounded-lg min-w-[calc(100%-32px)] max-w-sm sm:min-w-[320px]">
        <img
          src={props.photo}
          alt="Topic Photo"
          className="absolute inset-y-0 inset-x-0 bg-secondary w-full object-cover aspect-video rounded-lg"
          loading="lazy"
        />
        <div className="absolute inset-y-0 inset-x-0 bg-black/25 w-full object-cover aspect-video rounded-lg hover:bg-black/30"></div>
        <p className="absolute bottom-3 left-3 text-white text-base md:text-lg line-clamp-1">
          {props.topic}
        </p>
      </div>
    </Link>
  );
}
