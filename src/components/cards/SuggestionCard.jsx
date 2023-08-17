function SuggestionCard(props) {
  return (
    <div className="grow relative h-24 w-[calc(50%-8px)] rounded-xl sm:h-32 sm:min-w-[calc(30%-4px)] sm:max-w-[40%] lg:min-w-[calc(25%-12px)] lg:max-w-full md:w-[calc(20%-8px)]">
      <img
        src={props.photo}
        alt="Topic Photo"
        className="absolute top-0 left-0 bg-gray-50 border border-gray-100 w-full h-full rounded-xl"
      /> 
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-xl hover:opacity-40'></div>
      <p className='absolute bottom-2 left-2 text-white text-base md:text-base+ lg:text-lg'>
        {props.topic}
      </p>
    </div>
  )
}
  
export default SuggestionCard;