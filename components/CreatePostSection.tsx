"use client";
import { openModal } from "@/redux/features/PostModalSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { PhotoIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { removeInputImage, setInput } from "@/redux/features/PostInputSlice";

function CreatePostSection() {
  const dispatch = useDispatch<AppDispatch>();

  const inputTextValue = useAppSelector(
    (state) => state.PostInputSlice.value.postInputText
  );

  const inputImage = useAppSelector(
    (state) => state.PostInputSlice.value.postInputImage
  );
  
  const { data: session } = useSession();
  const name = session?.user?.name;
  const firstName = name?.split(" ")[0];

  function openPostModal() {
    dispatch(openModal());
  }

  return (
    <div className="flex flex-col justify-center gap-2 p-3 w-full bg-white rounded-md">
      <div className="flex items-center space-x-2 rounded-full">
        {session ? (
          <Image
            src={session.user?.image as string}
            alt={session.user?.name as string}
            width={40}
            height={40}
            className="rounded-full object-contain group-hover:brightness-110 duration-200"
          />
        ) : (
         <div className ='bg-gray-200 rounded-full h-10 w-11'></div>
        )}
        <input
          onClick={openPostModal}
          className="w-full flex-grow bg-gray-100 cursor-pointer hover:bg-gray-200 text-gray-500 font-normal text-base py-2 px-4 rounded-full focus:outline-none border-none outline-none"
          value={inputTextValue}
          readOnly={true}
          placeholder={`What's on your mind ${session ? firstName : "user"}?`}
        />
        {inputImage && <Image onClick={openPostModal} src={inputImage} alt={inputImage} width={50} height={50} className ='object-contain rounded-md hover:scale-105 duration-200 animate-pulse transition transform filter hover:brightness-110 cursor-pointer' />}
      </div>
      <hr />
      <div className="w-full flex items-center justify-between space-x-1">
        <div className="w-full flex items-center justify-center space-x-1 hover:bg-gray-100 rounded-md cursor-pointer duration-100 px-2 sm:px-3 py-2">
          <VideoCameraIcon className="h-6 text-red-600" />
          <h1 className="text-sm lg:text-base whitespace-nowrap text-gray-600 font-semibold">
            Live video
          </h1>
        </div>
        <div onClick={openPostModal} className="w-full flex items-center justify-center space-x-1 hover:bg-gray-100 rounded-md cursor-pointer duration-100 px-2 sm:px-3  py-2">
          <PhotoIcon className="h-6 text-green-600" />
          <h1 className="text-sm lg:text-base whitespace-nowrap text-gray-600 font-semibold">
            Photo/video
          </h1>
        </div>
        <div className="w-full flex items-center justify-center space-x-1 hover:bg-gray-100 rounded-md cursor-pointer duration-100 p-2">
          <FaceSmileIcon className="h-6 text-yellow-500" />
          <h1 className="text-[15px] whitespace-nowrap text-gray-600 font-semibold">
            Feeling/activity
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CreatePostSection;
