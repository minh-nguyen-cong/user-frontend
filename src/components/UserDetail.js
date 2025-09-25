import { useEffect, useState } from 'react';
import { getUserById } from '../api';
import { useParams, Link } from 'react-router-dom';

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUsers] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUserById(id);
            setUsers(data);
        };
        fetchUsers();
    }, [id]);

    return (
        <div>
            <h2>User Detail</h2>
            {user ? (
                <ul className="list-group">
                    <li className="list-group-item"><strong>ID:</strong> {user?.id}</li>
                    <li className="list-group-item"><strong>Name:</strong> {user?.name}</li>
                    <li className="list-group-item"><strong>Email:</strong> {user?.email}</li>
                </ul>
            ) : (
                <p>Loading...</p>
            )}
            <Link to="/" className="btn btn-decondary mt-3">Back</Link>
        </div>
    );
};

export default UserDetail;