import React from "react";
import newpin from "../../assets/newpin.svg";

import "./style.css";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CardFolder from "./CardFolder";
import CustomAccording from "./CustomAccording";
import ReconciliationAcc from "./ReconciliationAcc";

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

const MainCardFolder = () => {
  const card1 = <CardFolder />;
  const card2 = <CardFolder />;

  const [arrcom, setArrcom] = React.useState([card1, card2]);

  const [pin, setPin] = React.useState([]);

  //==============================================
  const pinFunc = (pinID) => {
    const getArr = arrcom.filter((item, index) => {
      return index === pinID;
    });
    setPin([...pin, getArr]);

    const remem = arrcom.filter((item, index) => {
      return index != pinID;
    });
    setArrcom(remem);
  };
  //================================================

  const getPropsArr = (getArr) => {
    const getData = getArr?.map((item, index) => {
      return item?.map((val) => {
        return val;
      });
    });
    setArrcom([arrcom, getData]);
    console.log(getData, "gettt");
  };

  return (
    <>
      <Grid container>
        <Grid item xs>
          <div className="new_card_logic">
            {arrcom.map((ele, indx) => {
              return (
                <>
                  {ele}

                  <div className="main-card">
                    <div className="card">
                      <div className="container">
                        <div className="pin_setting">
                          <h4>indigo</h4>
                          <button
                            onClick={() => {
                              pinFunc(indx);
                            }}
                          >
                            <img src={newpin} alt />
                          </button>
                        </div>

                        <CustomAccording />
                        <ReconciliationAcc />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </Grid>
        <Divider orientation="vertical" flexItem></Divider>
        <Grid item xs>
          <div className="content-div">
            <CardFolder send={pin} getPropsArr={getPropsArr} />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default MainCardFolder;
