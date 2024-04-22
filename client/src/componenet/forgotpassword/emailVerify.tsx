import axios from 'axios';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const EmailVerify = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('none');


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.put('/api/user/forgotPassword', { email })
            .then(() => navigate('/reset/password'))
            .catch(() => setError('block'));
    };

    return (
        <div className="email-form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email-input"
                />
                <button type="submit" className="submit-button">Verify</button>
                <p style={{ fontSize: "18px", color: "red", display: error }}>Email is not Registared please check the Email</p>
            </form>
        </div>
    );
};

export default EmailVerify;