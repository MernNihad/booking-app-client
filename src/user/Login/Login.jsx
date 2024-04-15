import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material'
import bgre from '../Login/nbg6.jpg'
import axios from 'axios'
import { successToast, errorToast } from '../../Components/Toast/toast'

const Login = () => {
  const navigate = useNavigate()
  const [data,setData] = useState('')

let HandleSubmit = async(e) => {
    e.preventDefault()
    try{
        let response = await axios.post('http://localhost:8080/api/v1/user/login', data)
        successToast(response.data.message)
        console.log(response.data.data.user._id, 'response');
        localStorage.setItem('token',response.data.data.token)
        localStorage.setItem('user-id',response.data.data.user._id)
        navigate('/')
    }
    catch(error){
        console.log(error);
        errorToast(error && error.response.data.message)
    }
}

let HandleChange = (e) => {
    setData({...data,[e.target.name]:e.target.value})
}
console.log(data);

  return (
    <section>
    <div className='reg'>
        <img className='bg3' src={bgre} alt='bgr' />
        <form onSubmit={HandleSubmit} className='log1'>
            <b><span className='regh1'><i>Login Here..</i></span></b><br/><br/>
            <div >
                <TextField className='regbox' onChange={HandleChange} id='outlined-basic' label='Email' variant='outlined' name='email' /><br/><br/>
                <TextField className='regbox' onChange={HandleChange} id='outlined-basic' label='Password' variant='outlined' name='password' /><br/><br/>
                <button className='regbtn'><b>Login</b></button>
                <Link to={'/Register'}>register</Link>
            </div>
        </form>
      
    </div>
    </section>
  )
  }

  export default Login
