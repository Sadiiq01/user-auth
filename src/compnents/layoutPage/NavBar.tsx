import "./Navbar.css";
const NavBar = () => {
  return (
    <nav className="navbar-light bg-light">
      <div>
        <a className="navbar-brand" href="#">
          User Auth
        </a>
      </div>

      <div className="nav-links">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About us </a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <button className="btn btn-primary">Login</button>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
