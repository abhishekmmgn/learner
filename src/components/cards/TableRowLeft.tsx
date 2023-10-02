function TableRowLeft(props) {
  return (
    <div className="border-b-2 bg-white px-4 h-11 w-full flex items-center justify-between hover:bg-secondary">
      <div className='flex gap-2 items-center'>
        {props.image && (
          <img
            src={props.image}
            alt={`${props.name} icon`}
            className="h-5 w-5"
          />
        )}
        <p className='text-black overflow-clip'>
          {props.title}
        </p>
      </div>
    </div>
  )
}
  
export default TableRowLeft;