import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddGoal = () => {
    const navigate = useNavigate()
    const [goal, setGoal] = useState("")
    const [amount, setAmount] = useState(0)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        axios.post('/api/expense/creategoal', { goal, amount })
            .then((res) => {
                console.log(res.data)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className="container mx-auto px-4 mt-10">
            <h1 className="text-2xl font-bold">Create Goal</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    type="text"
                    placeholder="Goal"
                    onChange={(e) => setGoal(e.target.value)}
                    value={goal}
                    className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <input
                    type="number"
                    placeholder="Amount"
                    onChange={(e) => setAmount(parseInt(e.target.value))}
                    value={amount}
                    className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Submit</button>
            </form>
        </div>
    )
}
export default AddGoal;

