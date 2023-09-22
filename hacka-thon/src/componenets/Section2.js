import "../CSS/Section2.css";
import img7 from "../img/img7.png";
import flare from "../img/flare.png";
import star1 from "../img/star1.png";
import star2 from "../img/star2.png";
import star6 from "../img/star6.png";
import Ellipse from "../img/Ellipse.png";
import Button from "./Button";
import flare2 from "../img/flare2.png";
import Line from "../componenets/Line";

function Section2() {
  return (
    <>
      <div className="box">
        <section className="container1">
          <div className="img-cont">
            <img src={star6} alt="" />
            <img src={star2} alt="" />
            <div className="ellipse">
              <img src={Ellipse} alt="" />
              <img src={img7} alt="" />
            </div>
            <img src={star1} alt="" />

            <div className="flare-4">
              <img src={flare} alt="" />
            </div>
          </div>

          <div className="text-container"></div>
        </section>

        <section className="container2">
          <div className="heading">
            <h2>
              Judging Criteria<span>Key attributes</span>{" "}
            </h2>
          </div>

          <div className="text-cont">
            <p>
              Innovation and Creativity<span>:</span>{" "}
              <span>
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </span>
            </p>

            <p>
              Functionality:{" "}
              <span>
                Assess how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </span>
            </p>

            <p>
              Impact and Relevance:{" "}
              <span>
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </span>
            </p>

            <p>
              Technical Complexity:{" "}
              <span>
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </span>
            </p>

            <p>
              Adherence to Hackathon Rules:{" "}
              <span>
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </span>
            </p>

            <div className="b">
              <Button>Read More</Button>
            </div>

            <img src={flare2} alt="" />
          </div>
        </section>
      </div>
      <div className="sect-line">
        <Line />
      </div>
    </>
  );
}

export default Section2;
