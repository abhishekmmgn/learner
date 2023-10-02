import Switch from "../Switch";

function TableRowRight(props) {
  return (
    <div className="border px-4 h-12 w-100 flex items-center justify-between hover:bg-primary">
      <p className="text-black overflow-clip">{props.title}</p>
      {props.item === "link" && (
        <a
          href={props.syllabus}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer"
        >
          <img src={props.photo} className="h-5 w-5" />
        </a>
      )}
      {props.item === "switch" && (
        <Switch />
      )}
    </div>
  );
}

export default TableRowRight;
