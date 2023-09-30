export default function SearchResultCard(props) {
  return (
    <div className="mx-auto px-4 border-b-2 border-gray-light-500 py-2 h-11 w-full hover:bg-gray-light-700 dark:border-gray-dark-500 dark:hover:bg-gray-dark-700">
      <p className='overflow-clip text-black-secondary dark:text-white-secondary'>
        {props.title}
      </p>
    </div>
  )
}