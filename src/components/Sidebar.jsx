import { GoSearch, GoTelescope } from 'react-icons/go';
import { BiLibrary, BiBadgeCheck } from 'react-icons/bi';
import { TbLayoutSidebarLeftCollapse } from 'react-icons/tb';

export default function Sidebar() {
  return (
    <div className="hidden sticky border-r border-r-neutral-200 bg-[#f2f2f2] top-0 left-0 py-4 px-2 min-h-screen w-[200px] md:flex flex-col">
      <TbLayoutSidebarLeftCollapse className='mb-2 ml-4 text-right h-5 text-xl text-gray-500 hover:text-gray-700' />
      <div className="pl-4 rounded-lg h-9 w-full flex flex-row items-center justify-start gap-2 hover:bg-gray-300 focus:bg-gray-300">
        <GoTelescope className="text-base text-gray-600 hover:text-gray-600" />
        <p className='text-base font-medium text-gray-600 hover:text-gray-600'>Explore</p>
      </div>
    </div>
  )
}