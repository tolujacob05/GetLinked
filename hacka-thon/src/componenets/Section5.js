import "../CSS/Section5.css";
import star1 from "../img/star1.png";
import star2 from "../img/star2.png";
import star4 from "../img/star4.png";
import img9 from "../img/img9.png";
import img10 from "../img/img10.png";
import flare1 from "../img/flare.png";
import flare2 from "../img/flare2.png";

function Section5() {
  return (
    <div className="award-section">
      <section className="awards">
        <div className="award">
          <img src={star4} alt="" />
          <div className="award-2">
            <img src={img9} alt="" />
            <img src={flare1} alt="" />
          </div>
          <img src={star1} alt="" />
        </div>

        <div className="prize-section">
          <div className="prize-text">
            <p>
              Prizes and
              <span>Rewards</span>
            </p>

            <p>
              Highlight of the prizes or rewards for winners and for
              participants
            </p>

            <img src={star4} alt="" />

            <img src={star1} alt="" />
          </div>

          <div className="prizes">
            <img src={star1} alt="" />
            <img src={img10} alt="" />
            <img src={star2} alt="" />
          </div>
          <img src={flare2} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Section5;
