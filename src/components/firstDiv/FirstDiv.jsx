import React from "react";
import { MdShareLocation } from "react-icons/md";
import img from "../../img/doc_img.jpg";
import "./firstDiv.scss";

const FirstDiv = () => {
  return (
    <div className="Fwrapper">
      <div className="Fcontainer">
        <div className="left">
          <div className="headText">
            <h1>Connect with top rated doctors in just a few clicks</h1>
          </div>
          <div className="spanText">
            <span>
              Select your doctor and preferred time slot to book your
              appointment
            </span>
          </div>
          <div className="searchDiv">
            <h4>Book your appointment</h4>
            <form>
              <select>
                <option value="specialty">Specialty</option>
                <option value="specialty">Specialty</option>
                <option value="specialty">Specialty</option>
                <option value="specialty">Specialty</option>
                <option value="specialty">Specialty</option>
              </select>
              <div className="location">
                <span>Location</span>
                <MdShareLocation />
              </div>
              <div className="date">
                <input type="date" placeholder="Date" />
              </div>
              <button>Search</button>
            </form>
          </div>
        </div>
        <div className="right">
          <div className="img">
            <img src={img} alt="Img" />
          </div>
          <div className="sideSluh">
            <div className="top">Icon</div>
            <div className="sc">
              <h4>200,000+</h4>
              <span>Registered Patients</span>
            </div>
          </div>
          <div className="sideSluhS">
            <div className="top">Icon</div>
            <div className="sc">
              <h4>5,000+</h4>
              <span>Doctors Online</span>
            </div>
          </div>
          <div className="sideSluhT">
            <div className="top">Icon</div>
            <div className="sc">
              <h4>Join Today</h4>
            </div>
          </div>
          <div className="sideSluhF">
            <div className="top">Icon</div>
            <div className="sc">
              <h4>#1 Worldwide</h4>
              <span>Medical Website</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstDiv;
