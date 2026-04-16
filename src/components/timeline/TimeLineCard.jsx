import React from 'react';
import meetup from "../../assets/image/meetup.png"
// import text from "../../assets/image/text.png"
// import video from "../../assets/image/video.png"

const TimeLineCard = () => {
    return (
        <div className='mt-2'>
            <div className='card bg-base-100 shadow-sm border-t border-gray-100 w-full px-5 py-2'>
                <div className='flex items-center gap-7'>

                    <img className='w-[30px] h-[30px]' src={meetup} alt="meetup" />
                    <div>
                        <p className='text-[20px]'>Meetup <span className='text-[14px]'>with name</span></p>
                        <h1 className='text-[15px]'>25 may 2025</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeLineCard;