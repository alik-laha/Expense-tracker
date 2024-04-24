import { Card, Flex, Text, Metric, ProgressBar } from "@tremor/react";

const HomeRightPage = () => {
    return (
        <div className="-z-50">
            <Card className="max-w-sm">
                <Text>Income</Text>
                <Metric>$ 25,000</Metric>
                <Flex className="mt-4">
                    <Text>50% of target</Text>
                    <Text>$ 50,000</Text>
                </Flex>
                <ProgressBar value={50} className="mt-2" />
            </Card>
        </div>
    )
}

export default HomeRightPage;