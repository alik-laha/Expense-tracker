import { useContext } from "react";
import Context from "../context/context";
import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";

const ViewAllEarning = () => {
    const { earningData, totalEarning } = useContext(Context);

    const uniqueValues: { [key: string]: number } = {};

    earningData.forEach(obj => {
        // Check if the value already exists in uniqueValues
        if (obj.source in uniqueValues) {
            // If it exists, add the amount to the existing amount
            uniqueValues[obj.source] += obj.amount;
        } else {
            // If it doesn't exist, add it with its amount
            uniqueValues[obj.source] = obj.amount;
        }
    });

    // Convert the uniqueValues object into an array of objects
    const uniqueArray = Object.keys(uniqueValues).map(key => ({ source: key, amount: uniqueValues[key] }));
    console.log(uniqueArray);

    return (
        <div className="grid mt-5 grid-cols-3 ml-24">
            {uniqueArray.map((item) => {
                return (
                    <Card className="max-w-sm">
                        <Text>Spent Amount on {item.source}</Text>
                        <Metric>{item.amount}rs</Metric>
                        <Flex className="mt-4">
                            <Text>Spent {((item.amount / totalEarning) * 100).toFixed(2)} % of Total Spend</Text>
                            <Text>{totalEarning} rs</Text>
                        </Flex>
                        <ProgressBar value={(item.amount / totalEarning) * 100} className="mt-2" />
                    </Card>)
            })}

        </div>
    )
}

export default ViewAllEarning;
