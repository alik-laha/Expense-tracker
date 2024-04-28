import axios from 'axios';
import { useState } from 'react';

const CreateEarnigFrom = () => {
    const [source, setSource] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('/api/expense/createearningfrom', { source: source })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="source" onChange={(e) => setSource(e.target.value)} value={source} />
            <button type="submit">Submit</button>
        </form>
    );

}
export default CreateEarnigFrom;
