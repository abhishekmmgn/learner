
export default function SuggestionCard(props) {
  return (
    <div className="relative border-gray-light-500 aspect-video max-w-sm rounded-md hover:bg-gray-light-700">
      <img
        src={props.photo}
        alt="Topic Photo"
        className="absolute top-0 inset-x-0 bg-gray-light-500 w-full object-cover aspect-video rounded-md "
      />
      <div className="absolute top-0 inset-x-0 bg-black-primary/20 w-full object-cover aspect-video rounded-md hover:bg-black-primary/10"></div>
      <p className="absolute bottom-3 left-3 text-white text-base+ md:text-lg lg:text-lg+ overflow-clip">
        {props.topic}
      </p>
    </div>
  );
}
