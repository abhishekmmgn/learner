
export default function SuggestionCard(props) {
  return (
    <div className="relative aspect-video rounded-lg">
      <img
        src={props.photo}
        alt="Topic Photo"
        className="absolute inset-y-0 inset-x-0 bg-background w-full object-cover aspect-video rounded-lg"
      />
      <div className="absolute inset-y-0 inset-x-0 bg-black/25 w-full object-cover aspect-video rounded-lg hover:bg-black/30"></div>
      <p className="absolute bottom-3 left-3 text-white text-base md:text-lg line-clamp-1">
        {props.topic}
      </p>
    </div>
  );
}
