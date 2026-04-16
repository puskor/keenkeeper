import React, { useContext } from 'react';
import TimeLineHeader from './TimeLineHeader';
import TimeLineCard from './TimeLineCard';
import { FriendContext } from '../../context/provider';
import EmptyCard from '../error/EmptyCard';

const MinaTimeLine = () => {

    const { record } = useContext(FriendContext)

    return (
        <div>
            <TimeLineHeader />
            {
                record.length >0 ?record.map((items,index) => <TimeLineCard key={index} item={items}/>) :<EmptyCard/>
            }
        </div>
    );
};

export default MinaTimeLine;