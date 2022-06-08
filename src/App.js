import React from 'react'
import CardFolder from './Component/CardHolder/CardFolder'
import MainCardFolder from './Component/CardHolder/MainCardFolder'
import MainFile from './Component/CardHolder/MainFile'
import Header from './Component/common/Header'
import StatusMonitor from './Component/StatusMonitor/StatusMonitor'
const App = () => {
  return (
    <>
      <Header/>
      <StatusMonitor/>
      <MainFile/>
      
      <MainCardFolder/> 
     
   
    </>
  )
}

export default App