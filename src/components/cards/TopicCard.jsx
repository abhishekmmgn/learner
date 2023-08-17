function TopicCard(props) {
  return (
    <div className="relative min-w-[calc(100%-16px)] w-full max-w-[360px] h-40 rounded-xl sm:min-w-[332px] lg:min-w-[360px] lg:h-40">
      <img
        src={props.photo}
        alt="Topic Photo"
        className="absolute top-0 left-0 bg-gray-200 border border-gray-300 w-full h-full rounded-xl"        /> 
      <div className='absolute top-0 left-0 w-full h-full bg-black/20 rounded-xl lg:min-w-[360px] lg:h-40'></div>
      <p className='absolute bottom-4 left-4 text-white text-lg lg:text-lg+'>
        {props.topic}
      </p>
    </div>
  )
}
  
export default TopicCard;