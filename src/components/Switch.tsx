import { useState } from "react";

export default function Switch() {
  const [toggle, setToggle] = useState(false);
  console.log("Switch -> toggle", toggle);
  return (
    <div onClick={() => setToggle(!toggle)}>
      {toggle ? (
        <span className="border-2 rounded-full border-gray-200 bg-gray-200 flex items-center cursor-pointer w-12 justify-start">
          <span className="rounded-full border w-6 h-6 border-gray-200 bg-white shadow"></span>
        </span>
      ) : (
        <span className="border-2 rounded-full border-red-500 bg-red-500 flex items-center cursor-pointer w-12 bg-green justify-end">
          <span className="rounded-full border w-6 h-6 border-red-500 bg-white shadow"></span>
        </span>
      )}
    </div>
  );
}
