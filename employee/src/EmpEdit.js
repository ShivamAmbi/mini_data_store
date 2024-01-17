import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function EmpEdit() {
  const { empId } = useParams();
  // const [empData, setEmpData] = useState({});

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/details/' + empId)
      .then(res => res.json())
      .then((resp) => {
        // setEmpData(resp);
        setId(resp._id);
        setName(resp.name);
        setEmail(resp.email);
        setPhone(resp.phone);
        setActive(resp.active);
      })
      .catch((err) => {
        console.log('err:', err);
      });
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendData = { _id:id,name, email, phone, active };
    fetch('http://localhost:5000/update/'+empId, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(sendData)
    }).then((res) => {
      alert('saved successfully');
      navigate('/employee');
    }).catch((err) => {
      alert('Error occured:', err);
    });
  }

  return (
    <div>
      <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
          <form className='container' onSubmit={handleSubmit}>
            <div className='card' style={{ textAlign: 'left' }}>
              <div className='card-title'>
                <h2>Employee Edit</h2>
              </div>
              <div className='card-body'>
                <div className='row'>

                  <div className='col -lg-12'>
                    <div className='form-group'>
                      <label>ID</label>
                      <input value={id} disabled className='form-control'></input>
                    </div>
                  </div>
                  <div className='col -lg-12'>
                    <div className='form-group'>
                      <label>Name *</label>
                      <input value={name} onChange={(e) => setName(e.target.value)} className='form-control' required></input>
                    </div>
                  </div>
                  <div className='col -lg-12'>
                    <div className='form-group'>
                      <label>Email *</label>
                      <input value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' required></input>
                    </div>
                  </div>
                  <div className='col -lg-12'>
                    <div className='form-group'>
                      <label>Phone</label>
                      <input value={phone} onChange={(e) => setPhone(e.target.value)} className='form-control'></input>
                    </div>
                  </div>
                  <div className='col -lg-12'>
                    <div className='form-check'>
                      <input checked={active} onChange={(e) => setActive(e.target.checked)} type='checkbox' className='form-check-input'></input>
                      <label className='form-check-label'>Is Active</label>
                    </div>
                  </div>
                  <div className='col -lg-12'>
                    <div className='form-group'>
                      <button className='btn btn-success' type='submit'>Save After Edit</button>
                      <Link to="/employee" className='btn-btn-danger'>Back</Link>
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

export default EmpEdit