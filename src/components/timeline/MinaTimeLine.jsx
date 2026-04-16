import React, { useContext } from 'react';
import TimeLineHeader from './TimeLineHeader';
import TimeLineCard from './TimeLineCard';
import { FriendContext } from '../../context/provider';
import EmptyCard from '../error/EmptyCard';

const MinaTimeLine = () => {

    const { record,sortBy } = useContext(FriendContext)

    console.log(sortBy)

    const filteredData = sortBy
    ? record.filter(item => item.item === sortBy)
    : record

    return (
        <div>
            <TimeLineHeader />
            {
                filteredData.length > 0 ? <div> {filteredData.map((items,index) => <TimeLineCard key={index} item={items} />)} </div> : <EmptyCard />
            }
        </div>
    );
};

export default MinaTimeLine;