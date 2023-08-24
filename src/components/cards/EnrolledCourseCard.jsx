export default function EnrolledCourseCard(props) {
  return (
    <div className='border border-gray-light-500 w-[calc(100%-24px)] max-w-[372px] flex flex-col bg-white rounded-md hover:bg-gray-light-700'>
      <img
        src={props.photo}
        alt="Course Photo"
        className="bg-gray-light-500 w-full object-cover aspect-video rounded-t-md"
      />
      <div className="h-32 flex flex-col justify-center px-3 w-full  overflow-clip md:h-36">
        <p className="mb-1 text-pink-light text-sm md:text-sm+ lg:text-base">{props.level}</p>
        <h1 className="mb-4 font-medium overflow-clip w-full max-h-10 leading-5 md:text-base+ lg:text-lg lg:mt-1">{props.title}</h1>
        
        {/* Progress Bar */}
        <div className="rounded-sm h-2 w-full border border-gray-light-400">  
          <div style={{'width': `${props.progress}%`}} className='rounded-sm bg-pink-light border border-red-light h-full'></div>
        </div>
      </div>
    </div>
  )
}