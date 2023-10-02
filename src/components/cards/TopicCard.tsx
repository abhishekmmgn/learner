function TopicCard(props) {
  return (
    <div className="relative border min-w-[calc(100%-24px)] max-w-[360px] aspect-video rounded-lg sm:min-w-[320px]">
      <img
        src={props.photo}
        alt="Topic Photo"
        className="absolute inset-y-0 inset-x-0 bg-white w-full object-cover aspect-video rounded-lg "
      />
      <div className="absolute inset-y-0 inset-x-0 bg-gradient-to-b from-transparent to-black/80 w-full object-cover aspect-video rounded-lg hover:bg-black/20"></div>
      <p className="absolute bottom-3 left-3 text-white text-base md:text-lg line-clamp-1">
        {props.topic}
      </p>
    </div>
  );
}

export default TopicCard;
