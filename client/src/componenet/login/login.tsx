import { useNavigate, NavLink } from "react-router-dom"
import "./login.css"
import { FormEvent } from "react";
import { useState } from "react";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const Navigater = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('none');
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);
    const [format, setFormat] = useState('password');



    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password)
        axios.put("/api/user/login", { email, password })
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user))
                Navigater('/')
            })
            .catch((err) => {
                console.log(err)
                setMessage(err.response.data.error)
                setError('block')
            })
    }
    const handlePassShow = () => {
        setShow(!show)
        if (show) {
            setFormat('password')
        } else {
            setFormat('text')
        }
    }

    return (

        <div className="alik">
            <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>

                <div className="signin">

                    <div className="content">

                        <h2>Log In</h2>

                        <form className="form" onSubmit={handleLogin}>

                            <div className="inputBox">
                                <div>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><i>Email</i>
                                </div>
                            </div>

                            <div className="inputBox">
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <input type={format} value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    <div style={{ color: "white", }} onClick={handlePassShow}>{show ? <FaEyeSlash /> : <FaEye className="eye" />}</div>
                                </div>
                                <i>Password</i>
                            </div>

                            <div className="links"> <NavLink to="/email/verify">Forgot Password</NavLink> <NavLink to="/signup">Signup</NavLink>

                            </div>

                            <div className="inputBox">

                                <input type="submit" value="Login" />
                                <p style={{ display: error, color: "red", textAlign: "center" }}>{message}</p>
                            </div>

                        </form>

                    </div>

                </div>

            </section >
        </div>
    );

};

export default Login;