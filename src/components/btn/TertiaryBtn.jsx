export default function TertiaryBtn(props) {
  return (
    <button className="font-medium bg-transparent text-red-500 h-11 max-w-sm flex items-center justify-center text-base container rounded-xl hover:bg-red-500/10 focus:ring focus:ring-red-500/10 focus:outline-none md:text-base+ md:h-12">{props.title}</button>
  )
}
