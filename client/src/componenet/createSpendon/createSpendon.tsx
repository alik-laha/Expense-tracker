import axios from "axios"
import { useState } from "react"

const CreateSpendon = () => {
    const [name, setName] = useState<string>('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        axios.post('/api/expense/spendon', { name })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className="container">
            <h1>Create Spend On</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <button type="submit">Create Spend On</button>
            </form>
        </div>
    )
}
export default CreateSpendon;