import { ClockIcon, UserGroupIcon, UsersIcon } from "@heroicons/react/24/outline";
import { HeartIcon, BookmarkIcon, CalendarDaysIcon, ChartBarIcon, CreditCardIcon, FlagIcon, HomeIcon, TvIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

type SidebarLinksProps = {
  name: string,
  Icon: typeof HomeIcon | typeof UsersIcon | typeof CreditCardIcon | typeof  UserGroupIcon | typeof TvIcon | typeof FlagIcon | typeof ClockIcon | typeof BookmarkIcon | typeof CalendarDaysIcon | typeof ChartBarIcon | typeof HeartIcon | typeof ChevronDownIcon, 
   active?: string,
}

function SidebarLink({name, Icon,}: SidebarLinksProps) {
  return (
    <div className='py-2 px-3 flex items-center space-x-3 hover:bg-gray-200 cursor-pointer duration-200 rounded-lg'>
      <Icon className = {`h-6 text-blue-600`}/>
      <h1 className ='text-neutral-950 font-semibold text-sm'>{name}</h1>
    </div>
  )
}

export default SidebarLink