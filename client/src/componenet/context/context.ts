import { createContext } from 'react';
import { Earnings, Investment, Spendings } from '../../type/globaleType';

interface ContextType {
    setEarningData: (data: Array<Earnings>) => void;
    setSpendingData: (data: Array<Spendings>) => void;
    setTotalInvested: (data: number) => void;
    setTotalEarning: (data: number) => void;
    setInvestedData: (data: Array<Investment>) => void;
    setTotalSpend: (data: number) => void;
    earningData: Earnings[];
    spendingData: Spendings[];
    totalInvested: number;
    totalEarning: number;
    investedData: Investment[];
    totalSpend: number;
}

const Context = createContext<ContextType>({
    setEarningData: () => [], // Initial value for setSearchData
    earningData: [],
    setSpendingData: () => [], // Initial value for setSearchData
    spendingData: [],
    setTotalInvested: () => 0,
    totalInvested: 0,
    setTotalEarning: () => 0,
    totalEarning: 0,
    setInvestedData: () => [],
    investedData: [],
    setTotalSpend: () => 0,
    totalSpend: 0
});

export default Context;