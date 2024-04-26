import Context from "./context.ts";
import { ReactNode, useState } from "react";
import { Earnings, Spendings, Investment } from "../../type/globaleType.ts";

interface ContextProviderProps {
    children: ReactNode;
}
const ContextProvider = ({ children }: ContextProviderProps) => {
    const [earningData, setEarningData] = useState<Earnings[]>([])
    const [spendingData, setSpendingData] = useState<Spendings[]>([])
    const [investedData, setInvestedData] = useState<Investment[]>([])
    const [totalInvested, setTotalInvested] = useState<number>(0)
    const [totalEarning, setTotalEarning] = useState<number>(0)
    return (
        <Context.Provider value={{ earningData, setEarningData, spendingData, setSpendingData, setTotalInvested, totalInvested, totalEarning, setTotalEarning, investedData, setInvestedData }}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider