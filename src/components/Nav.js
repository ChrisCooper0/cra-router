import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div>
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
          <Link style={navStyle} to="/about">
            <li>About</li>
          </Link>
          <Link style={navStyle} to="/shop">
            <li>Shop</li>
          </Link>
          <Link style={navStyle} to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
