import React, { useContext, useEffect, useState } from 'react';
import Bannar from '../components/home/Bannar';
import BannarCard from '../components/home/BannarCard';
import FriendCard from '../components/home/friendCard';
import { FriendContext } from '../context/provider';

const HomePage = () => {

    const { setCardLength } = useContext(FriendContext)

    const [data, setData] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch("/data.json")
            const data = await res.json()
            setData(data);
            setCardLength(data.length)

        }
        loadData()
    }, [])



    // console.log(data.length)
    return (
        <div className='my-20'>
            <Bannar />
            <BannarCard />
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                {
                    data.map((friend) => {
                        return <FriendCard key={friend.id} friend={friend} />
                    })
                }
            </div>


        </div>
    );
};

export default HomePage;