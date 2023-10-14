import { Progress } from "../ui/progress"

export default function EnrolledCourseCard(props) {
  return (
    <div className='border w-[calc(100%-32px)] max-w-[372px] flex flex-col bg-background rounded-lg'>
      <img
        src={props.photo}
        alt="Course Photo"
        className="bg-background w-full object-cover aspect-video rounded-t-lg"
        loading="lazy"
      />
      <div className="h-32 flex flex-col justify-center px-3 w-full overflow-clip md:h-36">
        <p className="mb-1 text-primary line-clamp-1 text-sm lg:text-base">{props.level}</p>
        <h1 className="mb-3 font-medium line-clamp-2 w-full lg:text-lg">{props.title}</h1>
        
        <Progress value={props.progress} />
      </div>
    </div>
  )
}