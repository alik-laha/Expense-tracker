import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Context from "../context/context";
import { Earnings, Spendings } from "../../type/globaleType";



const SpendCard = () => {
    const [spendData, setSpendData] = useState([])
    const [totalSpend, setTotalSpend] = useState(0)
    const [totalEarning, setTotalEarning] = useState(0)

    const { earningData } = useContext(Context)
    useEffect(() => {
        earningData.map((data) => {
            setTotalEarning((prev) => prev + data.amount)

        })
    }, [earningData])

    const fetchData = () => {
        axios.get("/api/expense/getallspending")
            .then((res) => {
                console.log(res.data)
                setSpendData(res.data.spending)
                countSpend(res.data.spending)
            }
            ).catch((err) => {
                console.log(err)
            }
            )
    }
    const countSpend = (data: Array<Spendings>) => {
        data.map((item) => {
            setTotalSpend((prev) => prev + item.amount)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="relative mt-5 ml-5 inline-block w-96">
            <Card className="max-w-sm">
                <Text>Spent Amount</Text>
                <Metric>{totalSpend}rs</Metric>
                <Flex className="mt-4">
                    <Text>Spent {totalSpend / totalEarning * 100}% of earning</Text>
                    <Text>{totalEarning}rs</Text>
                </Flex>
                <ProgressBar value={totalSpend / totalEarning * 100} className="mt-2" />
            </Card>
        </div>
    )
}

export default SpendCard;