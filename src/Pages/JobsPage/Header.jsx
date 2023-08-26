import React from 'react';

const Header = () => {
    return (
        <div className='w-11/12 mx-auto py-5'>
            <div className="navbar bg-white ">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-3xl text-[#116EFF]">JobsPortal</a>
                    </div>
                    <div className="flex-none gap-2">
                      
                         <button className='text-[#338573]  me-5'>Login</button>
                        <div className="dropdown dropdown-end">
                           
                               <button className='py-3 rounded-md cursor-pointer bg-[#136EF7] px-6 text-white'>Post A job</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Header;