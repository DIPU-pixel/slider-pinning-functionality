import React, { useState } from "react";
import more from "../../assets/more.svg"
import "./style.css"
const accordionData = {
  title: "",

};

const { title, content } = accordionData;

const CustomAccording = () => {

  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div className="custom-accordin">
            <div className="main-title">{title}</div>
            <div>{isActive ? "-" : <img src={more}/>}</div>
          </div>
          <div className="intial-value">
            <div className="first-value">
              <div>
                <p>Not Started</p>
              </div>
              <div>
                <div className="para-align">
                  <p className="box-color">2</p>
                <p className="box-color-here">8</p>
                </div>
              </div>
            </div>
            <div className="first-value">
              <div >
                <p>Not Started</p>
              </div>
              <div>
                <div className="para-align">
                  <p className="box-color">2</p>
                  <p className="box-color-here">8</p>
                </div>
              </div>
            </div>
            <div className="first-value">
              <div>
                <p>Not Started</p>
              </div>
              <div>
                <div className="para-align">
                  <p className="box-color">2</p>
                  <p className="box-color-green">8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isActive && (
          <div className="accordion-content">
            <input type="text" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomAccording;
