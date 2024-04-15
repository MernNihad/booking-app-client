import React, { useState } from 'react'
// import './Register.css'
import { useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material'
// import bgr from '../Register/regis.jpg'
import axios from 'axios'

const Adminreg = () => {
    const navigate = useNavigate()
    const [data,setData] = useState('')

let HandleSubmit = async(e) => {
    e.preventDefault()
    try{
        let response = await axios.post('http://localhost:8080/api/v1/admin/register', data)
        navigate('/adminlogin')
    }
    catch(error){
        console.log(error);
    }
}

let HandleChange = (e) => {
    setData({...data,[e.target.name]:e.target.value})
}
console.log(data);

  return (
    <section>
    <div className='reg'>
        
        <form onSubmit={HandleSubmit} className='reg1'>
            <b><span className='regh1'><i>Registration</i></span></b><br/><br/>
            <div >
                <TextField className='regbox' onChange={HandleChange} id='outlined-basic' label='Name' variant='outlined' name='name' /><br/><br/>
                <TextField className='regbox' onChange={HandleChange} id='outlined-basic' label='Password' variant='outlined' name='password' /><br/><br/>
                <TextField className='regbox' onChange={HandleChange} id='outlined-basic' label='Email' variant='outlined' name='email' /><br/><br/>
                <button className='regbtn'>Register</button>
            </div>
        </form>
      
    </div>
    </section>
  )
}

export default Adminreg
