import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  const inputPhone=useRef();
  // const [phone,setPhone] = useState();
const navigate =useNavigate()
const signInHandler=async(e)=>{
  e.preventDefault();

  const phone=inputPhone.current.state.formattedNumber;
  console.log("phone",phone)
  try{

  const res= await fetch(`http://localhost:4008/login`,{
        method:'POST',
        body:JSON.stringify({phone:phone}),
        headers:{
          'Content-Type':'application/json'
        }
  });
// if(res.status===400){
//   console.log("reslogin",res)

//   toast.error(res.statusText);
//   throw new Error(res.statusText)
// }

  // toast.success("Login Successfully")
 if(res.status!=200){
  console.log("datalogin",res);
  toast.success(res.statusText);
  throw new Error(res.statusText)
 }

 toast.success("Login Successfully");
navigate('/user/verify')
  }catch(err){
    toast.error(err.message);
  }

}

  return (
<>
<section>

  <div className='m-auto sm:1/4  md:w-1/4 lg:w-1/4  my-10 justify-center text-center text-gray-600 shadow-md p-5'>
      <div className=''>
          <h1 className='text-4xl text-sky-500 font-serif'>Admit<span className='text-black'>Kard</span></h1>
          <h3 className='text-xl text-black mt-8'>Welcome to Signup Page</h3>
          <p className='mt-3'>Please register your account below</p>  
        </div>
      <form className='flex flex-col m-auto'>
      <label htmlFor='phone' className='text-start mt-3 text-xs ml-1'>Enter Contact Number</label>
      <PhoneInput
      className='border-2 border-black  rounded-md'
      country={"eg"}
      enableSearch={true}
      ref={inputPhone}
      inputStyle={{width:'100%'}}
      inputProps={{
    name: 'phone',
    required: true,
    autoFocus: true,
   
  }}/>
          {/* <input type='tel' name='phone' className='border-2 border-yellow-500 rounded-md text-black' ref={inputPhone} required/> */}

          <p className='text-center text-sm mt-3'>We will send you a one time SMS message.</p>
          <p className='text-center text-sm'> Charges May Apply</p>
          <button className='bg-yellow-500 rounded-2xl text-white text-center justify-center mt-4 p-1' onClick={signInHandler}>Sign in with OTP </button>
     
     
          <div className='border-2 border-gray-300  bg-gray-300 p-2 mt-6 rounded-md'>
          <p>Don't have an account? <NavLink to='/register' className='underline text-sky-500'>Sign Up</NavLink></p>
      </div> </form>
    
  </div>
<ToastContainer/>
</section>

</>
  )
}

export default Login
