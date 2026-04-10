import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
const navigate = useNavigate();
  return (
    <div className='min-h-screen flex justify-center items-center bg-white'>
        <div className='bg-gray-100  shadow-xl  w-[400px] h-[700px] flex flex-col justify-end p-8'>
            <h1 className='font-bold text-4xl mb-4'>Welcome to popX</h1>
             <p className='text-lg pb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
             <button onClick={()=>navigate("/register")} className='bg-blue-600 p-3 text-white text-m font-bold mb-4 rounded-lg cursor-pointer'>Create Account</button>
             <button onClick={()=>navigate("/login")} className='bg-purple-300 p-3 text-black text-m font-bold rounded-lg cursor-pointer'>Already Registered?Login</button>
        </div>
    </div>
    
  )
}

export default Welcome