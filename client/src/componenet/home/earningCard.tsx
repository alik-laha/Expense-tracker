import { Card, Text, Metric } from "@tremor/react";
import { useContext, useEffect, useState } from "react";
import Context from "../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Earnings } from "../../type/globaleType";

const EarningCard = () => {
    const { setEarningData } = useContext(Context)
    const [totalEarning, setTotalEarning] = useState<number>(0)
    const navigate = useNavigate();
    const fetchData = () => {
        axios.get("/api/expense/getallearnings")
            .then((res): void => {
                setEarningData(res.data.earnings)
                calculataEarning(res.data.earnings)

            }
            ).catch((err) => {
                console.log(err)
            }
            )
    }
    const calculataEarning = (data: Earnings[]) => {
        data.map((item: Earnings) => {
            setTotalEarning((prev: number) => prev + item.amount)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="relative mt-5 ml-5 inline-block w-96" onClick={() => navigate("/view/earning/details")}>
            <Card className="max-w-sm">
                <Text>Earning</Text>
                <Metric>{totalEarning}rs</Metric>
            </Card>
        </div>
    )
}

export default EarningCard;