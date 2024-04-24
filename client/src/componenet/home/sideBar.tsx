import { NavLink } from "react-router-dom";
import "./home.css" // Import your CSS file for styling

const Sidebar = () => {
    return (
        <div className="sidebar">
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
            </ul>
        </div>
    );
};

export default Sidebar;