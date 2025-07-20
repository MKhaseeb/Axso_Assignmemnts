import { React, useEffect, useState } from 'react'
import axios from 'axios';



export default function useFeatchUser() {
     const [users, setUsers] = useState([]);

     
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get('http://localhost:8000/api')
            .then(res => {
                setUsers(res.data);
                setUsers.log(res);
            })
            .catch(err => console.error("Error fetching users:", err));
    };
    return{users}

}