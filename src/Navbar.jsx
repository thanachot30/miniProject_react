import { Outlet, Link } from "react-router-dom";
const Navbar = () =>{
    return (
        <div>
            {/* <a href="/">Home</a> */}
            <Link to="/">Home Link</Link>
            <Link to="/Owner">Owner Link</Link>
            {/* <a href="/Owner">Owner</a> */}
        </div>
    )
}

export default Navbar