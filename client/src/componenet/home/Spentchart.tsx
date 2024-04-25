import { LineChart, Card, Title } from '@tremor/react';
import { useContext } from 'react';
import Context from '../context/context';

const dataFormatter = (number: number) =>
    `${Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number).toString()}`;

export default function EarningSpendingChart() {
    const { spendingData } = useContext(Context);

    return (
        <Card>
            <Title>Amount spending Over the year

            </Title>
            <LineChart
                className="mt-1 w-full h-96"
                data={spendingData}
                index="createdat"
                categories={["amount"]}
                colors={["blue"]}
                valueFormatter={dataFormatter}
                yAxisWidth={40}
            >
            </LineChart>
        </Card>
    );
}