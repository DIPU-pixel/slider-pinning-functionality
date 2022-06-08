import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import more from "../../assets/more.svg"
import "./style.css";
const accordionData = {
  title: "Reconciliation",
};
const { title } = accordionData;
const ReconciliationAcc = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div className="custom-accordin">
              <div className="main-title">Reconciliation</div>
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
              <div className="card-value">
              <div className="new-card">
                <div className="card-body-1">
                  <p>Cash Regon with CP cash</p>
                  <div className="value">
                    <IconButton aria-label="more" id="long-button">
                      <MoreVertIcon />
                    </IconButton>
                  </div>
                </div>
              </div>

              <div className="new-card-2  ">
                <div className="card-body-2">
                  <button className="button">BREACHED/FAILED</button>

                </div>
                <p className="value-2">
                  SLA:20JUL  2020,9:10AM
                </p>

              </div>

              </div>
              <div className="secndcard">
              <div className="card-value">
              <div className="new-card">
                <div className="card-body-1">
                  <p>Cash Regon with CP cash</p>
                  <div className="value">
                    <IconButton aria-label="more" id="long-button">
                      <MoreVertIcon />
                    </IconButton>
                  </div>
                </div>
              </div>

              <div className="new-card-2  ">
                <div className="card-body-2">
                  <button className="button">BREACHED/FAILED</button>

                </div>
                <p className="value-3">
                SLA:20JUL  2020,9:10AM
                </p>

              </div>

              </div>

              </div>

              <div className="secndcard">
              <div className="card-value">
              <div className="new-card">
                <div className="card-body-1">
                  <p>Cash Regon with CP cash</p>
                  <div className="value">
                    <IconButton aria-label="more" id="long-button">
                      <MoreVertIcon />
                    </IconButton>
                  </div>
                </div>
              </div>

              <div className="new-card-2  ">
                <div className="card-body-2">
                  <button className="button">BREACHED/FAILED</button>

                </div>
                <p className="value-3">
                SLA:20JUL  2020,9:10AM

                </p>

              </div>

              </div>

              </div>


              
              
            </div>
            
          )}
        </div>
      </div>
    </>
  );
};

export default ReconciliationAcc;
