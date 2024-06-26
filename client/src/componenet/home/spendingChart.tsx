import { LineChart, Card, Title } from '@tremor/react';
import { useContext } from 'react';
import Context from '../context/context';

const dataFormatter = (number: number) =>
    `${Intl.NumberFormat('en-IN', { currency: 'INR' }).format(number).toString()}`;

export default function EarningSpendingChart() {

    const { spendingData } = useContext(Context);

    return (
        <Card >
            <Title>Amount spending Over the year

            </Title>
            <LineChart
                className="mt-4 h-72"
                data={spendingData}
                index="createdAt"
                yAxisWidth={60}
                categories={['amount']}
                colors={['indigo']}
                valueFormatter={dataFormatter}
            />
        </Card>
    );
}