import React from 'react';
import DashBoardPart1 from './DashBoardPart1';
import DashBoardPart2 from './DashBoardPart2';
import DashBoardPart3 from './DashBoardPart3';
import DashBoardPart4 from './DashBoardPart4';

const DashBoardPage = () => {
    return (
        <div>
            <div className='p-3 bg-slate-100'>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="col-span-2  ">
                        <DashBoardPart1></DashBoardPart1>
                    </div>
                    <div className="  ">
                       <DashBoardPart2></DashBoardPart2>
                    </div>
                    <div className="col-span-2  ">
                        <DashBoardPart3></DashBoardPart3>
                    </div>
                    <div className=" ">
                        <DashBoardPart4></DashBoardPart4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardPage;