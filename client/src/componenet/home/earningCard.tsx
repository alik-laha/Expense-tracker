import { Card, Text, Metric } from "@tremor/react";

const EarningCard = () => {
    return (
        <div className="relative mt-5 ml-5 inline-block w-96">
            <Card className="max-w-sm">
                <Text>Earning</Text>
                <Metric>$ 25,000</Metric>
            </Card>
        </div>
    )
}

export default EarningCard;