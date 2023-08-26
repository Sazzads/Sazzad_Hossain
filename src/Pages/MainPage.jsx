import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Shared/Footer';

const MainPage = () => {
    return (
        <>
            <div className='flex justify-center items-center mt-10 '>
                <Link className='btn mx-4 btn-info' to='/dashboard/dashboardpage'>Go Dashboard Page</Link>
                <Link className='btn mx-4 btn-info' to='/myjobs'>Go Jobs Portal page</Link>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MainPage;