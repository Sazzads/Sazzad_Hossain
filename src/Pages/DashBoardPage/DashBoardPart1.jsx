import React from 'react';
import { FaChevronDown, FaCircle, FaQuestionCircle } from 'react-icons/fa';
import img1 from '../../assets/image/Rectangle293.png'
import img2 from '../../assets/image/Rectangle296.png'
import img3 from '../../assets/image/Rectangle298.png'

const DashBoardPart1 = () => {
    return (
        <div className='px-4 py-2'>
            {/* part 1  */}
            <div className='flex justify-between items-center mb-3'>
                <div className='text-3xl font-semibold'>Dashboard</div>
                <div className='flex flex-col items-center'>
                    <h2 className='mb-1 text-black'>Job search status</h2>
                    <button
                        className='bg-white font-semibold text-black px-4 py-2 border-2 border-black rounded-md  text-sm flex items-center'>
                        <FaCircle className='me-1 text-[#0DC556]'></FaCircle>
                        Actively Interviweing
                        <FaChevronDown className='ms-1'></FaChevronDown>
                    </button>

                </div>
            </div>
            {/* part 2 */}
            <div className='rounded-lg shadow-gray-400  shadow-md bg-white px-4 '>
                <div className='flex justify-between px-2'>
                    <h4>Applications</h4>
                    <p>See all</p>
                </div>
                <div className='grid grid-cols-1 shadow-gray-400  shadow-md p-2 my-4'>
                    <div className='grid grid-cols-3'>
                        <div className='flex gap-2'>
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img src={img1} alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <div>
                                <h5>Senior Product Designer</h5>
                                <p>techmint,On-Site</p>
                                <p>Bengaluru,India</p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h5>₹ 50K-₹ 70k</h5>
                            <small>Per Month</small>
                        </div>
                        <div className='flex items-center justify-end'>
                            <button className='bg-[#FFAAAA] rounded-lg py-1 px-3 text-xs'>Rejected</button>
                            <FaQuestionCircle></FaQuestionCircle>
                        </div>

                    </div>
                </div>
                {/* d  */}
                <div className='grid grid-cols-1 shadow-gray-400  shadow-md p-2 my-4'>
                    <div className='grid grid-cols-3'>
                        <div className='flex gap-2'>
                            <div className="avatar">
                                <div className="w-16 rounded">
                                    <img src={img1} alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <div>
                                <h5>Senior Product Designer</h5>
                                <p>techmint,On-Site</p>
                                <p>Bengaluru,India</p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h5>₹ 50K-₹ 70k</h5>
                            <small>Per Month</small>
                        </div>
                        <div className='flex items-center justify-end'>
                            <button className='bg-[#FFAAAA] rounded-lg py-1 px-3 text-xs'>Rejected</button>
                            <FaQuestionCircle></FaQuestionCircle>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardPart1;