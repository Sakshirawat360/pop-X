import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
      const [loginData, setLoginData] = useState({
        email: "",
        password: ""
});
const navigate = useNavigate();
const handleChange = (e) => {
  setLoginData({
    ...loginData,
    [e.target.name]: e.target.value
  });

};

const handleLogin = (e) => {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) =>
      u.email === loginData.email &&
      u.password === loginData.password
  );

  if (user) {
    alert("Login Successful ✅");
    localStorage.setItem("currentUser", JSON.stringify(user));

  setLoginData({
      email: "",
      password: ""
    });
    // 🔥 redirect
    navigate("/account");
  } else {
    alert("Invalid Email or Password ❌");
  }

};
     const handlefocus = (e)=>{
        const fieldRef = e.target.closest("fieldset")
        fieldRef.classList.remove("border-gray-300")
        fieldRef.classList.add("border-purple-500")
    }

    const handleblur = (e)=>{
        const fieldRef = e.target.closest("fieldset");
         fieldRef.classList.add("border-gray-300")
        fieldRef.classList.remove("border-purple-500")
    }
  return (
     <div className='min-h-screen flex justify-center items-center bg-white'>
        <div className='bg-gray-100  shadow-xl  w-[400px] h-[700px] flex flex-col p-8'>
           <form onSubmit={handleLogin}>
             <h1 className='font-bold text-3xl mb-4'>Signin to your popX account</h1>
             <p className='text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, at?</p>
               <fieldset className='border-2 border-gray-300 px-3 py-1 mt-5 rounded-lg mb-5'>
                    <legend className='text-sm text-purple-600 px-1 font-semibold'>Email address <span className="text-red-500">*</span></legend>
                    <input onFocus={handlefocus} onBlur={handleblur} className='w-full outline-none' name="email"
    onChange={handleChange} type="email" placeholder='Enter Email Address' required/>
                </fieldset>
                 <fieldset className='border-2 border-gray-300 px-3 py-1  rounded-lg mb-5'>
                    <legend className='text-sm text-purple-600 px-1 font-semibold'>Password <span className="text-red-500">*</span></legend>
                    <input onFocus={handlefocus} onBlur={handleblur} className='w-full outline-none'  name="password"  onChange={handleChange} type="password" placeholder='Enter Password' minLength={8}/>
                </fieldset>
                  <button className='mt-4 bg-blue-600 text-white text-lg py-3 rounded-lg w-full cursor-pointer hover:bg-blue-400'>Login</button>
           </form>
        </div>
    </div>
  )
}

export default Login