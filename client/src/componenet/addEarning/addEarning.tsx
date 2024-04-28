import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, FormEvent, useEffect } from 'react';
import { EarningFrom } from '../../type/globaleType';

const AddEarning = () => {
    const [sorce, setSource] = useState('');
    const [amount, setAmount] = useState('');

    const [earningFrom, setEarningFrom] = useState([])

    const fetchSource = async () => {
        axios.get('/api/expense/getearningfrom')
            .then((res) => {
                setEarningFrom(res.data.earningFrom)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchSource();
    }, [])
    const navigate = useNavigate()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        axios.post('/api/expense/earnings', { source: sorce, amount })
            .then((res) => {
                console.log(res.data)
                navigate('/')
            }
            )
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className="container">
            <h1>Add Earning</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="source">Source</label>
                    <select name="source" id="source" value={sorce} onChange={(e) => setSource(e.target.value)}>
                        <option value="">Select Source</option>
                        {earningFrom.map((earning: EarningFrom) => (
                            <option key={earning.id} value={earning.source}>{earning.source}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button type="submit">Add Earning</button>
            </form>
        </div>
    )
}
export default AddEarning;