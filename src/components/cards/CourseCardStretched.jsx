export default function CourseCardStretched(props) {
  return (
    <div className='border border-gray-light-500 w-full max-w-[412px] flex flex-col bg-white rounded-lg hover:bg-gray-light-700 sm:max-w-full sm:flex-row sm:items-center'>
      <img
        src={props.photo}
        alt="Course Photo"
        className="w-full bg-gray-light-500 object-cover aspect-video rounded-t-lg sm:rounded-r-none sm:rounded-l-lg sm:w-2/4 sm:aspect-[3/2] xl:w-1/3"
      />
      <div className="h-44 flex flex-col justify-center px-3 w-full overflow-clip sm:h-40 sm:w-2/3">
        <p className="mb-1 text-pink-light text-xs md:text-xs+ lg:text-sm">{props.level}</p>
        <h1 className="mb-3 font-medium overflow-clip w-full max-h-10 leading-5 md:text-base+ lg:text-lg lg:mt-1">{props.title}</h1>
        
        <p className="text-ellipsis overflow-hidden text-gray-700 block text-sm text-black-tertiary md:text-sm+ lg:text-base"><span className='font-medium'>Students: </span>{props.students}</p>
        <p className="h-6 text-ellipsis overflow-clip text-gray-700 block text-sm text-black-tertiary md:text-sm+ lg:text-base"><span className='font-medium'>Instructors: </span>{props.instructors}</p>
        <p className="h-6 text-ellipsis overflow-clip text-gray-700 block text-sm text-black-tertiary md:text-sm+ lg:text-base"><span className='font-medium'>Topics: </span>{props.topics}</p>
      </div>
    </div>
  )
}