import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Context from "../context/context";
import { Spendings, SpendingChart } from "../../type/globaleType";
import { useNavigate } from "react-router-dom";


const SpendCard = () => {
    const [totalSpend, setTotalSpend] = useState(0)
    const [totalEarnings, setTotalEarnings] = useState(0)

    const navigate = useNavigate()

    const { earningData, setSpendingData, totalInvested, setTotalEarning } = useContext(Context)
    useEffect(() => {
        earningData.map((data) => {
            setTotalEarnings((prev) => prev + data.amount)
            setTotalEarning((prev: number): void => prev + data.amount)
        })
    }, [earningData])

    const fetchData = () => {
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
            setTotalSpend((prev) => prev + item.amount)
        })
        console.log(chartData)
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log(totalInvested)
    return (
        <div className="relative mt-5 ml-5 inline-block w-96" onClick={() => navigate("/view/spending/details")}>
            <Card className="max-w-sm">
                <Text>Spent Amount</Text>
                <Metric>{totalSpend}rs</Metric>
                <Flex className="mt-4">
                    <Text>Spent {((totalSpend / (totalEarnings - totalInvested)) * 100).toFixed(2)}% of earning</Text>
                    <Text>{totalEarnings - totalInvested}rs</Text>
                </Flex>
                <ProgressBar value={(totalSpend / (totalEarnings - totalInvested)) * 100} className="mt-2" />
            </Card>
        </div>
    )
}

export default SpendCard;