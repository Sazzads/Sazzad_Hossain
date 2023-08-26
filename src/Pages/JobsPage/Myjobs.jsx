import React from 'react';
import Header from './Header';
import Table from './Table';

const Myjobs = () => {
    return (
        <>
            <div className=' '>

                <Header></Header>
                <h2 className='text-center text-3xl py-7 bg-gray-100 font-semibold'>My Jobs List</h2>
                <Table></Table>
            </div>
        </>
    );
};

export default Myjobs;