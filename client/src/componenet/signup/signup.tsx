import { useNavigate, NavLink } from "react-router-dom"
import { FormEvent, useState, useEffect } from "react";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Signup = () => {
    const Navigater = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('none');
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);
    const [format, setFormat] = useState('password');

    useEffect(() => {
        const auth = localStorage.getItem('loggedIn')
        if (auth) {
            Navigater('/')
        }
    })

    const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post("/api/user/signup", { name, email, password: pass, confirmPass })
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('loggedIn', 'true')
                Navigater('/')
            })
            .catch((err) => {
                console.log(err)
                setMessage(err.response.data.error)
                localStorage.clear()
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

                        <h2>Signup</h2>

                        <form className="form" onSubmit={handleSignUp}>
                            <div className="inputBox">

                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><i>User Name</i>

                            </div>

                            <div className="inputBox">

                                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /><i>Email</i>

                            </div>

                            <div className="inputBox">
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <input type={format} value={pass} onChange={(e) => setPass(e.target.value)} required />
                                    <div style={{ color: "white", }} onClick={handlePassShow}>{show ? <FaEyeSlash /> : <FaEye className="eye" />}</div>
                                </div>
                                <i>Password</i>

                            </div>
                            <div className="inputBox">
                                <input type="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} required /> <i>Confirm Password</i>

                            </div>

                            <div className="links"> <a href="#">Forgot Password</a> <NavLink to="/login">Login</NavLink>

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
    )
}
export default Signup;