import React,{useState} from 'react';
import OtpInput from 'react-otp-input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import verificationImg from '../assets/verificationImga.jpg';

const Verification = (props) => {
const navigate=useNavigate();
  const [otp, setOtp] = useState('');

  const verifyOtpHandler=async(e)=>{
e.preventDefault();
console.log("otp",otp, props.loginNum);

if(otp.length!==4){
  toast.error("Enter valid OTP")
}else{

let phone =props.loginNum
try{
const res = await fetch('http://localhost:4008/verifyotp',{
  method:'POST',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify({phone:phone,otp:otp})
})

if(res.status!==200){
  toast.error(res.statusText);
  throw new Error(res.statusText);
}
  toast.success("Verified Successfully!");
  setOtp('');
  navigate('/dashboard')
}catch(err){
    toast.error(err.message);
}
}
  }

  return (
    <section>
  <div className='m-auto w-80  my-10 justify-center text-center text-gray-600 shadow-md p-5'>
  <div>
  <div>
    <img src={verificationImg}/>
  </div>
    <h1>Verification</h1>
    <h1>Please Verify your mobile number</h1>
  </div>
  <form className='w-full'>
  <div style={{width:'50%',margin:'auto',marginTop:'10px'}}>
  <OtpInput
  //OTPLength={4}
      value={otp}
      onChange={setOtp}
      
       numInputs={4}
       inputStyle={{border:'2px solid black',justifyItems:'center',margin:'4px',width:'20px'}}
     renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    /></div>
          <button onClick={verifyOtpHandler} className='w-full bg-yellow-500 rounded-2xl text-white text-center justify-center mt-4 p-1'>Verify </button>
  </form>

     

</div>
<ToastContainer autoClose={2000}/>
</section>  )
}

export default Verification