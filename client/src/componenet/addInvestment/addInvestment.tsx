import React, { useEffect, useState } from "react";
import axios from "axios";
import { Goal, InvestIn } from "../../type/globaleType";
import { useNavigate } from "react-router-dom";

const AddInvestment = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState<string>('');
    const [capital, setCapital] = useState<number>();
    const [goal, setGoal] = useState<string>();

    const [CompanyData, setCompanyData] = useState([]);
    const [goalData, setGoalData] = useState([]);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('/api/expense/createinvestment', { company: companyName, capital, goal })
            .then((res) => {
                console.log(res.data)
                navigate('/')
            }
            )
            .catch((err) => {
                console.log(err)
            })
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
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4">Add Investment</h1>
            <form onSubmit={handleSubmit} className="flex justify-center flex-col">
                <div className="mb-4">
                    <label htmlFor="companyName" className="block text-sm font-semibold mb-1">Company Name</label>
                    <select name="source" id="source" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
                        <option value="">Select Source</option>
                        {CompanyData.map((earning: InvestIn) => (
                            <option key={earning.id} value={earning.company}>{earning.company}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="capital" className="block text-sm font-semibold mb-1">Capital</label>
                    <input type="number" id="capital" value={capital} onChange={(e) => setCapital(Number(e.target.value))} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="goal" className="block text-sm font-semibold mb-1">Goal</label>
                    <select name="source" id="source" value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
                        <option value="">Select Source</option>
                        {goalData.map((earning: Goal) => (
                            <option key={earning.id} value={earning.goal}>{earning.goal}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Add Investment</button>
            </form>
        </div>
    )
}
export default AddInvestment;