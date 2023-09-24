import React from 'react';
import animation from '../assets/animation.webp'

const Dashboard = () => {
  return (
    <div className='m-auto w-80  my-10 justify-center text-center text-gray-600 shadow-md p-5'>
      <div className=''>
      <img className='animate-bounce' src='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*wq9OxfN7_h2EripMmOn5xw.png'/>

        </div>
        <div className='w-full'>
          <h1 className='text-2xl font-bold text-black'>Welcome to AdmitKard</h1>
          <p className='w-64 m-auto'>In order to provide you with a custome experience,</p>
          <b className='text-md'>We need to ask you a few questions</b>
        </div>
   
<div className='mt-10'>
  <button className='bg-yellow-500 rounded-2xl py-1 px-5 text-white'>Get Started</button>
  <p className='text-xs mt-2'>*This will only take 5 min.</p>
</div>
        
  </div>
  )
}

export default Dashboard