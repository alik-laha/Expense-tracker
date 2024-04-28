import axios from 'axios';
import React, { useState } from 'react';

const CreateInvestIn = () => {
    const [company, setCompany] = useState<string>('');
    const [type, setType] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('/api/expense/createinvestmentin', { company, type })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    type="text"
                    placeholder="Company"
                    onChange={(e) => setCompany(e.target.value)}
                    value={company}
                />
                <input
                    type="text"
                    placeholder="Type"
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default CreateInvestIn;