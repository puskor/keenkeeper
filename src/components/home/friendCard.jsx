import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({ friend }) => {
    console.log(friend)
    const { name,picture, status, tags, days_since_contact } = friend
    return (
        <Link to={`/${friend.id}`} >
            <div className='card bg-base-200 border-t border-gray-200 shadow-sm text-center py-6 flex flex-cols items-center space-y-1'>
                <img className='h-15 w-15 rounded-full ' src={picture} alt="" />
                <h1 className='text-[20px] font-semibold'>{name}</h1>
                <p className='text-[#64748B] text-[12px]'>{days_since_contact}d ago</p>
                <div className='flex gap-2'>
                    {
                        tags.map((tag,index) => <h1 key={index} className={`px-2 rounded-2xl text-[12px] bg-[#aeebd7]`}>{tag}</h1>)
                    }
                </div>
                <p className={`px-2 mt-2 text-white rounded-2xl text-[12px] ${status == "almost due" ? "bg-amber-500" : status == "overdue" ? "bg-red-500" : " bg-green-500"}`}>{status}</p>
            </div>
        </Link>
    );
};

export default FriendCard;