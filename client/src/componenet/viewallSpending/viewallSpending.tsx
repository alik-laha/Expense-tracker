import { useContext } from "react";
import Context from "../context/context";

const ViewAllSpending = () => {
    const { spendingData } = useContext(Context);

    const uniqueValues = {};

    spendingData.forEach(obj => {
        // Check if the value already exists in uniqueValues
        if (uniqueValues.hasOwnProperty(obj.spendOn)) {
            // If it exists, add the amount to the existing amount
            uniqueValues[obj.spendOn] += obj.amount;
        } else {
            // If it doesn't exist, add it with its amount
            uniqueValues[obj.spendOn] = obj.amount;
        }
    });

    // Convert the uniqueValues object into an array of objects
    const uniqueArray = Object.keys(uniqueValues).map(key => ({ company: key, amount: uniqueValues[key] }));
    console.log(uniqueArray);

    return (
        <div>
            <h1>View All spending</h1>
        </div>
    )
}

export default ViewAllSpending;
