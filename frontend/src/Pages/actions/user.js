import { fetchUsers } from '../../api';
import axios from "axios"
export const users=()=>(dispatch)=>{
    fetchUsers()
    .then((response)=>{
        dispatch({type:"USERS",payload:response.data })
    })
    .catch(() => {
     
    });
};
export const usersDelete=(email)=>(dispatch)=>{
    axios.delete(`/user/users/${email}`)
    .then((response)=>{
        dispatch({type:"USERS_DELETE",payload:email})
    })
    .catch(() => {
     
    });
};