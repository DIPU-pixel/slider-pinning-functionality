import React,{useEffect}from "react";
import newpin from "../../assets/newpin.svg"

import CustomAccording from "./CustomAccording";
import ReconciliationAcc from "./ReconciliationAcc";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CardFolder = (props) => {
  const [propsState, setPropsState] = React.useState();
  console.log("propsState",propsState)

  useEffect(()=>{
      setPropsState(props?.send)
  },[props?.send])

  const unPinFunc = (pinID) => {
      const getArr = propsState?.filter((item,index) =>{
          return item?.filter((val,indx) =>{
              return indx === pinID
          })
        })
        setPropsState();
        props.getPropsArr(getArr);
      //   const remem = propsState?.filter((item,index) =>{
      //     return item?.filter((val,indx) =>{
      //         return indx != pinID
      //     })
      //   })
      //   props.getPropsArr(remem);
  }



  return (
    <> 
    <div className="new_card_logic">{propsState?.map((item,index) => {
        return item?.map((val,indss) => {
            return <>
                {val}
                <div className="main-card">
        <div className="card">
          <div className="container">
            <div className="pin_setting">
            <h4>indigo</h4>
            <button onClick={()=>unPinFunc(indss)}>
              <img src={newpin}/>
            </button>
            </div>

          
        
            <CustomAccording/>
              <ReconciliationAcc/>

    
           
          </div>
        </div>
      </div>
         
            </>
        })
    })}</div>

     
     
         
    
     
    </>
  );
};

export default CardFolder;
