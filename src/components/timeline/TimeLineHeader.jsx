import React from 'react';

const TimeLineHeader = () => {
    return (
        <div>
            <h1 className='text-[48px] font-bold'>Timeline </h1>
            <div className='my-6'>
                <select defaultValue="Server location" className="select select-neutral">
                    <option disabled={true}>Server location</option>
                    <option>North America</option>
                    <option>EU west</option>
                    <option>South East Asia</option>
                </select>
            </div>
        </div>
    );
};

export default TimeLineHeader;