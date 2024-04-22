import axios from "axios";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [code, setCode] = useState('')
    const [confirmPass, setConfirmPass] = useState("")

    const [error, setError] = useState('none');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.put('/api/user/resetPassword', { token: code, password, confirmPass })
            .then(() => navigate('/'))
            .catch((err) => {
                setError('block');
                setMessage(err.response.data.error);
            });
    }


    return (

        <div className="email-form-container">
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <input type="text" placeholder="Verification Code" className="email-input" value={code} onChange={(e) => setCode(e.target.value)} />
                <input type="password"
                    placeholder="Enter your password"
                    className="email-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm your password"
                    className="email-input"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                />
                <button type="submit" className="submit-button" >Reset</button>
                <p style={{ fontSize: "18px", color: "red", display: error }}>{message}</p>
            </form>
        </div>

    )
}
export default ResetPassword;