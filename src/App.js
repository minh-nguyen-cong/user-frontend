import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserDetail from './components/UserDetail';

const App = () => (
  <Router>
    <div className="container mt-4">
      <h1 className="mb-4 text-center">User Management</h1>
      <nav className="mb-4">
        <Link to="/" className="btn btn-primary me-2">Home</Link>
        <Link to="/create" className="btn btn-success">Add User</Link>
      </nav>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/create" element={<UserForm />} />
        <Route path="/edit/:id" element={<UserForm />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </div>
  </Router>
);

export default App;