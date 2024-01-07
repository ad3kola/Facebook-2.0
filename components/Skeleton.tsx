import { PhotoIcon } from "@heroicons/react/24/solid";

function Skeleton() {
  return (
    <div className="w-full bg-white  rounded-lg p-4 animate-pulse">
      <div className="flex space-x-3 items-center">
        <div className="w-11 h-11 rounded-full bg-gray-100" />
        <div className="flex flex-col justify-center gap-2">
          <div className="w-40 h-2 bg-gray-100 rounded-full" />
          <div className="w-72 h-2 bg-gray-100 rounded-full" />
        </div>
      </div>
      <div className="w-full h-3 mt-2 bg-gray-100 rounded-2xl" />
      <div className ='w-full mt-3 h-60 bg-gray-100 rounded-md flex items-center justify-center'>
        <PhotoIcon className ='h-16 text-gray-300' />
      </div>
      <div className ='w-full flex items-center justify-between px-2 mt-2'>
        <div className ='flex items-center space-x-1'>
          <div className='h-5 w-5 rounded-full bg-gray-100'/>
          <div className='h-5 w-5 rounded-full bg-gray-100'/>
        </div>
        <div className ='flex items-center space-x-1'>
          <div className='h-5 w-5 rounded-full bg-gray-100'/>
          <div className='h-5 w-5 rounded-full bg-gray-100'/>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
