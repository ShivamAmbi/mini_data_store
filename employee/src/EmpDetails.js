import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function EmpDetails() {
  const { empId } = useParams();
  const [empData, setEmpData] = useState({});

  useEffect(() => {
    // fetch('http://localhost:5000/'+empId)
    //   .then(res => res.json())
    //   .then((resp) => {
    //     setEmpData(resp);
    //   })
    //   .catch((err) => {
    //     console.log('err:', err);
    //   });
      getDetails();
    }, [])

  const getDetails = async()=>{
    const res = await axios.get('http://localhost:5000/details/'+empId);
    console.log('res:',res.data);
    setEmpData(res.data)
  }

  return (
    <div>
      {
        empData && <div>
          <h1>
            The employee data is: {empData.name} ({empData._id})
          </h1>
          <h2>Contact info</h2>
          <h2>Email is {empData.email}</h2>
          <h3>Phone no is {empData.phone}</h3>
          <Link to='/employee' className='btn btn-danger'>Back to listing</Link>
        </div>
      }
    </div>
  )
}

export default EmpDetails