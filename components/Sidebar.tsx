"use client";
import { BottomSidebarLinks, SidebarLinks } from "@/utils/Sidebar";
import React from "react";
import SidebarLink from "./SidebarLink";
import { UsersIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useAppSelector } from "@/redux/store";

function Sidebar() {
  const { data: session } = useSession();
  const sidebarModalState = useAppSelector(state => state.SideBarSlice.value.opensidebar)
  return (
    <>
    <nav className="w-full lg:w-64 hidden lg:block flex-shrink-0 h-full overflow-hidden">
      <div className="flex flex-col h-full py-4 px-2 justify-between gap-3 overflow-hidden">
        <div className="flex py-2 flex-col gap-1">
          <div className="p-2 flex items-center space-x-3 hover:bg-gray-200 cursor-pointer duration-200 rounded-lg">
            {session ? (
              <>
                <Image
                  src={session.user?.image as string}
                  alt={session.user?.name as string}
                  width={30}
                  height={30}
                  className="rounded-full object-contain"
                />
                <h1 className="text-neutral-950 font-semibold text-sm">
                  {session.user?.name}
                </h1>
              </>
            ) : (
              <div className="flex items-center space-x-3 hover:bg-gray-200 cursor-pointer duration-200 rounded-lg">
                <div className="bg-gray-200 rounded-full h-9 w-9"></div>
                <h1 className="text-neutral-950 font-semibold text-sm">
                  Signing in
                </h1>
              </div>
            )}
          </div>
          {SidebarLinks.map((link, indx) => (
            <SidebarLink key={indx} name={link.name} Icon={link.Icon} />
          ))}
        </div>
        <div className="flex flex-wrap whitespace-nowrap space-x-1 px-2">
          {BottomSidebarLinks.map((link, indx) => (
            <h1
              key={indx}
              className="text-gray-500 hover:text-gray-600 cursor-pointer duration-200 text-xs"
            >
              {link}
            </h1>
          ))}
        </div>
      </div>
    </nav>
    
    {sidebarModalState && (
      <div className="lg:hidden absolute top-2 left-0 right-0 w-full h-full bg-gray-100 z-40">
        <div className="flex flex-col h-full px-4 py-2 gap-3 overflow-hidden">
        <div className="flex px-2 flex-col gap-1">
          <div className="p-2 flex items-center space-x-3 hover:bg-gray-200 cursor-pointer duration-200 rounded-lg">
            {session ? (
              <>
                <Image
                  src={session.user?.image as string}
                  alt={session.user?.name as string}
                  width={30}
                  height={30}
                  className="rounded-full object-contain"
                />
                <h1 className="text-neutral-950 font-semibold text-sm">
                  {session.user?.name}
                </h1>
              </>
            ) : (
              <div className="flex items-center space-x-3 hover:bg-gray-200 cursor-pointer duration-200 rounded-lg">
                <div className="bg-gray-200 rounded-full h-9 w-9"></div>
                <h1 className="text-neutral-950 font-semibold text-sm">
                  Signing in
                </h1>
              </div>
            )}
          </div>
          {SidebarLinks.map((link, indx) => (
            <SidebarLink key={indx} name={link.name} Icon={link.Icon} />
          ))}
        </div>
        <div className="flex flex-wrap whitespace-nowrap space-x-1 px-2 mt-3 ml-0 sm:ml-2 md:ml-5 ">
          {BottomSidebarLinks.map((link, indx) => (
            <h1
              key={indx}
              className="text-gray-500 hover:text-gray-600 cursor-pointer duration-200 text-xs"
            >
              {link}
            </h1>
          ))}
        </div>
      </div>
      </div>
    )}
</>
  );
}

export default Sidebar;
