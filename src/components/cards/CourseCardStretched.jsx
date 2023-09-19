export default function CourseCardStretched(props) {
  return (
    <div className='border w-full max-w-[412px] flex flex-col bg-white border-gray-light-500 hover:bg-gray-light-600 rounded-lg sm:max-w-full sm:flex-row sm:items-center hover:bg-white/60 dark:border-gray-dark-700 dark:bg-black-secondary dark:hover:bg-gray-dark-700'>
      <img
        src={props.photo}
        alt="Course Photo"
        className="w-full bg-gray-light-500 object-cover aspect-video rounded-t-lg sm:rounded-r-none sm:rounded-l-lg sm:w-2/4 sm:aspect-[3/2] xl:w-1/3 dark:bg-gray-dark-700"
      />
      <div className="h-44 bg-transparent flex flex-col justify-center px-3 w-full overflow-clip sm:h-40 sm:w-2/3">
        <p className="mb-1 text-pink-light text-xs md:text-xs+ lg:text-sm dark:text-pink-dark">{props.level}</p>
        <h1 className="mb-3 font-medium overflow-clip w-full max-h-10 leading-5 md:text-base+ lg:text-lg lg:mt-1 dark:text-white-tertiary/90">{props.title}</h1>
        
        <p className="text-ellipsis overflow-hidden text-gray-700 block text-sm text-black-tertiary md:text-sm+ lg:text-base dark:text-white-tertiary/70"><span className='font-medium'>Students: </span>{props.students}</p>
        <p className="h-6 text-ellipsis overflow-clip text-gray-700 block text-sm text-black-tertiary md:text-sm+ lg:text-base dark:text-white-tertiary/70"><span className='font-medium'>Instructors: </span>{props.instructors}</p>
        <p className="h-6 text-ellipsis overflow-clip text-gray-700 block text-sm text-black-tertiary md:text-sm+ lg:text-base dark:text-white-tertiary/70"><span className='font-medium'>Topics: </span>{props.topics}</p>
      </div>
    </div>
  )
}