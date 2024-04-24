import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";

const spendCard = () => {
    return (
        <div className="relative mt-5 ml-5 inline-block w-96">
            <Card className="max-w-sm">
                <Text>Spent Amount</Text>
                <Metric>$ 25,000</Metric>
                <Flex className="mt-4">
                    <Text>Spent 50% of earning</Text>
                    <Text>$ 50,000</Text>
                </Flex>
                <ProgressBar value={50} className="mt-2" />
            </Card>
        </div>
    )
}

export default spendCard;