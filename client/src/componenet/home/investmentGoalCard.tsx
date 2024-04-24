import { Card, Flex, Text, Metric, ProgressBar } from "@tremor/react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Goal, Investment } from "../../type/globaleType";
import Context from "../context/context";



const InvestMentGoalCard = () => {
    const [goal, setGoal] = useState(0)
    const [invested, setInvested] = useState(0)
    const { setTotalInvested } = useContext(Context)

    const fetchData = () => {
        axios.get("/api/expense/getallgoal")
            .then((res): void => {
                countGoal(res.data.goals)
                axios.get('/api/expense/getallinvestment').then((res) => {
                    console.log(res.data)
                    countInvest(res.data.investments)
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
            setTotalInvested((prev: number): void => prev + item.capital)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])



    return (
        <div className="relative mt-5 ml-5 inline-block w-96">
            <Card className="max-w-sm">
                <Text>Investment</Text>
                <Metric>{invested}rs</Metric>
                <Flex className="mt-4">
                    <Text>{invested / goal * 100}% of Goal</Text>
                    <Text>{goal}rs</Text>
                </Flex>
                <ProgressBar value={invested / goal * 100} className="mt-2" />
            </Card>
        </div>
    )
}

export default InvestMentGoalCard;