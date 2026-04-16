import React, { useContext } from 'react';
import callLogo from "../../assets/image/call.png"
import massageLogo from "../../assets/image/text.png"
import videoLogo from "../../assets/image/video.png"
import { useLoaderData, useParams } from 'react-router';
import { MdDeleteOutline, MdOutlineNotifications } from 'react-icons/md';
import { PiJarLabelDuotone } from 'react-icons/pi';
import { FriendContext } from '../../context/provider';
import { toast } from 'react-toastify';


const Details = () => {
    const { friendId } = useParams()
    // console.log(friendId)
    const data = useLoaderData()
    const expectFriend = data.find((friend) => friend.id == friendId)

    const { recording } = useContext(FriendContext)

    const getCurrentDateTime = () => {
        const now = new Date();
        const date = now.toLocaleDateString();  
        return `${date} `;
    };

    // console.log(expectFriend)
    const { name, picture, status, bio, tags, days_since_contact, next_due_date, goal } = expectFriend;

    const call = () => {
        toast.success("Calling successfully")
        const obj = {
            item: "Call",
            date: getCurrentDateTime(),
            name: name
        }
        recording(obj)
    }
    const text = () => {
        toast.success("Text successfully")

        const obj = {
            item: "Text",
            date: getCurrentDateTime(),
            name: name
        }
        recording(obj)
    }
    const meetup = () => {
        toast.success("Meeting successfully")

        const obj = {
            item: "Meetup",
            date: getCurrentDateTime(),
            name: name
        }
        recording(obj)
    }

    return (
        <div className='my-20  md:flex gap-6'>
            <div className='w-[30%]'>
                <div className='card bg-base-200 border-t border-gray-200 shadow-sm text-center py-6 flex flex-cols items-center space-y-1'>
                    <img className='h-15 w-15 rounded-full border-2' src={picture} alt="" />
                    <h1 className='text-[20px] font-semibold'>{name}</h1>
                    <p className='text-[#64748B] text-[12px]'>62d ago</p>
                    <p className={`px-2 mt-2 text-white rounded-2xl text-[12px] ${status == "almost due" ? "bg-amber-500" : status == "overdue" ? "bg-red-500" : " bg-green-500"}`}>{status}</p>

                    <div className='flex gap-2'>
                        {
                            tags.map((tag, index) => <h1 key={index} className={`px-2 rounded-2xl text-[12px] bg-[#aeebd7]`}>{tag}</h1>)
                        }
                    </div>
                    <p className='text-[10px] px-4 text-gray-200]'>{bio}</p>
                </div>
                <div className='card bg-base-200 border-t border-gray-200 shadow-sm text-center py-1 mt-1 flex  items-center '><MdOutlineNotifications /><h1>Snooze 2 weeks</h1></div>
                <div className='card bg-base-200 border-t border-gray-200 shadow-sm text-center py-1 mt-1 flex  items-center '><PiJarLabelDuotone /><h1>Archive</h1></div>
                <div className='card bg-base-200 border-t border-gray-200 shadow-sm text-center py-1 mt-1 flex  items-center '><div><MdDeleteOutline /></div><h2>Delete</h2></div>
            </div>
            <div className='w-full'>
                <div className=' space-y-3'>
                    <div className='grid grid-cols-3 gap-5 '>
                        <div className='text-center card  bg-base-100 shadow-sm border-t border-gray-100 w-full py-8'>
                            <h1 className='text-[30px] font-semibold'>{days_since_contact}</h1>
                            <p className='text-[#64748B]'>Days Since Contact</p>
                        </div>
                        <div className='text-center card  bg-base-100 shadow-sm border-t border-gray-100 w-full py-8'>
                            <h1 className='text-[30px] font-semibold'>{goal}</h1>
                            <p className='text-[#64748B]'>Goal (Days)</p>
                        </div>
                        <div className='text-center card  bg-base-100 shadow-sm border-t border-gray-100 w-full py-8'>
                            <h1 className='text-[30px] font-semibold'>{next_due_date}</h1>
                            <p className='text-[#64748B]'>Next Due</p>
                        </div>
                    </div>
                    <div className='card  bg-base-100 shadow-sm border-t border-gray-100 w-full p-8 '>
                        <div className='flex justify-between items-center'>
                            <p className='text-[20px]'>Relationship Goal</p>
                            <button className='btn'>Edit</button>
                        </div>
                        <h1 className='text-[15px]'>Connect every <span className='text-[18px] font-bold'>30 days</span></h1>
                    </div>
                    <div className='card  bg-base-100 shadow-sm border-t border-gray-100 w-full p-6 '>
                        <p className='text-[20px]'>Quick Check-In</p>

                        <div className='flex justify-around gap-10 mt-5 '>
                            <button onClick={() => call()} className=' bg-gray-100 w-full flex flex-col py-5 items-center rounded-sm border-gray-200 border'>
                                <img className='w-[30px]' src={callLogo} alt="callLogo" />
                                <h1 className='text-[18px] '>Call</h1>
                            </button>
                            <button onClick={() => text()} className=' bg-gray-100 w-full flex flex-col py-5 items-center justify-center rounded-sm border-gray-200 border'>
                                <img className='w-[30px]' src={massageLogo} alt="massageLogo" />
                                <h1 className='text-[18px] '>Text</h1>
                            </button>
                            <button onClick={() => meetup()} className=' bg-gray-100 w-full flex flex-col py-5 items-center justify-center rounded-sm border-gray-200 border'>
                                <img className='w-[30px]' src={videoLogo} alt="videoLogo" />
                                <h1 className='text-[18px] '>Video</h1>
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;