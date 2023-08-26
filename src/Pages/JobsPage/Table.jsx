import React from 'react';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';

const Table = () => {
    return (
        <div className='ms-5'>
            <div className="overflow-x-auto mx-auto w-11/12 m-4 rounded-lg">
                <table className="table border-2 ">
                    {/* head */}
                    <thead className='font-semibold text-black text-sm border-b-2 border-gray-300'>
                        <tr >
                            <th>Title</th>
                            <th>Job Type</th>
                            <th>Posted date</th>
                            <th>Application Deadline</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm text-black font-normal '>
                        {/* row  */}
                        <tr className='border-b-2 '>
                            <th className='font-semibold py-6'>Laravel Developer</th>
                            <td>Full-TIme</td>
                            <td>12/6/2022</td>
                            <td>Full TIme</td>
                            <td className=''>
                                <div className='text-center space-x-5 text-lg'>
                                    <FaEye className=' inline text-[#338573]'></FaEye>
                                    <FaPen className=' inline text-[#04BCF6]'></FaPen>
                                    <FaTrash className=' inline text-[#FA0606]'></FaTrash>
                                </div>
                            </td>
                        </tr>
                       
                        {/* row  */}
                        <tr className='border-b-2 '>
                            <th className='font-semibold py-6'>Laravel Developer</th>
                            <td>Full-TIme</td>
                            <td>12/6/2022</td>
                            <td>Full TIme</td>
                            <td className=''>
                                <div className='text-center space-x-5 text-lg'>
                                    <FaEye className=' inline text-[#338573]'></FaEye>
                                    <FaPen className=' inline text-[#04BCF6]'></FaPen>
                                    <FaTrash className=' inline text-[#FA0606]'></FaTrash>
                                </div>
                            </td>
                        </tr>
                       
                        {/* row  */}
                        <tr className='border-b-2 '>
                            <th className='font-semibold py-6'>Laravel Developer</th>
                            <td>Full-TIme</td>
                            <td>12/6/2022</td>
                            <td>Full TIme</td>
                            <td className=''>
                                <div className='text-center space-x-5 text-lg'>
                                    <FaEye className=' inline text-[#338573]'></FaEye>
                                    <FaPen className=' inline text-[#04BCF6]'></FaPen>
                                    <FaTrash className=' inline text-[#FA0606]'></FaTrash>
                                </div>
                            </td>
                        </tr>
                       
                        {/* row  */}
                        <tr className='border-b-2 '>
                            <th className='font-semibold py-6'>Laravel Developer</th>
                            <td>Full-TIme</td>
                            <td>12/6/2022</td>
                            <td>Full TIme</td>
                            <td className=''>
                                <div className='text-center space-x-5 text-lg'>
                                    <FaEye className=' inline text-[#338573]'></FaEye>
                                    <FaPen className=' inline text-[#04BCF6]'></FaPen>
                                    <FaTrash className=' inline text-[#FA0606]'></FaTrash>
                                </div>
                            </td>
                        </tr>
                       
                        {/* row  */}
                        <tr className='border-b-2 '>
                            <th className='font-semibold py-6'>Laravel Developer</th>
                            <td>Full-TIme</td>
                            <td>12/6/2022</td>
                            <td>Full TIme</td>
                            <td className=''>
                                <div className='text-center space-x-5 text-lg'>
                                    <FaEye className=' inline text-[#338573]'></FaEye>
                                    <FaPen className=' inline text-[#04BCF6]'></FaPen>
                                    <FaTrash className=' inline text-[#FA0606]'></FaTrash>
                                </div>
                            </td>
                        </tr>
                       
                        {/* row  */}
                        <tr className='border-b-2 '>
                            <th className='font-semibold py-6'>Laravel Developer</th>
                            <td>Full-TIme</td>
                            <td>12/6/2022</td>
                            <td>Full TIme</td>
                            <td className=''>
                                <div className='text-center space-x-5 text-lg'>
                                    <FaEye className=' inline text-[#338573]'></FaEye>
                                    <FaPen className=' inline text-[#04BCF6]'></FaPen>
                                    <FaTrash className=' inline text-[#FA0606]'></FaTrash>
                                </div>
                            </td>
                        </tr>
                       
                        {/* row  */}
                        <tr className='border-b-2 '>
                            <th className='font-semibold py-6'>Laravel Developer</th>
                            <td>Full-TIme</td>
                            <td>12/6/2022</td>
                            <td>Full TIme</td>
                            <td className=''>
                                <div className='text-center space-x-5 text-lg'>
                                    <FaEye className=' inline text-[#338573]'></FaEye>
                                    <FaPen className=' inline text-[#04BCF6]'></FaPen>
                                    <FaTrash className=' inline text-[#FA0606]'></FaTrash>
                                </div>
                            </td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;