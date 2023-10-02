export default function SearchResultCard(props) {
  return (
    <div className="mx-auto px-4 border-b-2 py-2 h-11 w-full">
      <p className='overflow-clip line-clamp-1 lg:text-lg'>
        {props.title}
      </p>
    </div>
  )
}