import { useContext } from "react";
import Context from "../context/context";
import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";


const ViewAllInvestment = () => {
    const { investedData, totalInvested } = useContext(Context);
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
        <div className="grid mt-5 grid-cols-3 ml-24">
            {uniqueArray.map((item) => {
                return (
                    <Card className="max-w-sm">
                        <Text>Spent Amount on {item.company}</Text>
                        <Metric>{item.amount}rs</Metric>
                        <Flex className="mt-4">
                            <Text>Spent {((item.amount / totalInvested) * 100).toFixed(2)} % of Total Spend</Text>
                            <Text>{totalInvested} rs</Text>
                        </Flex>
                        <ProgressBar value={(item.amount / totalInvested) * 100} className="mt-2" />
                    </Card>)
            })}

        </div>
    )
}

export default ViewAllInvestment;