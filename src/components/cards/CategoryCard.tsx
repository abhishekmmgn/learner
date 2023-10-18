import { Link } from "react-router-dom";

type CategoryCardProps = {
  image: string;
  name: string;
};
export default function CategoryCard(props: CategoryCardProps) {
  return (
    <Link to={`/search/${props.name}`}>
      <div className="relative aspect-video rounded-lg w-full">
        <img
          src={props.image}
          alt="Topic Photo"
          className="absolute inset-y-0 inset-x-0 bg-secondary w-full object-cover aspect-video rounded-lg"
          loading="lazy"
        />
        <div className="absolute inset-y-0 inset-x-0 bg-black/25 w-full object-cover aspect-video rounded-lg hover:bg-black/30"></div>
        <p className="absolute bottom-3 left-3 text-white text-base md:text-lg line-clamp-1">
          {props.name}
        </p>
      </div>
    </Link>
  );
}
