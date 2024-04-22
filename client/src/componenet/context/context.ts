import { createContext } from 'react';

interface ContextType {
    setIsloggedin: (data: boolean) => void;
    isloggedin: boolean;
}

const Context = createContext<ContextType>({
    setIsloggedin: () => { }, // Initial value for setSearchData
    isloggedin: false,
});

export default Context;