import React from 'react';
import { FaChevronDown, FaCircle, FaQuestionCircle } from 'react-icons/fa';
import img1 from '../../assets/image/Rectangle293.png'
import img2 from '../../assets/image/Rectangle296.png'
import img3 from '../../assets/image/Rectangle298.png'

const DashBoardPart1 = () => {
    return (
        <div className='px-4 py-4'>
            {/* part 1  */}
            <div className='flex justify-between items-center mb-3'>
                <div className='text-3xl font-semibold'>Dashboard</div>
                <div className='flex flex-col items-center'>
                    <h2 className='mb-1 text-black'>Job search status</h2>
 

                </div>
            </div>
            {/* part 2 */}
            <div className='rounded-lg shadow-gray-400  shadow-md bg-white px-4 py-4'>
                <div className='flex justify-between px-2'>
                    <h4 className='text-xl font-semibold'>Applications</h4>
                    <p className='text-blue-700'>See all</p>
                </div>
                <div className='grid grid-cols-1 shadow-gray-400  shadow-md p-2 my-4 px-3 rounded-lg'>
                    <div className='grid grid-cols-3 '>
                        <div className='flex gap-4'>
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img src={img1} alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <div>
                                <h5 className='font-semibold'>Senior Product Designer</h5>
                                <p className='font-thin text-gray-500 text-sm'>techmint, On-Site</p>
                                <p className='text-gray-600'>Bengaluru,India</p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h5 className='font-semibold'>₹ 50K-₹ 70k</h5>
                            <small className='font-thin text-gray-500 text-xs'>Per Month</small>
                        </div>
                        <div className='flex items-center justify-end'>
                            <button className='bg-[#FFAAAA] rounded-lg py-1 px-3 text-xs me-2 text-red-800'>Rejected</button>
                            <FaQuestionCircle className='text-[#BC0F0F] rounded-full border-red-800 border-2 text-xl'></FaQuestionCircle>
                        </div>

                    </div>
                </div>
                {/* sec2  */}
                <div className='grid grid-cols-1 shadow-gray-400  shadow-md p-2 my-4 px-3 rounded-lg'>
                    <div className='grid grid-cols-3 '>
                        <div className='flex gap-4'>
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img src={img2} alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <div>
                                <h5 className='font-semibold'>Senior Product Designer</h5>
                                <p className='font-thin text-gray-500 text-sm'>techmint, On-Site</p>
                                <p className='text-gray-600'>Bengaluru,India</p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h5 className='font-semibold'>₹ 50K-₹ 70k</h5>
                            <small className='font-thin text-gray-500 text-xs'>Per Month</small>
                        </div>
                        <div className=''>
                            <div className='flex flex-col items-end justify-center me-5 my-2'>
                                <button className='bg-[#FFF3B2] rounded-lg py-1 px-3 text-xs text-[#AE9407]'>In Progress</button>
                                <h5 className='text-[#FF0808] text-xs font-thin mt-1 '>70% Chances</h5>
                            </div>
                        </div>

                    </div>

                </div>
                {/* sec3*/}
                <div className='grid grid-cols-1 shadow-gray-400  shadow-md p-2 my-4 px-3 rounded-lg'>
                    <div className='grid grid-cols-3 '>
                        <div className='flex gap-4'>
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img src={img3} alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <div>
                                <h5 className='font-semibold'>Senior Product Designer</h5>
                                <p className='font-thin text-gray-500 text-sm'>techmint, On-Site</p>
                                <p className='text-gray-600'>Bengaluru,India</p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h5 className='font-semibold'>₹ 50K-₹ 70k</h5>
                            <small className='font-thin text-gray-500 text-xs'>Per Month</small>
                        </div>
                        <div className=''>
                            <div className='grid grid-cols-3 justify-center my-5 me-4 '>
                                <div></div>
                                <div></div>
                                <button className='bg-[#C4FFD1] rounded-lg py-1 px-3 text-xs text-[#00A324] text-left'>Selected</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashBoardPart1;