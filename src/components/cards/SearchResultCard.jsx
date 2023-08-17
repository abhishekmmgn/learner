export default function SearchResultCard(props) {
  return (
    <div className="border-b-2 border-gray-200 py-2 h-11 w-100 hover:bg-gray-100 focus:bg-gray-100">
      <p className='text-black overflow-clip'>
        {props.title}
      </p>
    </div>
  )
}