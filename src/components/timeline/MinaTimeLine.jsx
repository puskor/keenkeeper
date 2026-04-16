import React, { useContext } from 'react';
import TimeLineHeader from './TimeLineHeader';
import TimeLineCard from './TimeLineCard';
import { FriendContext } from '../../context/provider';

const MinaTimeLine = () => {

    const { record } = useContext(FriendContext)

    return (
        <div>
            <TimeLineHeader />
            {
                record.map((items) => <TimeLineCard item={items}/>)
            }
            

        </div>
    );
};

export default MinaTimeLine;