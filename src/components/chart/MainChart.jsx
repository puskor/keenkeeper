import React from 'react';
import Chart from './Chart';

const MainChart = () => {
    return (
        <div>
            <h1 className='text-[48px] font-bold'>Friendship Analytics</h1>
            <div className='py-10 shadow-2xl'>
                <h1 className=' text-[#244D3F] text-[20px]'>
                    By Interaction Type
                </h1>
                <div className='flex flex-col justify-center items-center '>

                    <Chart />
                </div>
            </div>

        </div>
    );
};

export default MainChart;