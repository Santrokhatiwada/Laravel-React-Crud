import { Link } from "react-router-dom";
import http from "../http";
import axios from 'axios';
import { useState, useEffect } from "react";

export default function Home(){
    
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    },[]);

    const fetchAllUsers = () => {
            http.get('/users').then(res =>{
                setUsers(res.data)
            })
    }

    const deleteUser = (id) => {
        
        axios.delete(`http://localhost:8000/api/users/${id}`).then((res) => {
            console.log('id');
                fetchAllUsers();
            })
            .catch(error => { 
                console.log('Error deleting user:', error);
            });
    }

//    const deleteUser = async(id) =>{
//        await axios.delete(`http://localhost:8000/api/users/${id}`).then((res) => {
//                 console.log('id');
//                     fetchAllUsers();
//                 })

//     }
    
    
    return (
        <div>
           <h2> Users listing ...</h2>
           <table className="table">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
            {users.map((user,index)=>(
                 <tr key={user.id}>
                 <td>{++index}</td>
                 <td>{user.name}</td>
                 <td>{user.email}</td>
                 <td>
                    <Link className="btn btn-info" to={{ pathname:"/edit/"+user.id}}>Edit </Link>   &nbsp;
                 
                    <Link className="btn btn-primary" to={{ pathname:"/view/"+user.id}}>View </Link>&nbsp;

                    <button type="button" className="btn btn-danger" onClick={()=>{deleteUser(user.id)}}>Delete</button>

                 </td>
             </tr>
            ))}
            </tbody>
           

           </table>
        </div>
    );
}