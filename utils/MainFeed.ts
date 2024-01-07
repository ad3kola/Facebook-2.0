import { ArrowUturnRightIcon, ChatBubbleOvalLeftIcon, FaceSmileIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";
import { PhotoIcon, VideoCameraIcon } from "@heroicons/react/24/solid";

interface CreatePostProps {
    name: string,
    Icon: typeof VideoCameraIcon | typeof PhotoIcon | typeof FaceSmileIcon,
    color: string,
}

interface LikeCommentShareProps {
    name: string,
    Icon: typeof HandThumbUpIcon | typeof ChatBubbleOvalLeftIcon | typeof ArrowUturnRightIcon,
}

export const CreatePost: CreatePostProps[] = [
    {name: 'Live Video', Icon: VideoCameraIcon, color: 'text-red-500'},
    {name: 'Live Video', Icon: PhotoIcon, color: 'text-green-500'},
    {name: 'Feeling/activity', Icon: FaceSmileIcon, color: 'text-blue-500'}
]

export const LikeCommentShare: LikeCommentShareProps[] = [
    {name: 'Like', Icon: HandThumbUpIcon},
    {name: 'Comment', Icon: ChatBubbleOvalLeftIcon},
    {name: 'Share', Icon: ArrowUturnRightIcon},
]