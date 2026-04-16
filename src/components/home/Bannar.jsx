import React from 'react';

const Bannar = () => {
    return (
        <div className='text-center space-y-6 my-10'>
            <h1 className='text-[48px] font-bold'>Friends to keep close in your life</h1>
            <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-white text-center'><span className='text-2xl'>+</span> Add a friend</button>
        </div>
    );
};

export default Bannar;