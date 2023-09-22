import "../CSS/Section6.css";
import star1 from "../img/star1.png";
import star4 from "../img/star4.png";
import flare from "../img/flare.png";
import flare2 from "../img/flare2.png";
import img11 from "../img/img11.png";
import Line from "./Line";

function Section6() {
  return (
    <div>
      <section className="partners-section">
        <div className="partners">
          <p>Partners and Sponsors</p>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>

        <img src={star4} alt="" />

        <img src={flare} alt="" />

        <div className="sponsors">
          <img src={star4} alt="" />
          <img src={img11} alt="" />
          <img src={star1} alt="" />
        </div>

        <img src={flare2} alt="" />
      </section>
      <Line />
    </div>
  );
}

export default Section6;
