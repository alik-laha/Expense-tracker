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
                        <ul>
                            <li>
                                <NavLink to="/add/earning">Add Earning</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Add Spending</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Add Invest</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Add Goal</NavLink>

                            </li>
                            <li>
                                <NavLink to="/">Create Invest In</NavLink>

                            </li>
                            <li>
                                <NavLink to="/">Create Spending On</NavLink>

                            </li>
                            <li>
                                <NavLink to="/">Create Earning From</NavLink>
                            </li>
                            {auth ? <li><a onClick={handleLogout}>logout</a></li> : <li><NavLink to="/login">login</NavLink></li>}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;