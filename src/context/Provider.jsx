import React, { createContext, useState } from 'react';

export const FriendContext = createContext()

const Provider = ({children}) => {
    const [record,setRecord] =useState([])

    const recording =(expectFriend)=>{
        setRecord([...record,expectFriend])
        // {
        //     record.map((item)=>console.log(item))
        // }
        console.log("this is recording function")
        
    }

    const data = {
        record,
        setRecord,
        recording,

    }
    return <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
};

export default Provider;