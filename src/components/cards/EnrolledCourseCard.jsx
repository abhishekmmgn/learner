export default function EnrolledCourseCard(props) {
  return (
    <div className='border border-gray-light-600 w-[calc(100%-32px)] max-w-[372px] flex flex-col hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white rounded-md dark:border-gray-dark-600 dark:bg-background-dark-secondary dark:hover:bg-gray-dark-700'>
      <img
        src={props.photo}
        alt="Course Photo"
        className="bg-gray-light-600 w-full object-cover aspect-video rounded-t-md dark:bg-gray-dark-700"
      />
      <div className="h-32 flex flex-col justify-center px-3 w-full  overflow-clip md:h-36">
        <p className="mb-1 text-pink-light line-clamp-1 text-sm md:text-sm+ lg:text-base dark:text-pink-dark">{props.level}</p>
        <h1 className="mb-3 font-medium line-clamp-2 w-full md:text-base+ lg:text-lg lg:mt-1">{props.title}</h1>
        
        {/* Progress Bar */}
        <div className="rounded-sm h-2 w-full border bg-gray-light-500 border-gray-light-500 dark:border-gray-dark-600 dark:bg-gray-dark-600">  
          <div style={{'width': `${props.progress}%`}} className='rounded-sm bg-pink-light border border-red-light h-full dark:bg-pink-dark dark:border-pink-dark'></div>
        </div>
      </div>
    </div>
  )
}