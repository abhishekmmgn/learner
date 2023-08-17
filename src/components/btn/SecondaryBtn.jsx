export default function SecondaryButton(props) {
  return (
    <button className="font-medium text-red-500 h-11 max-w-sm flex items-center justify-center text-base bg-transparent border-2 border-red-500 container rounded-xl hover:bg-red-500/5 focus:ring focus:ring-red-500/20 focus:outline-none">{props.title}</button>
  )
}