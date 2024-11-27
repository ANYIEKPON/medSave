import React from "react";
import docImg from "../../img/fmaldoctr.jpg";
import data from "../../dataSet/scnd/data.json";
import "./thidDiv.scss";

const ThidDiv = () => {
  return (
    <div className="thdDiv">
      <div className="trdWraper">
        <div className="leftDiv">
          <div className="img">
            <img src={docImg} alt="imageDiv" />
          </div>
          <div className="sideSluh">
            <div className="icon">icon</div>
            <div className="div">
              <h4>Sign up now</h4>
              <p>for your regular check up!</p>
            </div>
          </div>
          <div className="sideSluhS">
            <div className="icon">icon</div>
            <div className="div">
              <h4>Dr Shaw cellene</h4>
            </div>
          </div>
        </div>
        <div className="rigtDiv">
          <h3>Booking Made Easy</h3>
          <ul>
            {data.map((dat) => (
              <li key={dat.id} className="listItem">
                <div className="listdiv">
                  <img src={dat.ico} alt="tick_ico" className="ico_img" />
                  <p>{dat.txt}</p>
                </div>
              </li>
            ))}
          </ul>
          <button>Book an appointment</button>
        </div>
      </div>
    </div>
  );
};

export default ThidDiv;
