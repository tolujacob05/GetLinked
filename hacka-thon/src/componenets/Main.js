import "../CSS/Main.css";
import Star1 from "../img/star1.png";
import Star2 from "../img/star2.png";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/Img3.png";
import chain from "../img/chain.png";
import vector3 from "../img/vector3.png";
import vector4 from "../img/vector4.png";
import Button from "./Button";
import { useEffect, useState } from "react";
import Line from "./Line";
import flare1 from "../img/flare1.png";
import flare from "../img/flare.png";

function Main() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="main">
        <main className="main-1">
          <div className="flare-1">
            <img src={flare1} alt="" />
          </div>
          <div className="star-1">
            <img src={Star1} alt="" />
          </div>

          <div className="heading">
            <p>
              getlinked Tech
              <span>
                <img src={img1} alt="" />
              </span>
            </p>
          </div>

          <div className="heading-2">
            <p>
              {" "}
              Hackathon <span>1.0</span>
              <span>
                <img src={chain} alt="" />
              </span>
              <span>
                <img src={vector4} alt="" />
              </span>
            </p>
            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
          </div>

          <div className="reg">
            <Button>Register</Button>
          </div>

          <div className="time">
            <h2>
              {String(time.getHours()).padStart(2, "0")}
              <span>H</span>:
            </h2>
            <h2>
              {String(time.getMinutes()).padStart(2, "0")}
              <span>M</span>:
            </h2>
            <h2>
              {String(time.getSeconds()).padStart(2, "0")}
              <span>S</span>
            </h2>

            <div className="star-2">
              <img src={Star2} alt="" />
            </div>
          </div>
        </main>

        <main className="main-2">
          <div className="rev">
            <p>Igniting a Revolution in HR Innovation</p>
            <img src={vector3} alt="" />
          </div>

          <div className="star-3">
            <img src={Star2} alt="" />
          </div>

          <div className="img-sec">
            <div className="flare-2">
              <img src={flare} alt="" />
            </div>

            <div className="img1">
              <img src={img3} alt="" />
            </div>

            <div className="img2">
              <img src={img2} alt="" />
            </div>
          </div>
        </main>
      </div>

      <div className="main-line">
        <Line />
      </div>
    </>
  );
}

export default Main;
