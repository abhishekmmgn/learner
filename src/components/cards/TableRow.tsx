type PropsType = {
  image?: {image: string, alt: string};
  title: string;
}

function TableRow(props: PropsType) {
  return (
    <div className="border-b-2 bg-background px-4 h-11 w-full flex items-center justify-between hover:bg-secondary">
      <div className='flex gap-2 items-center'>
        {props.image && (
          <img
            src={props.image.image}
            alt={`${props.image.alt} icon`}
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
  
export default TableRow;