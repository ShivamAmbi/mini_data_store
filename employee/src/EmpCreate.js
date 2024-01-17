import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './App.css';
import axios from "axios";

function EmpCreate() {
  const [id,setId] = useState('');
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [active,setActive] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const sendData = {name,email,phone,active};
    console.log('sent data:',sendData);
    fetch('http://localhost:5000/save',{
      method:"POST",
      headers: { "content-type": "application/json" },
      body:JSON.stringify(sendData)
    }).then((res)=>{
      alert('saved successfully');
      navigate('/employee');
    }).catch((err)=>{
      alert('Error occured:',err);
    });
  }

  return (
    <div>
      <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
          <form className='container' onSubmit={handleSubmit}>
            <div className='card' style={{ textAlign: 'left' }}>
              <div className='card-title' style={{display:'flex',justifyContent: 'space-around'}}>
                <h2>Employee Create</h2>
              </div>
              <div className='card-body'>
                <div className='row' style={{display:'contents'}}>

                  <div className='col -lg-12'>
                    <div className='form-group'>
                      <label>ID</label>
                      <input value={id} disabled className='form-control'></input>
                    </div>
                  </div>
                  <div className='col -lg-12'>
                    <div className='form-group'>
                      <label>Name *</label>
                      <input value={name} onChange={(e)=>setName(e.target.value)} className='form-control' required></input>
                    </div>
                  </div>
                  <div className='col -lg-12'>
                    <div className='form-group'>
                      <label>Email *</label>
                      <input value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' required></input>
                    </div>
                  </div>
                  <div className='col -lg-12'>
                    <div className='form-group'>
                      <label>Phone</label>
                      <input value={phone} type='number' onChange={(e) => setPhone(e.target.value)}
                        className='form-control'></input>
                    </div>
                  </div>
                  <div className='col -lg-12'>
                    <div className='form-check'>
                      <input checked={active} onChange={(e)=>setActive(e.target.checked)} type='checkbox' className='form-check-input'></input>
                      <label className='form-check-label'>Is Active</label>
                    </div>
                  </div>
                  <div className='col -lg-12'>
                    <div className='form-group' style={{ display: 'flex', justifyContent: 'space-around' }}>
                      <button className='btn btn-success' type='submit'>Save</button>
                      <div className='divbtn'>
                        <Link className='btn btn-success' to="/employee">Back</Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default EmpCreate