import "../CSS/Section3.css";
import plus from "../img/plus.png";
import star1 from "../img/star1.png";
import star2 from "../img/star2.png";
import star3 from "../img/star3.png";
import star4 from "../img/star4.png";
import qmark1 from "../img/qmark1.png";
import qmark2 from "../img/qmark2.png";
import qmark3 from "../img/qmark3.png";
import img8 from "../img/img8.png";
import Line from "../componenets/Line";

function Section3() {
  return (
    <>
      <div className="section-3-cont">
        <section className="section-3">
          <div className="sect-3-img">
            <img src={star4} alt="" />
          </div>
          <div className="section-3-text-1">
            <p>
              Frequently Ask <span>Question</span>
            </p>

            <p>
              We got answers to the questions that you might want to ask about
              <span>getlinked Hackathon 1.0</span>
            </p>
          </div>

          <div className="sect-3-text-2">
            <div className="sub-text">
              <p>
                Can I work on a project I started before the hackathon?
                <span></span>
              </p>
              <div className="sub-text-img">
                <img src={plus} alt="" />
              </div>
            </div>

            <div className="sub-text">
              <p>
                What happens if I need help during the hackathon?
                <span></span>
              </p>
              <div>
                <img src={plus} alt="" />
              </div>
            </div>

            <div className="sub-text">
              <p>
                What happens if I don't have an idea for a project?
                <span></span>
              </p>
              <div>
                <img src={plus} alt="" />
              </div>
            </div>

            <div className="sub-text">
              <p>
                Can I join a team or do I have to come with one?
                <span></span>
              </p>
              <div>
                <img src={plus} alt="" />
              </div>
            </div>

            <div className="sub-text">
              <p>
                What happens after the hackathon ends
                <span></span>
              </p>
              <div>
                <img src={plus} alt="" />
              </div>
            </div>

            <div className="sub-text">
              <p>
                Can I work on a project I started before the hackathon?
                <span></span>
              </p>
              <div>
                <img src={plus} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="img-section">
          <div className="q-marks">
            <img src={qmark1} alt="" />
            <img src={qmark2} alt="" />
            <img src={star3} alt="" />
            <img src={qmark3} alt="" />
          </div>
          <img src={star3} alt="" />
          <img src={star2} alt="" />
          <img src={img8} alt="" />
          <img src={star1} alt="" />
        </section>
      </div>

      <div className="L">
        <Line />
      </div>
    </>
  );
}

export default Section3;
