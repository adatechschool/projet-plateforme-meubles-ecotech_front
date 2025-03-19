import { useState, useEffect } from "react";
import './Gestion.css';

export const FetchAllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('http://localhost:3000/user');
            const data = await response.json();
            console.log('data', data);
            setUsers(data)
        }
        fetchUsers();
    }, [])
    return (
        users.map((user => (
            <div className="user-card" key={user.id}>
                <h3>{user.fullname}</h3>
                <p>{user.email}</p>
                <button className="button-delete">Supprimer</button>
            </div>
        )))
    )
}