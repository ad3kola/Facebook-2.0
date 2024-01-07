import { CommandLineIcon, UserGroupIcon, UsersIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { AdjustmentsHorizontalIcon, ChatBubbleOvalLeftEllipsisIcon, HomeIcon } from "@heroicons/react/24/solid";

interface HeaderLinkProps {
    name: string,
    Icon:  typeof HomeIcon | typeof UsersIcon | typeof VideoCameraIcon | typeof  UserGroupIcon | typeof CommandLineIcon | typeof AdjustmentsHorizontalIcon | typeof ChatBubbleOvalLeftEllipsisIcon, 
    active?: string,
}


function HeaderRightLink({name, Icon, active}: HeaderLinkProps) {
  return (
    <div className='group z-40 flex relative flex-col items-center bg-gray-200 rounded-full duration-200 cursor-pointer p-2 justify-center gap-2'>
    <Icon className ='h-6 text-gray-800'/>
    <h1 className = 'absolute top-12 left-1/2 -translate-x-1/2 group-hover:block hidden bg-neutral-700 px-3 py-2 text-xs text-white rounded-lg'>{name}</h1>
</div>
  )
}

export default HeaderRightLink