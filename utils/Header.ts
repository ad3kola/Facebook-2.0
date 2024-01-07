import { CommandLineIcon, UserGroupIcon, UsersIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { AdjustmentsHorizontalIcon, BellIcon, ChatBubbleOvalLeftEllipsisIcon, HomeIcon } from "@heroicons/react/24/solid";

type HeaderLinksProps = {
    name: string,
    Icon: typeof HomeIcon | typeof UsersIcon | typeof VideoCameraIcon | typeof  UserGroupIcon | typeof CommandLineIcon | typeof AdjustmentsHorizontalIcon | typeof ChatBubbleOvalLeftEllipsisIcon, 
     active?: string,
}

export const HeaderCenteredLinks = [
    {name: 'Home', Icon: HomeIcon},
    {name: 'Friends', Icon: UsersIcon},
    {name: 'Video', Icon: VideoCameraIcon},
    {name: 'Groups', Icon: UserGroupIcon},
    {name: 'Gaming', Icon: CommandLineIcon}
]

export const HeaderRightLinks= [
    {name: 'Menu', Icon: AdjustmentsHorizontalIcon},
    {name: 'Messenger', Icon: ChatBubbleOvalLeftEllipsisIcon},
    {name: 'Notifications', Icon: BellIcon},
]