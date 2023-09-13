export default function CourseCard(props) {
  return (
    <div className="border border-gray-light-600 w-[calc(100%-32px)] max-w-[412px] flex flex-col hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white rounded-lg dark:border-gray-dark-600 dark:bg-background-dark-secondary">
      <img
        src={props.photo}
        alt="Course Photo"
        className="bg-gray-light-600 w-full object-cover aspect-video rounded-t-lg dark:bg-gray-dark-700"
      />
      <div className="h-40 flex flex-col justify-center px-3 w-full  overflow-clip md:h-44">
        <p className="mb-1 text-pink-light line-clamp-1 text-xs md:text-xs+ lg:text-sm dark:text-pink-dark">
          {props.level}
        </p>
        <h1 className="mb-3 font-medium line-clamp-2 w-full md:text-base+ lg:text-lg lg:mt-1">
          {props.title}
        </h1>

        <p className="line-clamp-1text-gray-700 block text-sm text-black-tertiary md:text-sm+ lg:text-base dark:text-white-tertiary">
          Students: {props.students}
        </p>
        <p className="h-6 line-clamp-1 text-gray-700 block text-sm text-black-tertiary md:text-sm+ lg:text-base dark:text-white-tertiary">
          Instructors: {props.instructors}
        </p>
        <p className="h-6 line-clamp-1 text-gray-700 block text-sm text-black-tertiary md:text-sm+ lg:text-base dark:text-white-tertiary">
          Topics: {props.topics}
        </p>
      </div>
    </div>
  );
}
