import { Card, Text, Metric } from "@tremor/react";
import { useContext, useEffect } from "react";
import Context from "../context/context";
import axios from "axios";

const EarningCard = () => {
    const { setEarningData, totalEarning } = useContext(Context)
    const fetchData = () => {
        axios.get("/api/expense/getallearnings")
            .then((res): void => {
                setEarningData(res.data.earnings)
            }
            ).catch((err) => {
                console.log(err)
            }
            )
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="relative mt-5 ml-5 inline-block w-96">
            <Card className="max-w-sm">
                <Text>Earning</Text>
                <Metric>{totalEarning}rs</Metric>
            </Card>
        </div>
    )
}

export default EarningCard;