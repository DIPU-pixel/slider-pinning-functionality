import React from "react";
import "./style.css";
import picone from "../../assets/picone.svg";
import pictwo from "../../assets/pictwo.svg"
import picthree from "../../assets/picthree.svg"
import picfour from "../../assets/picfour.svg"
import pic5 from "../../assets/pic5.svg"
import pic6 from "../../assets/pic6.svg"
import CardFolder from "./CardFolder";


const MainFile = () => {
  return (
    <>
      <div className="first-phase">
        <div className="stacks">
          <div>
           
            <img src={picone} alt="not avaliable" />
            
          </div>
          <div className="same-property">
              <img src={pictwo} alt="not avaliable"/>
              <p className="same-height">Breached</p>

          </div>
          <div className="same-property">
              <img src={picthree} alt="not avaliable"/>
              <p className="same-height">Breached</p>

          </div>
          <div className="same-property">
              <img src={picfour} alt="not avaliable"/>
              <p className="same-height">Breached</p>

          </div>
          <div className="same-property">
              <img src={pic5} alt="not avaliable"/>
              <p className="same-height">Breached</p>

          </div>
          <div className="same-property">
              <img src={pic6} alt="not avaliable"/>
              <p className="same-height">Breached</p>

          </div>
        </div>
        {/* <CardFolder/> */}
      </div>
    </>
  );
};

export default MainFile;
