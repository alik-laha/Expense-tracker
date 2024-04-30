import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { SpendOn } from '../../type/globaleType';
import { useNavigate } from 'react-router-dom';

const AddSpending = () => {
    const navigate = useNavigate();
    const [amount, setAmount] = useState<number>();
    const [spendOn, setSpendOn] = useState<string>('');

    const [spendOnData, setSpendOnData] = useState([])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('/api/expense/spending', { amount, spendOn })
            .then((res) => {
                console.log(res.data)
                navigate('/')
            }
            )
            .catch((err) => {
                console.log(err)
            })
    }
    const fetchSpendOn = async () => {
        axios.get('/api/expense/getallspendon')
            .then((res) => {
                setSpendOnData(res.data.spendon)
                console.log(res.data.spendon)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchSpendOn();
    }, [])

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4">Add Spending</h1>
            <form onSubmit={handleSubmit} className="flex justify-center flex-col">
                <div className="mb-4">
                    <label htmlFor="amount" className="block text-sm font-semibold mb-1">Amount</label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="spendOn" className="block text-sm font-semibold mb-1">Spend On</label>
                    <select name="source" id="source" value={spendOn} onChange={(e) => setSpendOn(e.target.value)} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
                        <option value="">Select Source</option>
                        {spendOnData.map((earning: SpendOn) => (
                            <option key={earning.id} value={earning.spendOn}>{earning.spendOn}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Add Spending</button>
            </form>
        </div>
    )
}
export default AddSpending;