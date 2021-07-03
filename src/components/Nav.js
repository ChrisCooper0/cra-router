import "../App.css";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";

function Nav() {
  // const navStyle = {
  //   color: "white",
  //   textDecoration: "none",
  // };

  return (
    <div>
      <nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          <FaStore size="30" style={{ fill: "whitesmoke" }} />
        </Link>
        <ul className="nav-ul">
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li className="nav-li">About</li>
          </Link>
          <Link to="/shop" style={{ textDecoration: "none" }}>
            <li className="nav-li">Shop</li>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li className="nav-li">Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
