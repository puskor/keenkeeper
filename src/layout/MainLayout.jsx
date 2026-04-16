import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='bg-gray-50'>
                <div className='container mx-auto '>
                    <Outlet />
                </div>
            </div>

            <div className='py-10 bg-[#244D3F] '>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;