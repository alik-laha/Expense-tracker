import { Card, Flex, Text, Metric, ProgressBar } from "@tremor/react";

const InvestMentGoalCard = () => {
    return (
        <div className="relative mt-5 ml-5 inline-block w-96">
            <Card className="max-w-sm">
                <Text>Investment</Text>
                <Metric>$ 25,000</Metric>
                <Flex className="mt-4">
                    <Text>50% of Goal</Text>
                    <Text>$ 50,000</Text>
                </Flex>
                <ProgressBar value={50} className="mt-2" />
            </Card>
        </div>
    )
}

export default InvestMentGoalCard;