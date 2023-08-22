export default function SearchResultCard(props) {
  return (
    <div className="mx-auto px-4 border-b-2 border-gray-light-500 py-2 h-11 w-full hover:bg-gray-light-700">
      <p className='text-black overflow-clip'>
        {props.title}
      </p>
    </div>
  )
}