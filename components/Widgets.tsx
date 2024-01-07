import scholarship from '@/assets/Football Scholarships.jpg'
import  codingbootcamps from '@/assets/codingbootcamps.jpg'
import { EllipsisHorizontalIcon, PlusIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

function Widgets() {
    return (
        <section className='hidden md:block mt-5 w-[300px] py-1 flex-shrink-0 '>
            <h2 className ='text-gray-600 capitalize font-semibold text-base px-4'>Sponsored</h2>
            <div className ='flex flex-col w-full mt-2'>
                <div className='group w-full flex items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer rounded-lg relative'>
                    <div className='hidden group-hover:block absolute top-2 right-2 z-20 rounded-full bg-white p-2 border border-gray-300 shadow-gray-300'>
                    <EllipsisHorizontalIcon className ='h-7 text-gray-800'/>
                    </div>
                    <Image src={scholarship} alt='Scholarship Ad' width={140} height={170} className='rounded-lg object-cover' />
                    <div className='flex flex-col justify-center whitespace-nowrap'>
                        <h3 className='whitespace-normal break-words text-base  font-semibold capitalize'>Football Scholarships in England, <br /> Appy Now</h3>
                        <p className='text-xs font-normal text-gray-600'>liverpoolfctrials.coom</p>
                    </div>
                </div>
                <div className='group w-full flex items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer rounded-lg relative'>
                    <div className='hidden group-hover:block absolute top-2 right-2 z-20 rounded-full bg-white p-2 border border-gray-300 shadow-gray-300'>
                    <EllipsisHorizontalIcon className ='h-7 text-gray-800'/>
                    </div>
                    <Image src={codingbootcamps} alt='Coding & Programming Ad' width={140} height={170} className='rounded-lg object-cover' />
                    <div className='flex w-full flex-col justify-center whitespace-nowrap'>
                        <h3 className='whitespace-normal break-words leading-5 text-base font-semibold capitalize'>Learn Coding now by joining a free bootcamp</h3>
                        <p className='text-xs font-normal text-gray-600 px-2'>freecodeacademy</p>
                    </div>
                </div>
            </div>
            <hr className ='border border-gray-300 w-[90%] mx-auto mt-3'/>
            <div className='flex flex-col mt-2 px-4'>
            <h2 className ='text-gray-600 capitalize font-semibold text-base'>Group Conversations</h2>
                <div className='flex items-center space-x-2 mt-1 cursor-pointer rounded-lg hover:bg-gray-300 transition diration-200 p-2'>
                    <div className ='bg-gray-200 rounded-full p-2'>
                        <PlusIcon className='h-4 text-gray-800'/>
                    </div>
                    <h3 className ='text-base font-medium text-neutral-900 capitalize'>Create New Group</h3>
                </div>
            </div>
        </section>
    )
}

export default Widgets;