import React, { useRef, useState } from 'react'


const Register = () => {
    const [formdata, setFormdata] = useState({
        fullname: "",
         phone: "",
         email: "",
         password: "",
         company: "",
         agency: ""
    })

    const handlechange = (e)=>{
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handlesubmit = (e) =>{
        e.preventDefault();
        const existingdata = JSON.parse(localStorage.getItem("users"))||[]
         existingdata.push(formdata);

          localStorage.setItem("users", JSON.stringify(existingdata));
           console.log("Saved:", formdata);

           alert("Account Created Successfully ✅");

            setFormdata({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: ""
  });
    }

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
        <div className='bg-gray-100  shadow-xl  w-[400px] h-[700px] flex flex-col  p-8'>
            <form onSubmit={handlesubmit}>
                <h1 className='font-bold text-3xl mb-4'>Create your popX account</h1>
                <fieldset className='border-2 border-gray-300 px-3 py-1 rounded-lg mb-5'>
                    <legend className='text-sm text-purple-600 px-1 font-semibold'>Full Name <span className="text-red-500">*</span></legend>
                    <input name='fullname'  value={formdata.fullname} onChange={handlechange} onFocus={handlefocus} onBlur={handleblur} className='w-full outline-none' type="text" placeholder='Marry Deo' required/>
                </fieldset>
                
                 <fieldset className='border-2 border-gray-300  px-3 py-1  rounded-lg mb-5'>
                    <legend className='text-sm text-purple-600 px-1 font-semibold'>Phone number <span className="text-red-500">*</span></legend>
                    <input name='phone' value={formdata.phone} onChange={handlechange} onFocus={handlefocus} onBlur={handleblur} className='w-full outline-none' type="number" placeholder='Marry Deo' required/>
                </fieldset>
                 <fieldset className='border-2 border-gray-300 px-3 py-1  rounded-lg mb-5'>
                    <legend className='text-sm text-purple-600 px-1 font-semibold'>Email address <span className="text-red-500">*</span></legend>
                    <input name='email' value={formdata.email} onChange={handlechange} onFocus={handlefocus} onBlur={handleblur} className='w-full outline-none' type="email" placeholder='Marry Deo' required/>
                </fieldset>
                 <fieldset className='border-2 border-gray-300 px-3 py-1  rounded-lg mb-5'>
                    <legend className='text-sm text-purple-600 px-1 font-semibold'>Password <span className="text-red-500">*</span></legend>
                    <input  name='password' value={formdata.password} onChange={handlechange} onFocus={handlefocus} onBlur={handleblur} className='w-full outline-none' type="password" placeholder='Marry Deo' minLength={8} required/>
                </fieldset>
                <fieldset className='border-2 border-gray-300  px-3 py-1 rounded-lg mb-5'>
                    <legend className='text-sm text-purple-600 px-1 font-semibold'>Company Name</legend>
                    <input name='company' value={formdata.company} onChange={handlechange} onFocus={handlefocus} onBlur={handleblur} className='w-full outline-none' type="text" placeholder='Marry Deo' required/>
                </fieldset>
                
                <div className='mb-5' >
                    <p className='txt-sm mb-2'>Are you an Agency? <span className='text-red-500'>*</span></p>
                    <div className="flex items-center gap-6">
    
                <label className="flex items-center gap-2 cursor-pointer">
                <input value="yes" checked={formdata.agency==="yes"}  name='agency' onChange={handlechange} required
        type="radio"
        className="accent-purple-600 w-4 h-5" 
      />
      Yes
                </label>

    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio" value="no" checked={formdata.agency==="no"}
        name='agency' onChange={handlechange}
        className="accent-purple-600 w-4 h-5" required
      />
      No
    </label>

  </div>
                </div>

                <button type='submit' className='mt-10 bg-blue-600 text-white py-3 rounded-lg w-full cursor-pointer hover:bg-blue-400'>Create Account</button>
            </form>
        </div>
    </div>
  )
}

export default Register