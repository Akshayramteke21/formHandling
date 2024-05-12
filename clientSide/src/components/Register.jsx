import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Register = () => {


  const [values,setvalues]= useState({

    name:"",
    email:"",
    password:""
  });


       const [errors, setErrors]= useState();


    const handleSubmit=()=>{

      e.preventDefault();
      

    }


    const handleInput=(event)=>{

      setvalues(prev=>({
        ...prev,
        [event.target.name]:[event.target.values]
    }) )

    
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2 className='mb-3'>Sign up</h2>
        <form action="" onSubmit={handleSubmit}>
          
          <div className='mb-3'>
            <label htmlFor="name" className='fw-bold'>Name:</label>
            <input type='text' placeholder='enter your Name' className='form-control' name='name' 
            
            onChange={handleInput}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="email" className='fw-bold'>Email:</label>
            <input type='email' placeholder='enter your email' className='form-control'  name='email'
             onChange={handleInput}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="password" className='fw-bold'>Password:</label>
            <input type="password" placeholder='password' className='form-control' name='password'
             onChange={handleInput} />
          </div>
          <button className='btn btn-success w-100 mb-3'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
