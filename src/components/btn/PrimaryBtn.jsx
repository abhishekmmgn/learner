export default function PrimaryBtn(props) {
  return (
    <button className="min-w-fit font-medium text-white h-11 max-w-sm flex items-center justify-center text-base bg-red-500 container rounded-xl hover:bg-red-500/90 focus:ring focus:ring-red-500 focus:outline-none md:text-base+ md:h-12">{props.title}</button>
  )
}
