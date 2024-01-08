import { PlusIcon } from "@heroicons/react/24/outline";
import CreatePostSection from "./CreatePostSection";
import PostsSection from "./PostsSection";

function MainFeedSection() {
  return (
    <div className="flex-grow w-screen max-w-[680px] z-30 flex flex-col items-center overflow-y-scroll scrollbar-hide mt-3">
      <div className="w-full flex flex-col mx-auto items-center py-4 px-2 gap-5">
        {/* Create Story */}
        <div className="whitespace-nowrap bg-white rounded-lg p-2 w-full flex">
          <div className="w-full p-1 cursor-pointer duration-100 hover:bg-gray-200 rounded-lg flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <PlusIcon className="h-6 text-blue-500  rounded-full" />
            </div>
            <div className="flex flex-col h-full justify-center">
              <h2 className="text-lg font-semibold text-neutral-950 capitalize">
                Create Story
              </h2>
              <h3 className="text-base font-normal text-gray-500 -mt-1">
                Share a photo or write something.
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[600px] flex flex-grow flex-col items-center">
          {/* Create a Post */}
          <CreatePostSection />
          <PostsSection />
        </div>
      </div>
    </div>
  );
}

export default MainFeedSection;
