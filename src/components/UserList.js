import { useEffect, useState } from 'react';
import { getAllUsers, deleteUser } from '../api';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getAllUsers();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure?")) {
            await deleteUser(id);
            setUsers(users.filter(u => u.id !== id));
        }
    };

    return (
        <div>
            <h2>All Users</h2>
            <table className="table table-striped table-hover mt-3">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th style={{ width: '200px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(({ id, name, email }) => (
                        <tr key={id}>
                            <td><strong>{name}</strong></td>
                            <td>{email}</td>
                            <td>
                                <Link to={`/user/${id}`} className="btn btn-sm btn-info me-1">View
                                </Link>
                                <Link to={`/edit/${id}`} className="btn btn-sm btn-warning me-1">Edit</Link>
                                <button onClick={() => handleDelete(id)} className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                    {users.length === 0 && (
                        <tr><td colSpan="3" className="itext-center">No users found.</td></tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;