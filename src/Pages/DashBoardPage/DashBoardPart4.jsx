import React from 'react';
import { FaChevronDown, FaEllipsisV, FaQuestionCircle } from 'react-icons/fa';
import img1 from '../../assets/image/Rectangle302.png'
import img2 from '../../assets/image/Group27.png'
import img3 from '../../assets/image/groww.png'
import line1 from '../../assets/image/line1.png'
import line2 from '../../assets/image/line2.png'
import line3 from '../../assets/image/line3.png'
const DashBoardPart4 = () => {
    return (
        <div className=' py-2'>
            <div>
                <div className='flex justify-between items-center '>
                    <div >
                        <h2 className='text-2xl font-semibold'>Upcoming Events</h2>
                    </div>
                    <div>
                        <FaEllipsisV className='text-xl'></FaEllipsisV>
                    </div>
                </div>


                {/* new  */}
                <div>
                    <div className='rounded-lg shadow-gray-400  shadow-md bg-white px-4 py-4'>
                        <div className='grid grid-cols-2 '>
                            <div></div>
                            <div className='bg-white font-semibold text-black px-4 py-1 border-2 border-gray-300 rounded-md justify-center text-sm flex items-center'>
                                <span>August, 2022 </span><FaChevronDown className='ms-1'></FaChevronDown>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 shadow-gray-400  shadow-md  my-2 rounded-lg'>
                        <div className='ps-2'>
                                <div className='grid grid-cols-2'>
                                    <div className="avatar flex flex-col justify-center">
                                        <div className="w-16 rounded">
                                            <img src={img1} alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                        <p className='ms-3 font-semibold'>Pesto</p>
                                    </div>
                                    <div className=''>
                                        <div className='shadow-sm shadow-gray-400 h-full p-3 text-center relative'>
                                            <h5 className='text-black'>Protfolio Presentation</h5>
                                            <p className='font-semibold text-[#BC0F0F]'>Tomorrow</p>
                                            <p className='font-semibold'>(9:00AM - 11.00 AM)</p>
                                            <img className='absolute top-5 -left-2 w-2' src={line1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 shadow-gray-400  shadow-md  my-2 rounded-lg'>
                        <div className='ps-2'>
                                <div className='grid grid-cols-2'>
                                    <div className="avatar flex flex-col justify-center">
                                        <div className="w-16 rounded">
                                            <img src={img2} alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                        <p className=' font-semibold'>Vernacular.Ai</p>
                                    </div>
                                    <div className=''>
                                        <div className=' shadow-sm shadow-gray-400 h-full p-3 text-center relative'>
                                            <h5 className='font-semibold'>Group Discussion</h5>
                                            <p className='font-thin text-gray-700 text-sm'>25th August, 2022</p>
                                            <p className='font-bold'>(9:00AM - 11.00 AM)</p>
                                            <img className='absolute top-5 -left-2 w-2' src={line2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 shadow-gray-400  shadow-md  my-2 rounded-lg'>
                            <div className='ps-2'>
                                <div className='grid grid-cols-2'>
                                    <div className="avatar flex flex-col justify-center">
                                        <div className="w-16 rounded">
                                            <img src={img3} alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                        <p className='ms-3 font-semibold'>Groww</p>
                                    </div>
                                    <div className=''>
                                    <div className=' shadow-sm shadow-gray-400 h-full p-3 text-center relative'>
                                            <h5 className='font-semibold'>Mok Interview Session 1</h5>
                                            <p className='font-thin text-gray-700 text-sm'>29th August, 2022</p>
                                            <p className='font-bold'>(2:00PM - 4.00 PM)</p>
                                            <img className='absolute top-5 -left-2 w-2' src={line2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardPart4;