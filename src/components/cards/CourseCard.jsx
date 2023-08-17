export default function CourseCard(props) {
  return (
    <div className='border border-gray-200 min-w-[calc(100%-16px)] w-full max-w-[360px] flex flex-col bg-white rounded-md hover:bg-gray-100 focus:bg-gray-100 md:min-w-[360px] lg:min-w-[372px]'>
      <img
        src={props.photo}
        alt="Course Photo"
        className="bg-gray-200 w-full object-cover aspect-video rounded-t-md"
      />
      <div className="h-44 flex flex-col justify-center px-3 w-full">
        <p className="mb-1 text-red-500 text-xs">{props.level}</p>
        <h1 className="mb-2 font-medium overflow-clip w-full max-h-10 leading-5">{props.title}</h1>
        <p className="mb-1 text-ellipsis overflow-hidden text-gray-700 block text-sm"><span className='font-medium'>Students: </span>{props.students}</p>
        <p className="h-6 mb-1 text-ellipsis overflow-clip text-gray-700 block text-sm"><span className='font-medium'>Instructors: </span>{props.instructors}</p>
        <p className="h-6 text-ellipsis overflow-clip text-gray-700 block text-sm"><span className='font-medium'>Topics: </span>{props.topics}</p>
      </div>
    </div>
  )
}