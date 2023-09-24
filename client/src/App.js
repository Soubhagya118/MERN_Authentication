import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Registration from './pages/Registration';
import Verification from './pages/Verification';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [verificationPage,setVerificationPage]=useState(false);
  const [loginNum,setLoginNum]=useState('')

  const verificationPageHandler=(data)=>{
    console.log("dataapp page",data)
    setLoginNum(data);
    // setVerificationPage(e=>!e);
  }
 

  return (
  <>


<Routes>
 <Route path='/' element={<Login verificationPageHandler={verificationPageHandler}/>}/>
  <Route path='/register' element={<Registration />}/>
  <Route path='/user/verify' element={<Verification loginNum={loginNum}/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>

</Routes>
  </>
  );
}

export default App;
