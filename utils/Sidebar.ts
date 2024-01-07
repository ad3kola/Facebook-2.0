import { ClockIcon, UserGroupIcon, UsersIcon } from "@heroicons/react/24/outline";
import { HeartIcon, BookmarkIcon, CalendarDaysIcon, ChartBarIcon, CreditCardIcon, FlagIcon, HomeIcon, TvIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

type SidebarLinksProps = {
    name: string,
    Icon: typeof HomeIcon | typeof UsersIcon | typeof CreditCardIcon | typeof  UserGroupIcon | typeof TvIcon | typeof FlagIcon | typeof ClockIcon | typeof BookmarkIcon | typeof CalendarDaysIcon | typeof ChartBarIcon | typeof HeartIcon | typeof ChevronDownIcon, 
    color: string,
     active?: string,
}

export const SidebarLinks = [
    {name: 'Find Friends', Icon: UsersIcon},
    {name: 'Feeds', Icon: CreditCardIcon},
    {name: 'Groups', Icon: UserGroupIcon},
    {name: 'Video', Icon: TvIcon},
    {name: 'Memories', Icon: ClockIcon},
    {name: 'Saved', Icon: BookmarkIcon},
    {name: 'Pages', Icon: FlagIcon},
    {name: 'Events', Icon: CalendarDaysIcon},
    {name: 'Ads Manager', Icon: ChartBarIcon},
    {name: 'Fundraisers', Icon: HeartIcon},
    {name: 'See more', Icon: ChevronDownIcon},
]

export const BottomSidebarLinks = [
    'Privacy  ·', 'Terms  ·', 'Advertising  ·', 'Ad choices   ·', 'Cookies  ·' ,   'More  ·', ' · Meta © 2024'
]