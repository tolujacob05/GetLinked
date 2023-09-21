import "../CSS/Navbar.css";
import Button from "./Button";
import Line from "./Line";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h2>
            get<span>linked</span>
          </h2>
        </div>

        <div className="nav-items">
          <ul>
            <li>timeline</li>
            <li>overview</li>
            <li>FAQS</li>
            <li>contact</li>
          </ul>
          <Button>Register</Button>
        </div>
      </nav>
      <Line />
    </>
  );
}

export default Navbar;
