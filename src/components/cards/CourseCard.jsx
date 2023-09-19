export default function CourseCard(props) {
  return (
    <div className="border min-w-[calc(100%-32px)] w-full max-w-sm flex flex-col bg-white border-gray-light-500 hover:bg-gray-light-600 rounded-md sm:min-w-[360px] sm:max-w-sm dark:border-gray-dark-700 dark:bg-black-secondary dark:hover:bg-gray-dark-700">
      <img
        src={props.photo}
        alt="Course Photo"
        className="bg-gray-light-500 w-full object-cover aspect-video rounded-t-lg dark:bg-gray-dark-700"
      />
      <div className="h-44 flex flex-col justify-center px-3 w-full overflow-clip md:h-[196px] py-4">
        <p className="mb-1 text-pink-light line-clamp-1 text-xs md:text-xs+ lg:text-sm dark:text-pink-dark">
          {props.level}
        </p>
        <h1 className="mb-3 font-medium line-clamp-2 w-full md:text-base+ lg:text-lg lg:mt-1 dark:text-white-tertiary/90">
          {props.title}
        </h1>
          
        <p className="line-clamp-1text-gray-700 block text-sm text-black-tertiary md:text-sm+ lg:text-base dark:text-white-tertiary/70">
          Students: {props.students}
        </p>
        <p className="my-[0.5px] first-letter:line-clamp-1 text-gray-700 block text-sm text-black-tertiary md:text-sm+ lg:text-base dark:text-white-tertiary/70">
          Instructors: {props.instructors}
        </p>
        <p className="line-clamp-1 text-gray-700 block text-sm text-black-tertiary md:text-sm+ lg:text-base dark:text-white-tertiary/70">
          Topics: {props.topics}
        </p>
      </div>
    </div>
  );
}
