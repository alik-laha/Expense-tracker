import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const CreateSpendon = () => {
    const navigate = useNavigate()
    const [name, setName] = useState<string>('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        axios.post('/api/expense/spendon', { name })
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
            <h1>Create Spend On</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Create Spend On</button>
            </form>
        </div>
    )
}
export default CreateSpendon;