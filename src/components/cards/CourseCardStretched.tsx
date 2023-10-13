export default function CourseCardStretched(props) {
  return (
    <div className="border w-full flex bg-background rounded-lg">
      <img
        src={props.photo}
        alt="Course Photo"
        className="bg-secondary w-1/3 lg:w-1/4 object-cover aspect-video rounded-l-lg"
      />
      <div className="w-2/3 lg:w-3/4 h-44 flex flex-col justify-center px-3 overflow-clip md:h-[196px] py-4">
        <p className="mb-1 text-primary line-clamp-1 text-sm">
          {props.level}
        </p>
        <h1 className="mb-3 font-medium line-clamp-2 w-full md:text-lg md:mt-1">
          {props.title}
        </h1>

        <p className="line-clamp-1 text-gray-700 block text-sm md:text-sm+ dark:text-gray-300">
          Students: {props.students}
        </p>
        <p className="line-clamp-1 text-gray-700 block text-sm md:text-sm+ my-[2px] dark:text-gray-300">
          Instructors: {props.instructors}
        </p>
        <p className="line-clamp-1 text-gray-700 block text-sm md:text-sm+ dark:text-gray-300">
          Topics: {props.topics}
        </p>
      </div>
    </div>
  );
}

