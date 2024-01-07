import { CommandLineIcon, UserGroupIcon, UsersIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { AdjustmentsHorizontalIcon, ChatBubbleOvalLeftEllipsisIcon, HomeIcon } from "@heroicons/react/24/solid";

interface HeaderLinkProps {
    name: string,
    Icon:  typeof HomeIcon | typeof UsersIcon | typeof VideoCameraIcon | typeof  UserGroupIcon | typeof CommandLineIcon | typeof AdjustmentsHorizontalIcon | typeof ChatBubbleOvalLeftEllipsisIcon, 
    active: string,
    changeActiveState: (name:string) =>  void,
}


function HeaderLink({name, Icon, active, changeActiveState}: HeaderLinkProps) {

  return (
    <div onClick={() => changeActiveState(name)} className={`${active == name ? 'text-blue-500 border-b-4 border-blue-500 rounded-none' : 'text-gray-500 rounded-lg  hover:bg-gray-100 duration-200'} group hidden md:flex relative flex-col items-center cursor-pointer px-2 md:px-5 lg:px-10 py-3 justify-center gap-2`}>
        <Icon className ='h-6 lg:h-7 ' />
        <h1 className = 'absolute top-14 lg:top-16 z-60 left-1/2 -translate-x-1/2 group-hover:block hidden bg-neutral-700 px-3 py-2 text-xs text-white rounded-lg'>{name}</h1>
     </div>
  )
}

export default HeaderLink


