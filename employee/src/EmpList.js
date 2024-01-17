import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function EmpList() {
    const [empData,setEmpData] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:5000/get').then(res=>res.json()).then((resp)=>{
            setEmpData(resp);
            console.log('data:',resp);
        }).catch((err)=>{
            console.log('err:',err);
        });
    },[])

    useEffect(()=>{
        console.log('data:',empData);
    },[empData])

    const loadDetails = (id) => {
        navigate('/employee/detail/'+id);
    }

    const loadEdit = (id) => {
        navigate('/employee/edit/'+id);
    }

    const removeEmpDetails = (id) => {
        if (window.confirm('Do you want to remove ')) {
            fetch('http://localhost:5000/delete/' + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Deleted the record');
                window.location.reload();
            }).catch((err) => {
                alert('Error occured:', err);
            });
        }
    }

    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2>Employee List</h2>
                </div>
                <div className='card-body'>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <div className='divbtn'>
                            <Link className='btn btn-success' to="/">Home</Link>
                        </div>
                        <div className='divbtn'>
                            <Link className='btn btn-success' to="/employee/create">Add (+)</Link>
                        </div>
                    </div>
                    <table className='table table-bordered'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Active</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                empData?.map((item)=>{
                                    return (
                                        <tr key={item._id}>
                                            <td>{item._id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.active? <input type='checkbox' checked={item.active} disabled/>: <input type='checkbox' disabled/>}</td>
                                            <td>
                                                <a className='btn btn-success' onClick={()=>loadEdit(item._id)}>Edit</a>
                                                <a className='btn btn-danger' onClick={()=>removeEmpDetails(item._id)}>Remove</a>
                                                <a className='btn btn-primary' onClick={()=>loadDetails(item._id)}>Details</a>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmpList