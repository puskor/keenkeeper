import React from 'react';
import meetup from "../../assets/image/meetup.png"
import text from "../../assets/image/text.png"
import video from "../../assets/image/video.png"

const TimeLineCard = (items) => {
    console.log(items)

    return (
        <div className='mt-2'>
            <div className='card bg-base-100 shadow-sm border-t border-gray-100 w-full px-5 py-2'>
                <div className='flex items-center gap-7'>

                    <img className='w-[30px] h-[30px]' src={`${items.item.item == "Meetup" ? meetup :items.item.item == "Text" ? text : video}`} alt="meetup" />
                    <div>
                        <p className='text-[20px]'>{items.item.item} <span className='text-[14px]'>with {items.item.name}</span></p>
                        <h1 className='text-[15px]'>{items.item.date}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeLineCard;