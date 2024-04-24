import { createContext } from 'react';
import { Earnings } from '../../type/globaleType';

interface ContextType {
    setEarningData: (data: Array<Earnings>) => void;
    earningData: Earnings[];
}

const Context = createContext<ContextType>({
    setEarningData: () => [], // Initial value for setSearchData
    earningData: [],
});

export default Context;