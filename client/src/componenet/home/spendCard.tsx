import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Context from "../context/context";
import { Spendings, SpendingChart } from "../../type/globaleType";
import { useNavigate } from "react-router-dom";


const SpendCard = () => {
    const [totalSpend, setTotalSpending] = useState(0)
    const navigate = useNavigate()

    const { setSpendingData, totalInvested, setTotalSpend, totalEarning } = useContext(Context)

    const fetchData = () => {
        setTotalSpend(0)
        setSpendingData([])
        axios.get("/api/expense/getallspending")
            .then((res) => {
                console.log(res.data)
                countSpend(res.data.spending)
                setSpendingData(res.data.spending)
            }
            ).catch((err) => {
                console.log(err)
            }
            )
    }
    const chartData: Array<SpendingChart> = []
    const countSpend = (data: Array<Spendings>) => {
        data.map((item: Spendings): void => {
            setTotalSpending((prev) => prev + item.amount)
            setTotalSpend((prev) => prev + item.amount)
        })
        console.log(chartData)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="relative mt-5 ml-5 inline-block w-96" onClick={() => navigate("/view/spending/details")}>
            <Card className="max-w-sm">
                <Text>Spent Amount</Text>
                <Metric>{totalSpend}rs</Metric>
                <Flex className="mt-4">
                    <Text>Spent {((totalSpend / (totalEarning - totalInvested)) * 100).toFixed(2)}% of earning</Text>
                    <Text>{totalEarning - totalInvested}rs</Text>
                </Flex>
                <ProgressBar value={(totalSpend / (totalEarning - totalInvested)) * 100} className="mt-2" />
            </Card>
        </div>
    )
}

export default SpendCard;