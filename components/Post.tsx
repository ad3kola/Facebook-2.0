import { LikeCommentShare } from "@/utils/MainFeed";
import { HeartIcon } from "@heroicons/react/16/solid";
import { HandThumbUpIcon } from "@heroicons/react/16/solid";
import {
  ArrowUturnRightIcon,
  ChatBubbleOvalLeftIcon,
  EllipsisHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Timestamp } from "firebase/firestore";
import moment from "moment";
import Image from "next/image";

type PostProps = {
  id: string;
  message: string;
  username: string;
  useremail: string;
  userprofileimage: string;
  postimage: string;
  createdAt: Timestamp;
};

function Post({
  id,
  message,
  username,
  useremail,
  userprofileimage,
  postimage,
  createdAt,
}: PostProps) {
  function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const likesCount = random(0, 200);
  const thumbsUpCount = random(0, 200);
  const commentsCount = random(0, 500);
  const forwardedCount = random(0, 500);
  const totalCount = likesCount + thumbsUpCount;

  // So first, convert the createdAt timestamp into milliseconds and
  // Convert the timestamp to Milliseconds
  const createdAtInMillis = createdAt instanceof Timestamp ? createdAt?.toMillis() : null;

  // use the moment package to format it
  const postdate = moment(createdAtInMillis).format("DD MMMM YYYY");

  // console.log(postdate);  Output: "31 December 2023"

  // use the moment package to get the relativetime from now
  const relativetimeposted = moment(createdAtInMillis).fromNow();
  // console.log(relativetimeposted):  Output: "5 hours ago"

  const finaltimestamp = postdate + " · " + relativetimeposted;

  return (
    <>
      <div className="w-full flex flex-col rounded-xl bg-white">
        {/* User Details */}
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center px-2 py-1 space-x-3">
            <Image
              src={userprofileimage}
              alt="Profile Photo"
              width={45}
              height={45}
              className="rounded-full"
            />
            <div className="flex flex-col  h-full gap-1 justify-between ">
              <h2 className="text-base font-semibold text-neutral-950">
                {username}{" "}
                <span className="text-blue-600 cursor-pointer ml-1">
                  {" "}
                  · Follow
                </span>
              </h2>
              <h2 className="text-xs font-normal text-neutral-600 -mt-1">
                {`Suggested for you · ${
                  createdAt ? finaltimestamp : "loading"
                }`}
              </h2>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer transition duration-100 flex items-center justify-center ">
              <EllipsisHorizontalIcon className="h-7 text-gray-800" />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer transition duration-100 flex items-center justify-center">
              <XMarkIcon className="h-7 text-gray-800" />
            </div>
          </div>
        </div>
        {/* Message */}
        <h1 className="text-base px-5 text-gray-900">{message}</h1>
        {/* Post Image */}
        {postimage && (
          <div className="w-full relative h-[500px] sm:[550px] lg:h-[600px] mt-2">
            <Image
              objectFit="cover"
              src={postimage}
              alt={`A message displaying: ${message}`}
              layout="fill"
              className="object-cover h-fulll"
            />
          </div>
        )}
        {/* Likes & Thumbs Up */}
        <div className="flex flex-col px-5 py-1 mt-2 w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center -space-x-1">
                <div className="p-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center z-20 relative group cursor-pointer">
                  <HandThumbUpIcon className="h-3 text-white" />
                  <p className="hidden group-hover:block absolute transform left-1/2 -translate-x-1/2 top-5 bg-gray-800 py-1 px-2 text-white capitlize rounded-lg text-sm">
                    {`${thumbsUpCount}K`}
                  </p>
                </div>
                <div className="p-1 rounded-full bg-gradient-to-r from-red-400 to-red-500 flex items-center justify-center z-10 relative group cursor-pointer">
                  <HeartIcon className="h-3 text-white" />
                  <p className="hidden group-hover:block absolute transform left-1/2 -translate-x-1/2 top-5 bg-gray-800 py-1 px-2 text-white capitlize rounded-lg text-sm">
                    {`${likesCount}K`}
                  </p>
                </div>
              </div>
              <p className="text-base text-gray-700">{`${totalCount}K`}</p>
            </div>
            <div className="flex items-center space-x-1">
              <div className="group flex items-center cursor-pointer justify-center space-x-1 text-gray-700">
                <h1 className="text-base group-hover:underline font-medium">
                  {`${commentsCount}K`}
                </h1>
                <ChatBubbleOvalLeftIcon className="h-5" />
              </div>
              <div className="group flex items-center cursor-pointer justify-center space-x-1 text-gray-700">
                <h1 className="text-base group-hover:underline font-medium">
                  {forwardedCount}
                </h1>
                <ArrowUturnRightIcon className="h-5" />
              </div>
            </div>
          </div>
          <hr className="w-full border-b-1 border-gray-300 mx-auto mt-2" />
          {/* Like, Comment, Share */}
          <div className="flex items-center mt-1 justify-between w-full space-x-2">
            {LikeCommentShare.map(({ name, Icon }) => (
              <div key={name} className="w-full flex items-center justify-center py-2 px-3 rounded-lg space-x-2 cursor-pointer hover:bg-gray-100 transition duration-100">
                <Icon className="h-6 text-gray-600" />
                <p className="text-gray-600 whitespace-nowrap">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
