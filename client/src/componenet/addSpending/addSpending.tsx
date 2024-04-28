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
        <div className="container">
            <h1>Add Spending</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
                </div>
                <div className="form-group">
                    <label htmlFor="spendOn">Spend On</label>
                    <select name="source" id="source" value={spendOn} onChange={(e) => setSpendOn(e.target.value)}>
                        <option value="">Select Source</option>
                        {spendOnData.map((earning: SpendOn) => (
                            <option key={earning.id} value={earning.spendOn}>{earning.spendOn}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Add Spending</button>
            </form>
        </div>
    )
}
export default AddSpending;