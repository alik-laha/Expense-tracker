import axios from 'axios';
import { useState } from 'react';

const CreateEarnigFrom = () => {
    const [sorce, setSource] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const earning = { sorce };
            await axios.post("http://localhost:3001/earnings", earning);
            window.location.href = "/";
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="source" onChange={(e) => setSource(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );

}
export default CreateEarnigFrom;
