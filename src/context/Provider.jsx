import React, { createContext } from 'react';

export const FriendContext = createContext()
const Provider = ({children}) => {

    const data = {

    }
    return <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
};

export default Provider;