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
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="text" placeholder="Goal" onChange={(e) => setGoal(e.target.value)} value={goal} />
                <input type="number" placeholder="Amount" onChange={(e) => setAmount(parseInt(e.target.value))} value={amount} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AddGoal;

