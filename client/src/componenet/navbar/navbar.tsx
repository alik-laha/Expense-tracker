import axios from "axios";
import "./navbar.css";
import { useNavigate } from 'react-router-dom';

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
    // const handleclick = () => {
    //     const checkbox = document.querySelector('.checkbox') as HTMLInputElement
    //     checkbox.checked = false
    // }
    return (
        <nav id="navbar" className="z-30">
            <ul className="navbar-items flexbox-col">
                <li className="navbar-logo flexbox-left">
                    <a className="navbar-item-inner flexbox">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 1438.88 1819.54">
                            <polygon points="925.79 318.48 830.56 0 183.51 1384.12 510.41 1178.46 925.79 318.48" />
                            <polygon points="1438.88 1663.28 1126.35 948.08 111.98 1586.26 0 1819.54 1020.91 1250.57 1123.78 1471.02 783.64 1663.28 1438.88 1663.28" />
                        </svg>
                    </a>
                </li>
                <li className="navbar-item flexbox-left" onClick={() => navigate('/')}>
                    <a className="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">

                        </div>
                        <span className="link-text">Home</span>
                    </a>
                </li>
                <li className="navbar-item flexbox-left" onClick={() => navigate('/add/investment')}>
                    <a className="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">

                        </div>
                        <span className="link-text">Add Investment</span>
                    </a>
                </li>
                <li className="navbar-item flexbox-left" onClick={() => navigate('/add/spending')}>
                    <a className="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">

                        </div>
                        <span className="link-text">Add Spending</span>
                    </a>
                </li>
                <li className="navbar-item flexbox-left" onClick={() => navigate('/add/earning')}>
                    <a className="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">

                        </div>
                        <span className="link-text">Add Earning</span>
                    </a>
                </li>
                <li className="navbar-item flexbox-left" onClick={() => navigate('/create/investin')}>
                    <a className="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">

                        </div>
                        <span className="link-text">Create Invest in</span>
                    </a>
                </li>
                <li className="navbar-item flexbox-left" onClick={() => navigate('/create/earningfrom')}>
                    <a className="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">

                        </div>
                        <span className="link-text">Create Earning From</span>
                    </a>
                </li>
                <li className="navbar-item flexbox-left" onClick={() => navigate('/add/goal')}>
                    <a className="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">

                        </div>
                        <span className="link-text">Create Goal</span>
                    </a>
                </li>
                <li className="navbar-item flexbox-left" onClick={() => navigate('/create/spendon')}>
                    <a className="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">

                        </div>
                        <span className="link-text">Create Spent on</span>
                    </a>
                </li>
                <li className="navbar-item flexbox-left" onClick={handleLogout}>
                    <a className="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">

                        </div>
                        {auth ? <span className="link-text">Logout</span> : <span className="link-text">Login</span>}
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;