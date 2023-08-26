import React from 'react';
import { FaBookmark, FaCircle, FaEllipsisV } from 'react-icons/fa';
import img1 from '../../assets/image/Avalon-PNG1.png'
import img2 from '../../assets/image/Avalon-PNG2.png'
const DashBoardPart3 = () => {
    return (
        <div className='px-4 py-8'>
            <div>
                <div className='flex justify-between items-center mb-3'>
                    <div >
                        <h2 className='text-3xl font-semibold'>Jobs Recommandations for You</h2>
                    </div>
                    <div>
                        <FaEllipsisV className='text-2xl'></FaEllipsisV>
                    </div>
                </div>
                <div className='flex justify-between items-center mb-3'>
                    <div >
                        <div className='flex font-thin text-gray-500 text-sm space-x-2'>
                            <li>UX Designer</li>
                            <li >₹ 50K-₹ 70k</li>
                            <li >Mumbai,Bengaluru,Pune</li>
                        </div>
                    </div>
                    <div>
                        <p className='text-blue-700'>See all</p>
                    </div>
                </div>
 
            </div>

            <div className='rounded-lg shadow-md bg-white shadow-gray-400 '>
                <div className='grid grid-cols-1 shadow-gray-400 border-b-2 border-gray-300 p-2 my-5 py-5 px-3 relative'>
                    <FaBookmark className='absolute top-2 right-4'></FaBookmark>

                    <div className='flex justify-between px-4 py-2'>
                        <div className='flex gap-4'>
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img src={img1} alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <h5 className='font-semibold'>UX Designer</h5>
                                <p className='font-thin text-gray-500 text-sm'>Avalon Meta,Mumbai</p>
                                <div className='flex text-xs space-x-1 items-center'>
                                    <p className='text-gray-600'>3 Weeks Ago</p>
                                    <FaCircle className='text-[#B90202]'></FaCircle>
                                    <p className='text-[#B90202]'>100 Applicants</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center justify-end '>
                            <button className=' rounded-2xl border-2 border-[#2CC369] py-2 px-4 text-xs me-2 text-[#2CC369]'>Apply Now</button>
                        </div>

                    </div>
                </div>
                {/* sec2  */}
                <div className='grid grid-cols-1 shadow-gray-400 border-b-2 border-gray-300 p-2 py-5  my-5 px-3 relative'>
                    <FaBookmark className='absolute top-2 right-4'></FaBookmark>

                    <div className='flex justify-between px-4 py-2'>
                        <div className='flex gap-4'>
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img src={img2} alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <h5 className='font-semibold'>UX Designer</h5>
                                <p className='font-thin text-gray-500 text-sm'>CRED,Bengaluru</p>
                                <div className='flex text-xs space-x-1 items-center'>
                                    <p className='text-gray-600'>1 Weeks Ago</p>
                                    <FaCircle className='text-[#068923]'></FaCircle>
                                    <p className='text-[#068923]'>12 Applicants</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center justify-end '>
                            <button className=' rounded-2xl border-2 border-[#2CC369] py-2 px-4 text-xs me-2 text-[#2CC369]'>Apply Now</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardPart3;