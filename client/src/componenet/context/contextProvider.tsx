import Context from "./context.ts";
import { ReactNode, useState } from "react";

interface ContextProviderProps {
    children: ReactNode;
}
const ContextProvider = ({ children }: ContextProviderProps) => {
    const [isloggedin, setIsloggedin] = useState(Boolean)
    return (
        <Context.Provider value={{ isloggedin, setIsloggedin }}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider