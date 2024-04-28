import { useEffect, useState } from "react";
import axios from "axios";
import { Goal, InvestIn } from "../../type/globaleType";

const AddInvestment = () => {
    const [companyName, setCompanyName] = useState<string>('');
    const [capital, setCapital] = useState<number>();
    const [goal, setGoal] = useState<string>();

    const [CompanyData, setCompanyData] = useState([]);
    const [goalData, setGoalData] = useState([]);
    const handleSubmit = () => {
        console.log(companyName, capital, goal)
    }
    const fetchCompany = async () => {
        axios.get('/api/expense/getinvestmentin')
            .then((res) => {
                setCompanyData(res.data.investIns)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const fetchGoal = async () => {
        axios.get('/api/expense/getallgoal')
            .then((res) => {
                setGoalData(res.data.goals)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchCompany();
        fetchGoal();
    }, [])



    return (
        <div className="container">
            <h1>Add Investment</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <select name="source" id="source" value={companyName} onChange={(e) => setCompanyName(e.target.value)}>
                        <option value="">Select Source</option>
                        {CompanyData.map((earning: InvestIn) => (
                            <option key={earning.id} value={earning.company}>{earning.company}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capital">Capital</label>
                    <input type="number" id="capital" value={capital} onChange={(e) => setCapital(Number(e.target.value))} />
                </div>
                <div className="form-group">
                    <label htmlFor="goal">Goal</label>
                    <select name="source" id="source" value={goal} onChange={(e) => setGoal(e.target.value)}>
                        <option value="">Select Source</option>
                        {goalData.map((earning: Goal) => (
                            <option key={earning.id} value={earning.goal}>{earning.goal}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Add Investment</button>
            </form>
        </div>
    )
}
export default AddInvestment;