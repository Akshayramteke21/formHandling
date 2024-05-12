import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'
import '../loginValidation'

function Login() {



    const {values,setvalues}= useState({

        email:'',
        password:''
    })

    const [err,setErr]= useState()


    const handleInput=(event)=>{
            setvalues(prev=>({
                ...prev,
                [event.target.name]:[event.target.values]
            }) )
        
    }
    const handleSubmit=(e)=>{
             e.preventDefault();

             setErr(Validation(values))


    }


   
  return (
   <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>    

   <div className='bg-white p-3 rounded w-25'> 

   
       <form action="" onSubmit={handleSubmit}>
          
          <div className='mb-3'>
                   
                   <label htmlFor="email" className='fw-bold'>Email:</label>
                   <input type='email' 
                   name='email'
                   onChange={handleInput}
                   placeholder='enter your email' className='form-control'/>

                   {/* {err.email && <span className='text-danger'>{err.email}</span>} */}

          </div>
              
              <div className='mb-3'>
                <label htmlFor="password" className='fw-bold'>Password:</label>
                <input type="password" 
                name='password'
                
                
                placeholder='password' className='form-control'/>
                 {/* {err.password && <span className='text-danger'>{err.password}</span>} */}
              </div>
                
                <button type='submit' className='btn btn-success w-100 '>Login</button>
                <p className='mt-1 fw-bold' >Not a user?</p>
             <Link to='/register' className='btn btn-default border bg-light w-100 text-decoration-none'>Register</Link>
              


       </form>
       </div>
   </div>
  )
}

export default Login