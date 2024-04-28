import { useState } from "react";


const AddEvent = () => {
    const [companyName, setCompanyName] = useState<string>('');
    const [capital, setCapital] = useState<number>();
    const [goal, setGoal] = useState<number>();

    const handleSubmit = () => {
        console.log(companyName, capital, goal)
    }
    return (
        <div className="container">
            <h1>Add Investment</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="capital">Capital</label>
                    <input type="number" id="capital" value={capital} onChange={(e) => setCapital(Number(e.target.value))} />
                </div>
                <div className="form-group">
                    <label htmlFor="goal">Goal</label>
                    <input type="number" id="goal" value={goal} onChange={(e) => setGoal(Number(e.target.value))} />
                </div>
                <button type="submit">Add Investment</button>
            </form>
        </div>
    )
}
export default AddEvent;