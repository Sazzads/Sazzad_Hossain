import React from 'react';
import Lottie from "lottie-react";
import file from '../../assets/BL80JzUKOR.json'
import { FaEllipsisV } from 'react-icons/fa';
const DashBoardPart2 = () => {
 
    return (
        <div className='bg-white px-4 rounded-lg shadow-md'>
            <div className='flex justify-between'>
                <div className='w-72 h-48 mx-auto'>
                    <Lottie animationData={file} loop={true} />
                </div>
                <div className='mt-16'>
                    <FaEllipsisV></FaEllipsisV>
                </div>
            </div>

            <div className='flex justify-between px-2'>
                <h4 className='text-lg font-semibold'>Suggested Sessions</h4>
                <p className='text-blue-700'>See all</p>
            </div>

            <div className='grid grid-cols-1'>
                <div className='flex justify-between px-2 border-b-2 py-2'>
                    <div className='text-center'>
                        <h5 className='font-semibold text-sm'>Mock Interview</h5>
                        <p className='font-thin text-gray-500 text-xs'>24th August,2022</p>
                        <p className='font-semibold text-sm'>(9:00 AM - 11.00 AM)</p>
                    </div>
                    <button className='bg-[#FEB27B] btn-sm rounded-md text-[#894A01]'>Enroll Now</button>
                </div>
                <div className='flex justify-between px-2 border-b-2 py-2'>
                    <div className='text-center'>
                        <h5 className='font-semibold text-sm'>Portfolio Presentation</h5>
                        <p className='font-thin text-gray-500 text-xs'>10th September,2022</p>
                        <p className='font-semibold text-sm'>(12:00 PM - 02.00 PM)</p>
                    </div>
                    <button className='bg-[#FEB27B] btn-sm rounded-md text-[#894A01]'>Enroll Now</button>
                </div>
                <div className='flex justify-between px-2 border-b-2 py-2'>
                    <div className='text-center'>
                        <h5 className='font-semibold text-sm'>Technical Round</h5>
                        <p className='font-thin text-gray-500 text-xs'>10th September,2022</p>
                        <p className='font-semibold text-sm'>(12:00 PM - 02.00 PM)</p>
                    </div>
                    <button className='bg-[#FEB27B] btn-sm rounded-md text-[#894A01]'>Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default DashBoardPart2;