import "../App.css";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";

function Nav() {
  const navStyle = {
    textDecoration: "none",
  };

  return (
    <div>
      <nav>
        <Link to="/" style={navStyle}>
          <FaStore size="30" style={{ fill: "whitesmoke" }} />
        </Link>
        <ul className="nav-ul">
          <Link to="/about" style={navStyle}>
            <li className="nav-li">About</li>
          </Link>
          <Link to="/shop" style={navStyle}>
            <li className="nav-li">Shop</li>
          </Link>
          <Link to="/contact" style={navStyle}>
            <li className="nav-li">Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
