import TableRowRight from "../components/cards/TableRowRight";
import TertiaryBtn from "../components/btn/TertiaryBtn";

export default function Profile() {
  const name = "John Doe";
  const email = "johndoe123@yahoo.com";
  return (
    <div className="px-4 gap-6 mx-auto bg-[#f2f2f2] py-4 max-w-[720px] w-full rounded-lg flex flex-col items-center">
      <div className="flex flex-col gap-3">
        <img
          src="http://picsum.photos/200/300"
          className="w-28 h-28 rounded-full mx-auto"
        />
        <h1 className="text-center text-2xl font-medium">{name}</h1>
        <p className="-mt-2 text-center text-lg font-medium text-gray-800">{email}</p>
      </div>
      <div className="w-full space-y-3">
        <TableRowRight title='Dark Mode' item= 'switch' />
        <TertiaryBtn title='Logout' />
      </div>
    </div>
  );
}
