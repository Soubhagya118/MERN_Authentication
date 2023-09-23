import React,{useState} from 'react';
import OtpInput from 'react-otp-input';


const Verification = () => {

  const [otp, setOtp] = useState('');

  return (
    
  <div className='m-auto sm:1/4  md:w-1/4 lg:w-1/4  my-10 justify-center text-center text-gray-600 shadow-md p-5 border-2 border-black'>
  <div>
    <h1>Verification</h1>
    <h1>Please Verify your mobile number</h1>
  </div>
  <form>
  <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
    <button>Verify</button>
  </form>

     

</div>
  )
}

export default Verification