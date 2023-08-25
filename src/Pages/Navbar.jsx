import React from 'react';
import logo from "../assets/image/aviatelogo.png"
import profilePic from "../assets/image/76070548935.png"
import icon1 from "../assets/image/Group.png"
import icon2 from "../assets/image/messages-icon.png"
import icon3 from "../assets/image/award.png"
import { FaBell, FaBookmark, FaCommentAlt, FaSearch } from "react-icons/fa";
const Navbar = () => {
    return (
        <div>

            <div className="navbar bg-[#22506C] px-6 py-4">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl">
                        <img className='h-10' src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">

                    {/* part 2 */}
                    <div className="form-control w-96 relative">
                        {/* <div className='w-96'> */}
                            <input type="text" placeholder="Type for Search" className="input input-bordered w-12 md:w-auto" />
                            <button className='absolute btn -left-10 bg-white border-none'><FaSearch className='text-2xl '></FaSearch></button>
                        {/* </div> */}
                    </div>

                </div>
                {/* part 3 */}
                <div className="navbar-end">
                    <label tabIndex={0} className="flex gap-4">
                        <div className="indicator me-3">
                            <img className='h-7' src={icon1} alt="" />
                            <span className="badge  badge-xs bg-yellow-400 indicator-item border-none ">3</span>
                        </div>
                        <div className="indicator me-3">
                            <img className='h-7' src={icon2} alt="" />
                            <span className="badge  badge-xs bg-yellow-400 indicator-item border-none">8</span>
                        </div>
                        <div className="indicator me-3">
                            <img className='h-7' src={icon3} alt="" />
                            <span className="badge  badge-xs bg-yellow-400 indicator-item border-none">3</span>
                        </div>
                    </label>


                </div>
                {/* part 4--2 */}
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-12 rounded-full border-black shadow-lg border-2">
                            <img src={profilePic} />
                        </div>
                    </label>
                    <div className='text-white flex flex-col items-center gap-1 ms-2 '>
                        <h2>Sazzad Hossain</h2>
                        <button className='bg-white font-semibold text-black px-3 border-black border-1 rounded-md uppercase shadow-md text-sm'><small>Edit my Profile</small></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;