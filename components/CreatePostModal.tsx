"use client";
import toast, { Toaster } from "react-hot-toast";
import { PostsCollectionRef, storage } from "@/config/firebase";
import {
  clearAllInput,
  removeInputImage,
  setInput,
} from "@/redux/features/PostInputSlice";
import { closeModal, openModal } from "@/redux/features/PostModalSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { Dialog, Transition } from "@headlessui/react";
import {
  GifIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
  PhotoIcon,
  UserPlusIcon,
  XCircleIcon,
  MinusIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/solid";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { ChangeEvent, Fragment, MouseEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

export default function CreatePostModal() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: session } = useSession();
  const name = session?.user?.name;
  const firstName = name?.split(" ")[0];
  const [inputValue, setInputValue] = useState<string>("");
  const filePickerRef = useRef<HTMLInputElement | null>(null);
  const [postImage, setPostImage] = useState<string | null>(null);
  const [blobURL, setBlobURL] = useState<string | null>(null);
  const isButtonEnabled = inputValue;
  const [isPostUploading, setIsPostUploading] = useState<boolean>(false);
  const isOpen = useAppSelector(
    (state) => state.PostModalSlice.value.openPostModal
  );

  const closePostModal = () => {
    dispatch(setInput({ text: inputValue, image: blobURL }));
    dispatch(closeModal());
  };

  const openPostModal = () => {
    dispatch(openModal());
  };

  const sendPost = async (e: MouseEvent<HTMLButtonElement>) => {
    console.log('clicked')
    e.preventDefault();
    if (!inputValue) return;
  
    setIsPostUploading(true);
  
    try {
      await addDoc(PostsCollectionRef, {
        name,
        email: session?.user?.email,
        profileimage: session?.user?.image,
        postimage: postImage,
        inputmessage: inputValue,
        createdAt: serverTimestamp(),
      });
  
      setIsPostUploading(false);
      setPostImage(null);
      setBlobURL(null);
      setInputValue('');
      toast.success('Post Uploaded Successfully', {
        duration: 2000,
        position: 'top-center',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      dispatch(closePostModal);
      dispatch(clearAllInput());
      setIsPostUploading(false);
    } catch (error) {
      console.error("Error uploading post:");
      setIsPostUploading(false);
      toast.error('Oops, Error Uploading Post');
      // You can also update the state or dispatch an action to indicate the error to the user
    }
  };
  
  const addImageToPost = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
  
    const file = files[0];
    const reader = new FileReader();
  
    reader.onload = (event) => {
      setBlobURL(event.target?.result as string);
    };
  
    reader.readAsDataURL(file);
  
    const imageRef = ref(storage, `facebook-post-images/${file.name + v4()}`);
  
    try {
      await uploadBytes(imageRef, file);
      const url = await getDownloadURL(imageRef);
      setPostImage(url);
    } catch (error) {
      console.error("Error uploading image");
      toast.error('Oops, Error Uploading Post');
      // You can also update the state or dispatch an action to indicate the error to the user
    }
  };
  

  const removeImageFromPost = () => {
    dispatch(removeInputImage());
    setBlobURL(null);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closePostModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white/80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center mx-auto justify-center p-4 text-center relative">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md sm:max-w-lg transform overflow-hidden rounded-none sm:rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold text-center p-2 leading-6 text-gray-900 flex items-center justify-center relative"
                  >
                    Create Post
                    <XCircleIcon
                      onClick={closePostModal}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 h-10 text-gray-300 hover:text-gray-400 duration-100 cursor-pointer"
                    />
                  </Dialog.Title>
                  <hr className="border border-bg-gray-700" />
                  <div className="w-full mt-1 ">
                    <div className="flex w-full space-x-3 py-1 ">
                      <Image
                        src={session?.user?.image as string}
                        alt={session?.user?.name as string}
                        width={50}
                        height={50}
                        className="rounded-full object-contain"
                      />
                      <div className="text-gray-900 -space-y-1 flex flex-col justify-center">
                        <h2 className="text-lg font-semibold">
                          {session?.user?.name}
                        </h2>
                        <h2 className="text-sm font-semibold">
                          {session?.user?.email}
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-1">
                    <form className="bg-white flex flex-col">
                      <input
                        type="file"
                        hidden
                        onChange={addImageToPost}
                        ref={filePickerRef as React.RefObject<HTMLInputElement>}
                      />
                      {blobURL && (
                        <div className="relative w-full h-56">
                          <Image
                            src={blobURL}
                            alt={blobURL}
                            fill={true}
                            className="object-cover w-full h-full"
                          />
                          <div
                            onClick={removeImageFromPost}
                            className="absolute -right-1 -top-1 z-20 bg-white rounded-full p-1 flex items-center justify-center font-extrabold text-red-500 text-base cursor-pointer duration-100 transform transition hover:scale-105 group"
                          >
                            <MinusIcon className="h-2 text-blue-700 group-hover:text-red-800" />
                          </div>
                        </div>
                      )}
                      <textarea
                        className="text-xl mt-1 text-gray-800 placeholder:text-gray-600 tracking-wider border-none outline-none font-medium placeholder:font-medium bg-transparent focus:outline-none h-40 rounded-lg py-2 resize-none"
                        value={inputValue}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                          setInputValue(e.target.value)
                        }
                        placeholder={`What's on your mind, ${firstName}?`}
                      ></textarea>

                      <div className="border border-gray-200 rounded-md inset-3 cursor-pointer mt-1">
                        <div className="w-full px-4 py-2 space-x-4 flex items-center justify-between">
                          <h1 className="text-[10px] sm:text-sm md:text-base font-semibold">
                            Add to your post
                          </h1>
                          <div className="flex items-center space-x-1 md:space-x-2 ">
                            <div
                              onClick={() => filePickerRef.current?.click()}
                              className="rounded-full group hover:bg-gray-100 cursor-pointer duration-200 p-1 relative"
                            >
                              <h1 className="absolute -top-10 shadow-lg whitespace-nowrap z-20 left-1/2 -translate-x-1/2 group-hover:block hidden bg-neutral-700 px-3 py-2 text-xs text-white rounded-lg">
                                Photo/video
                              </h1>
                              <PhotoIcon className="text-green-600 h-7" />
                            </div>
                            <div className="rounded-full group hover:bg-gray-100 cursor-pointer duration-200 p-1 relative">
                              <h1 className="absolute -top-10 shadow-lg whitespace-nowrap z-20 left-1/2 -translate-x-1/2 group-hover:block hidden bg-neutral-700 px-3 py-2 text-xs text-white rounded-lg">
                                Tag people
                              </h1>

                              <UserPlusIcon className="text-blue-600 h-7" />
                            </div>
                            <div className="rounded-full group hover:bg-gray-100 cursor-pointer duration-200 p-1 relative">
                              <h1 className="absolute -top-10 shadow-lg whitespace-nowrap z-20 left-1/2 -translate-x-1/2 group-hover:block hidden bg-neutral-700 px-3 py-2 text-xs text-white rounded-lg">
                                Feeling/activity
                              </h1>

                              <FaceSmileIcon className="text-yellow-500 h-7" />
                            </div>
                            <div className="rounded-full group hover:bg-gray-100 cursor-pointer duration-200 p-1 relative">
                              <h1 className="absolute -top-10 shadow-lg whitespace-nowrap z-20 left-1/2 -translate-x-1/2 group-hover:block hidden bg-neutral-700 px-3 py-2 text-xs text-white rounded-lg">
                                Check in
                              </h1>

                              <MapPinIcon className="text-red-600 h-7" />
                            </div>
                            <div className="rounded-full group hover:bg-gray-100 cursor-pointer duration-200 p-1 relative">
                              <h1 className="absolute -top-10 shadow-lg whitespace-nowrap z-20 left-1/2 -translate-x-1/2 group-hover:block hidden bg-neutral-700 px-3 py-2 text-xs text-white rounded-lg">
                                GIF
                              </h1>

                              <GifIcon className="text-emerald-500 h-7" />
                            </div>
                            <div className="rounded-full group hover:bg-gray-100 cursor-pointer duration-200 p-1 relative">
                              <h1 className="absolute -top-10 shadow-lg shadow-gray-200 whitespace-nowrap z-20 left-1/2 -translate-x-1/2 group-hover:block hidden bg-neutral-700 px-3 py-2 text-xs text-white rounded-lg">
                                More
                              </h1>

                              <EllipsisHorizontalIcon className="text-gray-600 h-7" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="mt-4 w-full">
                    <button
                      type="button"
                      disabled={!isButtonEnabled}
                      className={`w-full inline-flex justify-center rounded-md border border-transparent ${
                        !isPostUploading
                          ? "bg-red-600 text-white cursor-pointer"
                          : "bg-gray-200 text-gray-400 capitalize cursor-not-allowed"
                      } px-4 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2`}
                      onClick={sendPost}
                    >
                      {isPostUploading
                        ? "Uploading, please wait..."
                        : "Upload Post"}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
