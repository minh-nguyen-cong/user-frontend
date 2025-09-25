const API_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

export const getAllUsers  =async () => {
    const res = await fetch(`${API_URL}/users`);
    return res.json();
};

export const getUserById = async (id) => {
    const res = await fetch(`${API_URL}/users/${id}`);
    return res.json();
};

export const createUser = async (user) => {
    const res = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
    return res.json();
};

export const updateUser = async (id, user) => {
    const res = await fetch(`${API_URL}/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
    return res.json();
};

export const deleteUser = async (id) => {
    return await fetch(`${API_URL}/users/${id}`, { method: 'DELETE' });
};