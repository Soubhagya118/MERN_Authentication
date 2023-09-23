import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import parsePhoneNumber from "libphonenumber-js";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {register} from '../services/Api';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
const inputPhone=useRef();
const inputUserName=useRef();

const navigate=useNavigate();

const signUpHandler=async(e)=>{
e.preventDefault();

const name=inputUserName.current.value;
const phone=inputPhone.current.state.formattedNumber;
// console.log("phone",phone)

const parsedPhoneNumber = parsePhoneNumber(phone);
const validMobileNum=parsedPhoneNumber?.isValid();
if(!validMobileNum || !phone.includes("+") || name==''){
  
  toast.error("Enter your Number Correctly")
}
else{
  
  try{
   
 const res= await fetch(`http://localhost:4008/register`,{
  method:'POST',
  body:JSON.stringify({userName:name,phone:phone}),
  headers:{
    'Content-Type':'application/json'
  }
  });

   if(res.status==400){
      console.log("error ",res.statusText);
      //throw new Error(res.statusText)
  }

  setTimeout(()=>toast.success('Signup Successfully'),100)
  const data = await res.json();

   navigate('/')
  
  }
catch(err){
   // console.log("err",err.message)
    toast.error(err.message)
  }
//  / const response = await register()
  // console.log("response2",response);
}

}
  return (
    <section>
      <div className='m-auto sm:1/4  md:w-1/4 lg:w-1/4 my-10 justify-center text-center text-gray-600 shadow-md p-5'>
      <div className='w-full'>
          <h1 className='w-full justify-center text-center inline-block text-4xl text-sky-500 font-serif'>Admit<span className='text-black'>Kard</span></h1>
          <h3 className='text-xl text-black mt-8'>Welcome Back</h3>
          <p className='mt-3'>Please sign in to your account </p>  
        </div>
      <form className='flex flex-col m-auto'>
      <label htmlFor='name' className='text-start mt-3 text-xs ml-1'>Enter User Name</label>
          <input type='text' name='name' className='w-full border-2 border-black  h-9 rounded-md text-black' ref={inputUserName} required/>

          <label htmlFor='phone' className='text-start mt-3 text-xs ml-1'>Enter Contact Number</label>
         <PhoneInput 
         className='border-2 border-black  rounded-md'
                  country={"eg"}
                  enableSearch={true}
                  ref={inputPhone} inputStyle={{width:'100%'}}
                  inputProps={{name: 'phone',type:'tel',required: true,autoFocus: true}}/>

          {/* <input type='tel' name='phone' className='border-2 border-yellow-500 rounded-md text-black' ref={inputPhone} required/> */}
          
          <p className='text-center text-sm mt-3'>We will send you a one time SMS message.</p>
          <p className='text-center text-sm'> Charges May Apply</p>
          <button onClick={signUpHandler} className='bg-yellow-500 rounded-2xl text-white text-center justify-center mt-4 p-1'>Sign up with OTP </button>
     
     
          <div className='border-2 border-gray-300  bg-gray-300 p-2 mt-6 rounded-md'>
          <p>Already have an account? <NavLink to='/' className='underline text-sky-500'>Sign In</NavLink></p>
      </div> 
      </form>
    
  </div>
  <ToastContainer  autoClose={2000}/>

    </section>
  )
}

export default Registration
