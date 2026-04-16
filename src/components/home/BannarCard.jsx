import React from 'react';

const BannarCard = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 border-b pb-10 border-gray-200'>
            <div className='card bg-base-200 border-t border-gray-200 shadow-sm text-center py-6'>
                <h1 className='text-[32px] font-semibold'>10</h1>
                <p className='text-[#64748B]'>Total friends</p>
            </div>
            <div className='card bg-base-200 border-t border-gray-200 shadow-sm text-center py-6'>
                <h1 className='text-[32px] font-semibold'>3</h1>
                <p className='text-[#64748B]'>On Track</p>
            </div>
            <div className='card bg-base-200 border-t border-gray-200 shadow-sm text-center py-6'>
                <h1 className='text-[32px] font-semibold'>6</h1>
                <p className='text-[#64748B]'>Need Attention</p>
            </div>
            <div className='card bg-base-200 border-t border-gray-200 shadow-sm text-center py-6'>
                <h1 className='text-[32px] font-semibold'>12</h1>
                <p className='text-[#64748B]'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default BannarCard;