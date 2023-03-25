import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Home() {
    const [data, setdata] = useState([])
 

 useEffect(()=>{
    const getValue = async ()=>{
        const response=await axios.get('http://localhost:4000/user')
    console.log(response.data );
    setdata(response.data)
    }

    getValue()
    
 },[]) 



 const deleteUser=async(id)=>{
    await axios.delete(`http://localhost:4000/user/${id}`)
    window.location.reload()
 }
 

  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2">
          <button  className="btn btn-primary"><Link to={'/adduser'} style={{textDecoration:'none',color:'white'}}>Add User</Link></button>
          <table className="table mt-3">
            <thead>
              <tr className="table-dark ">
                <th scope="col">name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
             
                {data.map((user,index)=>{
                    return(
                        <tr key={index}>
                        <th scope="">{user.name}</th>
                        <td>{user.email}</td>
        
                        <td>{user.phone}</td>
                   
                        <td className="d-flex justify-content-around">
                           <NavLink to={`/update/${user._id}`}><button className="btn btn-success" >update</button></NavLink> 
                            <button className="btn btn-danger" onClick={()=>{deleteUser(user._id)}}>Delete</button>
                            
                        </td>
                      </tr>
                    )
                })}
             
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
