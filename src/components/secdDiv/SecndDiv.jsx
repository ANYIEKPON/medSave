import React from "react";
import "./secndDiv.scss";
import sndData from "../../dataSet/first/data.json";

const secndDiv = () => {
  return (
    <div className="divWrapper">
      <div className="divContainer">
        <div className="topDiv">
          <h2>How it works</h2>
        </div>
        <div className="secondDiv">
          {sndData.map((sDiv) => (
            <div key={sDiv.id} className="descDiv">
              <div className="icon">
                <img src={sDiv.icon} alt="icon_img" />
              </div>
              <h3>{sDiv.title}</h3>
              <p>{sDiv.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default secndDiv;
