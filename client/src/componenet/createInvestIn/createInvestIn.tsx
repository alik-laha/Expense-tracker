import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const CreateInvestIn = () => {
    const navigate = useNavigate();
    const [company, setCompany] = useState<string>('');
    const [type, setType] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('/api/expense/createinvestmentin', { company, type })
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">Create Invest In</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    type="text"
                    placeholder="Company"
                    onChange={(e) => setCompany(e.target.value)}
                    value={company}
                    className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <input
                    type="text"
                    placeholder="Type"
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                    className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Submit</button>
            </form>
        </div>
    );
}
export default CreateInvestIn;