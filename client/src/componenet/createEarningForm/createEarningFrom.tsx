import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateEarnigFrom = () => {
    const navigate = useNavigate();
    const [source, setSource] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('/api/expense/createearningfrom', { source: source })
            .then((res) => {
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">Create Earning From</h1>
            <form onSubmit={handleSubmit} className="flex">
                <input
                    type="text"
                    placeholder="source"
                    onChange={(e) => setSource(e.target.value)}
                    value={source}
                    className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Submit</button>
            </form>
        </div>
    );

}
export default CreateEarnigFrom;
