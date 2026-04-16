import React, { createContext, useEffect, useState } from 'react';

export const FriendContext = createContext()

const Provider = ({ children }) => {
    const [record, setRecord] = useState([])
    // console.log(record, "record")
    const [sortBy, setSortBy] = useState("")
    const [cardLength,setCardLength] = useState()

    const sortByName = (name)=>{
        setSortBy(name)
    }



    const recording = (expectFriend) => {
        setRecord([...record, expectFriend])
        // {
        //     record.map((item)=>console.log(item))
        // }
        // console.log("this is recording function")

    }


    const data = {
        record,
        setRecord,
        recording,
        sortByName,
        sortBy, 
        setSortBy,
        cardLength,
        setCardLength

    }
    return <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
};

export default Provider;