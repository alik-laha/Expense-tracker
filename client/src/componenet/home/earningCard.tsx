import { Card, Text, Metric } from "@tremor/react";
import { useContext, useEffect } from "react";
import Context from "../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EarningCard = () => {
    const { setEarningData, totalEarning } = useContext(Context)

    const navigate = useNavigate();
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
        <div className="relative mt-5 ml-5 inline-block w-96" onClick={() => navigate("/view/earning/details")}>
            <Card className="max-w-sm">
                <Text>Earning</Text>
                <Metric>{totalEarning}rs</Metric>
            </Card>
        </div>
    )
}

export default EarningCard;