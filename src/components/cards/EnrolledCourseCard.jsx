export default function EnrolledCourseCard(props) {
  return (
    <div className='border border-gray-200 min-w-[calc(100%-16px)] w-full max-w-[360px] flex flex-col bg-white rounded-md hover:bg-gray-100 focus:bg-gray-100 md:min-w-[360px] lg:min-w-[372px]'>
      <img
        src={props.photo}
        alt="Course Photo"
        className="bg-gray-200 w-full object-cover aspect-video rounded-t-md"
      />
      <div className="h-32 flex flex-col justify-center px-3 w-full">
        <p className="mb-1 text-red-500 text-xs md:text-sm+ lg:text-base">{props.level}</p>
        <h1 className="mb-4 font-medium overflow-clip w-full max-h-10 leading-5 md:text-base+ lg:text-lg lg:mt-1">{props.title}</h1>
        {/* Progress Bar */}
        <div className="rounded-sm bg-red-200 h-2 w-full">  
          <div style={{'width': `${props.progress}%`}} className='rounded-sm bg-red-500 h-full'></div>
        </div>
      </div>
    </div>
  )
}