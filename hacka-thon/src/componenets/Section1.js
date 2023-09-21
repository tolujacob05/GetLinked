import "../CSS/Section1.css";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";
import img6 from "../img/img6.png";
import star1 from "../img/star1.png";
import star2 from "../img/star2.png";
import star3 from "../img/star3.png";
import star4 from "../img/star4.png";
import flare from "../img/flare.png";
import flare2 from "../img/flare2.png";
import Line from "./Line";

function Section1() {
  return (
    <div>
      <section className="section-1">
        <div className="sec-img-1">
          <div className="first">
            <img src={star3} alt="" />
          </div>
          <div className="second">
            <img src={img4} alt="" />
          </div>
          <div className="third">
            <img src={img5} alt="" />
          </div>
        </div>

        <div className="intro">
          <p>
            Introduction to getlinked <span>tech Hackathon 1.0</span>
          </p>

          <div className="star-4">
            <img src={star4} alt="" />
          </div>

          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </section>

      <Line />

      <section className="section-2">
        <div className="sect-2-text">
          <div className="flare-3">
            <img src={flare} alt="" />
          </div>

          <div className="word">
            <div className="star-5">
              <img src={star2} alt="" />
            </div>

            <p>
              Rules and <span>Guidelines</span>
            </p>

            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>

            <div className="star-6">
              <img src={star1} alt="" />
            </div>
          </div>
        </div>

        <div className="sect-2-img">
          <img src={img6} alt="" />

          <img src={flare2} alt="" />
        </div>
      </section>
      <Line />
    </div>
  );
}

export default Section1;
