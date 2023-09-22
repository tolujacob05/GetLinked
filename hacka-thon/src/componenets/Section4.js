import "../CSS/Section4.css";
import star1 from "../img/star1.png";
import star2 from "../img/star2.png";
import star4 from "../img/star4.png";

function Section4() {
  return (
    <div>
      <main className="main-container">
        <div className="main-heading">
          <p>Timeline</p>
          <p>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>

        <img src={star4} alt="" />

        <div className="main-section">
          <div className="sub-sec">
            <div className="announcement">
              <p>
                Hackathon Announcement{" "}
                <span>
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </span>
              </p>
            </div>

            <p>November 18, 2023</p>

            <div className="announcement">
              <p>
                Teams Registration ends
                <span>
                  Interested Participants are no longer Allowed to register
                </span>
              </p>
            </div>

            <p>November 18, 2023</p>

            <div className="announcement">
              <p>
                Getlinked Hackathon 1.0 Offically Begins
                <span>
                  Accepted teams can now proceed to build their ground breaking
                  skill driven solutions
                </span>
              </p>

              <img src={star2} alt="" />
            </div>

            <p>November 18, 2023</p>
          </div>

          <div className="sec-line">
            <div className="sec-line1"></div>
            <div className="sec-line-text">
              <span>1</span>
            </div>

            <div className="sec-line2"></div>

            <div className="sec-line-text">
              <span>2</span>
            </div>

            <div className="sec-line2"></div>

            <div className="sec-line-text">
              <span>3</span>
            </div>

            <div className="sec-line2"></div>

            <div className="sec-line-text">
              <span>4</span>
            </div>

            <div className="sec-line2"></div>

            <div className="sec-line-text">
              <span>5</span>
            </div>

            <div className="sec-line2"></div>

            <div className="sec-line-text">
              <span>6</span>
            </div>
          </div>

          <div className="sub-sec-2">
            <p>November 18, 2023</p>

            <div className="announcement-2">
              <p>
                Teams Registration begins
                <span>
                  Interested teams can now show their interest in the getlinked
                  tech hackathon 1.0 2023 by proceeding to register
                </span>
              </p>

              <img src={star1} alt="" />
            </div>

            <p>November 18, 2023</p>

            <div className="announcement-2">
              <p>
                Announcement of the accepted teams and ideas
                <span>
                  All teams whom idea has been accepted into getlinked tech
                  hackathon 1.0 2023 are formally announced
                </span>
              </p>
            </div>

            <p>November 18, 2023</p>

            <div className="announcement-2">
              <p>
                Demo Day
                <span>
                  Teams get the opportunity to pitch their projects to judges.
                  The winner of the hackathon will also be announced on this day
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Section4;
