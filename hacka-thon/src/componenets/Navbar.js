import "../CSS/Navbar.css";
import Button from "./Button";
import Line from "./Line";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to={"/"} className="link">
            <h2>
              get<span>linked</span>
            </h2>
          </Link>
        </div>

        <div className="nav-items">
          <ul>
            <li>timeline</li>
            <li>overview</li>
            <li>FAQS</li>
            <Link to={"/contact"} className="link">
              <li>Contact</li>
            </Link>
          </ul>
          <Link to={"/register"}>
            <Button>Register</Button>
          </Link>
        </div>
      </nav>
      <Line />
    </>
  );
}

export default Navbar;
