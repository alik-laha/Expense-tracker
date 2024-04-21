import '../../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Verify() {
    const navigator = useNavigate();
    const handleClick = () => {
        axios.get('/api/user/email/verify')
            .then((res) => {
                console.log(res)
                navigator('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className="container">
            <h1>Email Verification</h1>
            <button onClick={handleClick}>Verify Email</button>
        </div>
    );
}

export default Verify;