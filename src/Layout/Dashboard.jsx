import React from 'react';
import { FaAlignJustify, FaRegCalendarAlt, FaRegCommentAlt, FaShoppingBag, FaSignOutAlt, FaThLarge } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu  min-h-screen bg-[#22506C] text-base-content flex flex-col items-center justify-around">
                        <li className=''><Link to='/dashboardpage'><span className=' '><FaAlignJustify className='text-3xl text-white'></FaAlignJustify><span></span></span></Link></li>


                        <div >

                            <li className=' my-2'>
                                <NavLink  to='/dashboardpage'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <FaThLarge className='text-3xl text-white text-center'></FaThLarge>
                                        <div className='text-white mt-2 text-center w-20'>Dashboard</div>
                                    </div>
                                </NavLink>
                            </li>
                            <li className=' my-2'>
                                <NavLink  to='/myjobs'>
                                    <span className='flex flex-col items-center justify-center'>
                                        <FaShoppingBag className='text-3xl text-white text-center'></FaShoppingBag>
                                        <span className='text-white mt-2 text-center w-20'>My Jobs</span>
                                    </span>
                                </NavLink>
                            </li>
                            <li className=' my-2'>
                                <NavLink to='/messages'>
                                    <span className='flex flex-col items-center justify-center'>
                                        <FaRegCommentAlt className='text-3xl text-white text-center'></FaRegCommentAlt>
                                        <span className='text-white mt-2 text-center w-20'>Messages</span>
                                    </span>
                                </NavLink>
                            </li>
                            <li className=' my-2'>
                                <NavLink to='/upcommingevents'>
                                    <span className='flex flex-col items-center justify-center '>
                                        <div className='indicator'>
                                        <FaRegCalendarAlt className='text-3xl text-white text-center '></FaRegCalendarAlt>
                                        <span className="badge  badge-xs bg-yellow-400 indicator-item border-none ">3</span>
                                        </div>

                                        <span className='text-white mt-2 w-20 text-center'>Upcomming Events</span>
                                    </span>
                                </NavLink>
                            </li>


                        </div>
                        <div>
                            <li><button className='btn btn-xs'>HELP</button></li>
                            <li className=' my-2'>
                                <NavLink to='/logout'>
                                    <span className='flex flex-col items-center justify-center'>
                                        <FaSignOutAlt className='text-3xl text-white text-center'></FaSignOutAlt>
                                        <span className='text-white mt-2 w-20 text-center'>Log out</span>
                                    </span>
                                </NavLink>
                            </li>
                        </div>

                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;