import { Link } from "react-router-dom";

 export const Navbar = () => {
    return (
        <div className="navbar">
          
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/signup" className="nav-link">Sign Up</Link>

        </div>
    );
}

