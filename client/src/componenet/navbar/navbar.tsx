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
                    {/* <div className="menu-items">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="#">About</NavLink></li>
                        <li><NavLink to="#">Contact</NavLink></li>
                        {auth ? <li><a onClick={handleLogout}>logout</a></li> : <li><NavLink to="/login">login</NavLink></li>}
                    </div> */}
                    <div className="menu-items">
                        <ul>
                            <li>
                                <NavLink to="/">Earning</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Spending</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Invest</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Goal</NavLink>

                            </li>
                            <li>
                                <NavLink to="/">Invest In</NavLink>

                            </li>
                            <li>
                                <NavLink to="/">Spending On</NavLink>

                            </li>
                            <li>
                                <NavLink to="/">Earning From</NavLink>
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