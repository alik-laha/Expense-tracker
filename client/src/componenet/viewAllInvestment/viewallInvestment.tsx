import { useContext } from "react";
import Context from "../context/context";

const ViewAllInvestment = () => {
    const { investedData } = useContext(Context);

    const unique = [...new Set(investedData.map(item => item.company))]

    console.log(unique)
    return (
        <div>
            <h1>View All Investment</h1>
        </div>
    )
}

export default ViewAllInvestment;