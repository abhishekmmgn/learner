function TopicCard(props) {
  return (
    <div className="relative border-gray-light-600 min-w-[calc(100%-24px)] max-w-[372px] aspect-video rounded-lg sm:min-w-[320px] dark:border-gray-dark-600">
      <img
        src={props.photo}
        alt="Topic Photo"
        className="absolute top-0 inset-x-0 bg-gray-light-600 w-full object-cover aspect-video rounded-lg dark:bg-gray-dark-600"
      />
      <div className="absolute top-0 inset-x-0 bg-black/10 w-full object-cover aspect-video rounded-lg hover:bg-black/5"></div>
      <p className="absolute bottom-3 left-3 text-white text-base+ md:text-lg xl:text-lg+ overflow-clip">
        {props.topic}
      </p>
    </div>
  );
}

export default TopicCard;
