import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar-light bg-light">
      <div>
        <Link className="navbar-brand" to="/">
          User Auth
        </Link>
      </div>

      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
