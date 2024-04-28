import { useContext } from "react";
import Context from "../context/context";

const ViewAllInvestment = () => {
    const { investedData } = useContext(Context);
    const uniqueValues = {};

    investedData.forEach(obj => {
        // Check if the value already exists in uniqueValues
        if (uniqueValues.hasOwnProperty(obj.company)) {
            // If it exists, add the amount to the existing amount
            uniqueValues[obj.company] += obj.capital;
        } else {
            // If it doesn't exist, add it with its amount
            uniqueValues[obj.company] = obj.capital;
        }
    });

    // Convert the uniqueValues object into an array of objects
    const uniqueArray = Object.keys(uniqueValues).map(key => ({ company: key, amount: uniqueValues[key] }));
    console.log(uniqueArray);

    return (
        <div>
            <h1>View All Investment</h1>
        </div>
    )
}

export default ViewAllInvestment;