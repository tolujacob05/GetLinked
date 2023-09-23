import "../CSS/Section7.css";
import star1 from "../img/star1.png";
import star2 from "../img/star2.png";
import star4 from "../img/star4.png";
import Button from "./Button";
import vector1 from "../img/vector1.png";
import vector2 from "../img/vector2.png";
import flare from "../img/flare.png";

function Section7() {
  return (
    <>
      <section className="privacy-policy">
        <div className="policy">
          <img src={star2} alt="" />
          <p>
            Privacy Policy and
            <span>Terms</span>
          </p>

          <img src={star4} alt="" />

          <p>Last updated on September 12, 2023</p>

          <p>
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>

          <img src={star4} alt="" />

          <div className="terms">
            <div className="term">
              <p>
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>

              <p>Licensing Policy</p>

              <p>Here are terms of our Standard License:</p>
            </div>

            <div className="terms-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
              </svg>

              <p>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </div>

            <div className="terms-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
              </svg>

              <p>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </div>

            <div className="q">
              <Button>Read More</Button>
            </div>
          </div>

          <img src={flare} alt="" />
        </div>

        <div className="p-img">
          <img src={vector1} alt="" />
          <img src={star1} alt="" />
          <img src={star4} alt="" />
          <img src={star1} alt="" />
          <img src={vector2} alt="" />
          <img src={star2} alt="" />
        </div>
      </section>
    </>
  );
}

export default Section7;
