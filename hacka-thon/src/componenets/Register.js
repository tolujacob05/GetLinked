import vector5 from "../img/vector5.png";
// import Button from "./Button";
import star2 from "../img/star2.png";
import star4 from "../img/star4.png";
import flare from "../img/flare.png";
import "../CSS/Register.css";

function Register() {
  return (
    <main className="main-register">
      <div className="reg-img">
        <img src={star4} alt="" />
        <img src={flare} alt="" />
        <img src={vector5} alt="" />
        <img src={star2} alt="" />
        <img src={star4} alt="" />
      </div>

      <div className="register">
        <p>Register</p>
        <div className="reg-input">
          <p>Be part of this movement 🚶🚶‍♀️</p>

          <p>CREATE YOUR ACCOUNT</p>

          <form className="reg-form">
            <label>
              Team's Name
              <input
                type="text"
                value=""
                placeholder="Enter the name of your group"
              />
            </label>

            <label>
              Phone
              <input
                type="number"
                value=""
                placeholder="Enter your phone number"
              />
            </label>

            <label>
              Email
              <input
                type="text"
                value=""
                placeholder="Enter your email address"
              />
            </label>

            <label>
              Project Topic
              <input
                type="text"
                value=""
                placeholder="What is your group project topic"
              />
            </label>

            <label>
              Category
              <select>
                <option className="option">select your category</option>
              </select>
            </label>

            <label>
              Group
              <select>
                <option className="option">Select</option>
              </select>
            </label>
          </form>
        </div>

        <p>Please review your registration details before submitting</p>

        <div className="tick">
          <label>
            <input type="checkbox" />
            <p>
              I agree with the event terms and conditions and privacy and policy
            </p>
          </label>
        </div>

        <div className="m">
          <button>Register Now</button>
        </div>
      </div>
    </main>
  );
}

export default Register;
