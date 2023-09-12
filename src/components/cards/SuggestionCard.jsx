
export default function SuggestionCard(props) {
  return (
    <div className="relative aspect-video rounded-lg">
      <img
        src={props.photo}
        alt="Topic Photo"
        className="absolute top-0 inset-x-0 bg-gray-light-600 w-full object-cover aspect-video rounded-lg dark:bg-gray-dark-600"
      />
      <div className="absolute top-0 inset-x-0 bg-black/20 w-full object-cover aspect-video rounded-lg hover:bg-black/25"></div>
      <p className="absolute bottom-3 left-3 text-white text-base+ md:text-lg lg:text-lg+ overflow-clip dark:text-gray-light-700">
        {props.topic}
      </p>
    </div>
  );
}
