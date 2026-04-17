import React, { useContext } from 'react';
import { FriendContext } from '../../context/Provider';

const TimeLineHeader = () => {

    const {sortByName} = useContext(FriendContext)
    return (
        <div>
            <h1 className='text-[48px] font-bold'>Timeline </h1>
            <div className='my-6'>
                <select defaultValue="Server location" className="select select-neutral">
                    <option onClick={()=>sortByName("")} >Time</option>
                    <option onClick={()=>sortByName("Call")} >Call</option>
                    <option onClick={()=>sortByName("Text")} >Text</option>
                    <option onClick={()=>sortByName("Meetup")} >Meeting</option>
                </select>
            </div>
        </div>
    );
};

export default TimeLineHeader;