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
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/user/remove/`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            if (response.ok) {
                setUsers((prevUsers) => prevUsers.filter(user => user.id !== id));
            } else {
                console.error("Erreur lors de la suppression de l'utilisateur");
            }
        } catch (error) {
            console.error("Erreur réseau :", error);
        }
    };

    return (
        <div className="user-container">
            <h1>Liste des utilisateurs</h1>
            <div className="user-list">
                {users.map((user) => (
                    <div className="user-card" key={user.id}>
                        <h3>{user.fullname}</h3>
                        <p>{user.email}</p>
                        <button className="button-delete" onClick={() => handleDelete(user.id)}>Supprimer</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
