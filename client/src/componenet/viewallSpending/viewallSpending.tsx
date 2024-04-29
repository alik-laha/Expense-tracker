import { useContext } from "react";
import Context from "../context/context";
import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";

const ViewAllSpending = () => {
    const { spendingData, totalSpend } = useContext(Context);

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
    const uniqueArray = Object.keys(uniqueValues).map(key => ({ spendon: key, amount: uniqueValues[key] }));
    console.log(uniqueArray);

    return (
        <div className="grid mt-5 grid-cols-3 ml-24">
            {uniqueArray.map((item) => {
                return (
                    <Card className="max-w-sm">
                        <Text>Spent Amount on {item.spendon}</Text>
                        <Metric>{item.amount}rs</Metric>
                        <Flex className="mt-4">
                            <Text>Spent {((item.amount / totalSpend) * 100).toFixed(2)} % of Total Spend</Text>
                            <Text>{totalSpend} rs</Text>
                        </Flex>
                        <ProgressBar value={(item.amount / totalSpend) * 100} className="mt-2" />
                    </Card>)
            })}

        </div>
    )
}

export default ViewAllSpending;
