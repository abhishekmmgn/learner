export default function CourseCard(props) {
  return (
    <div className="border min-w-[calc(100%-32px)] w-full max-w-sm flex flex-col bg-background rounded-lg sm:min-w-[360px] sm:max-w-sm">
      <img
        src={props.photo}
        alt="Course Photo"
        className="bg-background w-full object-cover aspect-video rounded-t-lg"
      />
      <div className="h-44 flex flex-col justify-center px-3 w-full overflow-clip md:h-[196px] py-4">
        <p className="mb-1 text-primary line-clamp-1 text-sm">
          {props.level}
        </p>
        <h1 className="mb-3 font-medium line-clamp-2 w-full md:text-lg md:mt-1">
          {props.title}
        </h1>

        <p className="line-clamp-1 text-gray-700 block text-sm md:text-base">
          Students: {props.students}
        </p>
        <p className="my-[0.5px] line-clamp-1 text-gray-700 block text-sm md:text-base md:my-[1px]">
          Instructors: {props.instructors}
        </p>
        <p className="line-clamp-1 text-gray-700 block text-sm md:text-base">
          Topics: {props.topics}
        </p>
      </div>
    </div>
  );
}
