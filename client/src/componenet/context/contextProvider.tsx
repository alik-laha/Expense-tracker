import Context from "./context.ts";
import { ReactNode, useState } from "react";
import { Earnings } from "../../type/globaleType.ts";

interface ContextProviderProps {
    children: ReactNode;
}
const ContextProvider = ({ children }: ContextProviderProps) => {
    const [earningData, setEarningData] = useState<Earnings[]>([])
    return (
        <Context.Provider value={{ earningData, setEarningData }}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider