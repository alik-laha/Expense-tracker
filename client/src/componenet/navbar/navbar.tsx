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
    const handleclick = () => {
        const checkbox = document.querySelector('.checkbox') as HTMLInputElement
        checkbox.checked = false
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
                                <NavLink to="/" onClick={handleclick}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/add/earning" onClick={handleclick}>Add Earning</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" onClick={handleclick}>Add Spending</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" onClick={handleclick}>Add Invest</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" onClick={handleclick}>Add Goal</NavLink>

                            </li>
                            <li>
                                <NavLink to="/" onClick={handleclick}>Create Invest In</NavLink>

                            </li>
                            <li>
                                <NavLink to="/" onClick={handleclick}>Create Spending On</NavLink>

                            </li>
                            <li>
                                <NavLink to="/" onClick={handleclick}>Create Earning From</NavLink>
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