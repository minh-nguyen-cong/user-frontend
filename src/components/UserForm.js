import { useEffect, useState } from 'react';
import { createUser, getUserById, updateUser } from '../api';
import { useNavigate, useParams } from 'react-router-dom';

const UserForm = () => {
    const { id } = useParams();
    const isEdit = Boolean(id);
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: '', email: '' });

    useEffect(() => {
        const fetchUser = async () => {
            if (isEdit) {
                const data = await getUserById(id);
                setForm({ name: data.name, email: data.email });
            }
        };
        fetchUser();
    }, [id, isEdit]);

    const handleChange = ({ target: { name, value } }) => {
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        isEdit ? await updateUser(id, form) : await createUser(form);
        navigate('/');
    };

    return (
        <div>
            <h2>{isEdit ? 'Edit' : 'Create'} User</h2>
            <form onSubmit={handleSubmit} className="mt-3">
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input name="name" value={form.name} onChange={handleChange} className="form-control" required />
                </div>
                <div>
                    <label className="form-label">Email:</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} className="form-control" required />
                </div>
                <button type="submit" className="btn btn-success">{isEdit ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default UserForm;