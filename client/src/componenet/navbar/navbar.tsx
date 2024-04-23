import axios from "axios";
import "./navbar.css";
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    const auth = localStorage.getItem('loggedIn')
    const handleLogout = () => {
        localStorage.clear()
        axios.get('/api/user/logout')
            .then((res) => {
                console.log(res.data)
                navigate('/login')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <nav>
            <div className="navbar">
                <div className="container nav-container">
                    <input className="checkbox" type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <div className="menu-items">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="#">About</NavLink></li>
                        <li><NavLink to="#">Contact</NavLink></li>
                        {auth ? <li><a onClick={handleLogout}>logout</a></li> : <li><NavLink to="/login">login</NavLink></li>}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;