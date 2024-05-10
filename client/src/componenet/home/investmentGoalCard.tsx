import { Card, Flex, Text, Metric, ProgressBar } from "@tremor/react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Goal, Investment } from "../../type/globaleType";
import Context from "../context/context";
import { useNavigate } from "react-router-dom";


const InvestMentGoalCard = () => {
    const navigate = useNavigate()
    const [goal, setGoal] = useState<number>(0);
    const [invested, setInvested] = useState<number>(0);
    const { setTotalInvested, setInvestedData } = useContext(Context)

    const fetchData = () => {
        setGoal(0)
        setInvested(0)
        setTotalInvested(0)
        setInvestedData([])
        axios.get("/api/expense/getallgoal")
            .then((res): void => {
                countGoal(res.data.goals)
                axios.get('/api/expense/getallinvestment').then((res) => {
                    countInvest(res.data.investments)
                    setInvestedData(res.data.investments)
                }).catch(err => console.log(err))
            }
            ).catch((err) => {
                console.log(err)
            }
            )
    }

    const countGoal = (data: Array<Goal>) => {
        data.map((item) => {
            setGoal((prev) => prev + item.amount)
        })
    }
    const countInvest = (data: Array<Investment>) => {
        data.map((item): void => {
            setInvested((prev) => prev + item.capital)
            setTotalInvested(invested)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])



    return (
        <div className="relative mt-5 ml-5 inline-block w-96" onClick={() => navigate("/view/investment/details")}>
            <Card className="max-w-sm">
                <Text>Investment</Text>
                <Metric>{invested}rs</Metric>
                <Flex className="mt-4">
                    <Text>{(invested / goal * 100).toFixed(2)}% of Goal</Text>
                    <Text>{goal}rs</Text>
                </Flex>
                <ProgressBar value={invested / goal * 100} className="mt-2" />
            </Card>
        </div>
    )
}

export default InvestMentGoalCard;