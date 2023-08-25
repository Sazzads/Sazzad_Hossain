import React from 'react';
import DashBoardPart1 from './DashBoardPart1';

const DashBoardPage = () => {
    return (
        <div>
            <div className='p-3 bg-slate-100'>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2  ">
                        <DashBoardPart1></DashBoardPart1>
                    </div>
                    <div className="  bg-gray-300">
                       2
                    </div>
                    <div className="col-span-2  bg-gray-300">3</div>
                    <div className=" bg-gray-300">4</div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardPage;