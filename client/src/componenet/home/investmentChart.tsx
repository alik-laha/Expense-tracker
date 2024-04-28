import { LineChart, Card, Title } from '@tremor/react';
import { useContext } from 'react';
import Context from '../context/context';

const dataFormatter = (number: number) =>
    `${Intl.NumberFormat('en-IN', { currency: 'INR' }).format(number).toString()}`;

export default function InvestedChart() {
    const { investedData } = useContext(Context);

    return (
        <Card>
            <Title>Amount Invested Over the year

            </Title>
            <LineChart
                className="mt-1 w-full h-96"
                data={investedData}
                index="createdAt"
                categories={["capital"]}
                colors={["blue"]}
                valueFormatter={dataFormatter}
                yAxisWidth={60}
            >
            </LineChart>
        </Card>
    );
}