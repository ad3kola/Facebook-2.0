"use client";
import Image from "next/image";
import React, { useState } from "react";
import fblogo from "@/assets/facebooklogo.png";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Bars3Icon as OutlineBars3Icon } from "@heroicons/react/24/outline";
import {
  UserIcon,
  Bars3Icon as SolidBars3Icon,
} from "@heroicons/react/24/solid";
import { HeaderCenteredLinks, HeaderRightLinks } from "@/utils/Header";
import HeaderCenteredLink from "./HeaderCenteredLink";
import HeaderRightLink from "./HeaderRightLink";
import { closeSideBar, openSideBar } from "@/redux/features/SideBarSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const showSidebar = useAppSelector(
    (state) => state.SideBarSlice.value.opensidebar
  );

  const [active, setActive] = useState<string>(HeaderCenteredLinks[0].name);

  const changeActiveState = (name: string): void => {
    setActive(name);
  };

  const handleSignOut = (): void => {
    signOut();
  };

  return (
    <header className="bg-white shadow px-5 flex items-center justify-between fixed top-0 left-0 right-0 py-2 md:py-0 z-50">
      {/* Header Left */}
      <div className="flex flex-shrink-0 items-center space-x-2">
        <Image
          src={fblogo}
          alt="Facebook Logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <form className="flex items-center py-2 px-3 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200">
          <MagnifyingGlassIcon className="h-5 text-gray-400" />
          <input
            type="search"
            id="search"
            placeholder="Search Facebook"
            className="hidden lg:block placeholder:font-light placeholder:text-gray-700 placeholder:capitalize bg-transparent font-light border-none outline-none focus:outline-none  px-2 py-1 text-sm"
          />
        </form>
        <div
          className={`md:flex lg:hidden ${
            showSidebar ? "bg-gray-100" : "hover:bg-gray-100"
          } p-1 cursor-pointer duration-200 rounded-full`}
        >
          {!showSidebar ? (
            <OutlineBars3Icon
              onClick={() => dispatch(openSideBar())}
              className="h-8 text-gray-700 cursor-pointer hover:bg-gray-100 rounded-full"
            />
          ) : (
            <SolidBars3Icon
              onClick={() => dispatch(closeSideBar())}
              className="h-8 text-blue-700 cursor-pointer hover:bg-gray-100 rounded-full"
            />
          )}
        </div>
      </div>
      {/* Header Center */}
      <div className="flex items-center flex-grow justify-center">
        <div className="flex items-center mx-auto w-full justify-center space-x-2">
          {HeaderCenteredLinks.map((link, indx) => (
            <HeaderCenteredLink
              key={indx}
              name={link?.name}
              changeActiveState={changeActiveState}
              Icon={link?.Icon}
              active={active}
            />
          ))}
        </div>
      </div>
      {/* Header Right */}
      <div className="flex items-center space-x-2">
        {HeaderRightLinks.map((link, indx) => (
          <HeaderRightLink
            key={indx}
            active={""}
            name={link.name}
            Icon={link.Icon}
          />
        ))}
        {session ? (
          <>
            <div
              onClick={handleSignOut}
              className="group flex relative flex-col items-center whitespace-nowrap rounded-full cursor-pointer justify-center"
            >
              <Image
                src={session.user?.image as string}
                alt={session.user?.name as string}
                width={40}
                height={40}
                className="rounded-full object-contain group-hover:brightness-110 duration-200"
              />
              <h1 className="text-center absolute top-12 z-60 left-1/2 -translate-x-1/2 group-hover:block hidden bg-neutral-600 px-3 py-2 text-xs text-white rounded-lg">
                Sign Out
              </h1>
            </div>
          </>
        ) : (
          <>
            <div className="bg-gray-200 rounded-full h-11 w-11"></div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
