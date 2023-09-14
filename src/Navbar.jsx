import { Outlet, Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () =>{
    return (
        <div className="Nav_manu">
            {/* <a href="/">Home</a> */}
            <Link to="/" id="Home_link">Home</Link>
            <Link to="/Owner" id="Owner_link">Owner</Link>
            {/* <a href="/Owner">Owner</a> */}
        </div>
    )
}

export default Navbar