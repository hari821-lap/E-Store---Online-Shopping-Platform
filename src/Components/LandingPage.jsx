import React, { useState } from 'react'
import '../assets/Styles/landingpage.css'
import { useNavigate } from 'react-router-dom'     // <-- changed

const LandingPage = () => {
  let [form,setForm] =useState({mail:"",pswd:""})
  const navigate = useNavigate()                    // <-- added

  let handleInput = (e)=>{
    //todo :collecting the name & values from all input field
    let keyName =e.target.name
    let keyValue =e.target.value
    //console.log(keyName,keyValue)

    ///here,we are collecting the previous value from the 
    // input field & update new property (key & Pair) for the onject
      // setForm(preval =>(
      // {...preval ,keyName :keyValue}))

      setForm({...form ,[keyName]:keyValue})

      //! shorcut to update new key & values pair
     // setFrom({...form,[e.target.name]:e.target.value})
  }

  let handleSumbmit = (e)=>{
    e.preventDefault()
    // todo :collection values from the input field .here form is initial name of useState
    console.log(form)
    let {mail,pswd}=form


    let credentials ={
      email:"Admin@gmail.com",
      password:"admin123"
    }

    let {email ,password} =credentials;

    if( mail === email && pswd ===password){
      navigate('/adminportal')   // <-- changed
    }
    
  }
  return (
    <>
      <div className="landingpage">
        <div className="bgImage">
          <div className="container">
            <div className="left">
              <h1>welcome to the Online Shopping</h1>
              <div className="formbox">
                <form>
                  <input type="email" 
                  placeholder='Enter The Email'
                  name='mail'
                  onChange={handleInput}
                  value={form.mail} />
                  <input type="password"  
                  placeholder='Enter the Password'
                  name='pswd'
                  onChange={handleInput}
                  value={form.pswd}/>

                  <button onClick={handleSumbmit}>Login</button>
                </form>
              </div>
            </div>
            <div className="right"></div>
          </div>
          </div>
      </div>

    </>
  )
}

export default LandingPage
