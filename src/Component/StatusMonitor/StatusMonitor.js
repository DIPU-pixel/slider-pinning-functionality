import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import "./status.css";
import Buttonmenu from "./Buttonmenu";

const StatusMonitor = () => {
  return (
    <>
      <div className="main-container">
        <div className="first-row">
          <h4>Status Monitor</h4>
        </div>
        <div className="second-row">
          <h4 className="text">
            {" "}
            Brief intro to the page functionality will be listed here.
          </h4>
          <FormGroup>
            <FormControlLabel
              control={<Switch />}
              label="Auto Refresh"
            />
          </FormGroup>
        </div>
        <div className="button-group">
          <Buttonmenu />
        </div>
      </div>
    </>
  );
};

export default StatusMonitor;
