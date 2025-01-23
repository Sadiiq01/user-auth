import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const AdminPage = () => {
  // Example state for managing data
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", email: "" });

  // Handle form submission
  const handleAddUser = (e: any) => {
    e.preventDefault();
    if (newUser.name && newUser.email) {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
      setNewUser({ name: "", email: "" });
    }
  };

  return (
    <div
      className="d-flex flex-column text-center text-white bg-dark"
      style={{
        height: "100vh",
        padding: "20px",
        overflowY: "auto",
      }}
    >
      <header className="mb-4">
        <h1 className="display-4">Admin Dashboard</h1>
      </header>

      <main className="container text-start bg-light p-4 rounded shadow">
        <h2>User Management</h2>
        {/* User Table */}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add User Form */}
        <form onSubmit={handleAddUser} className="mt-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={newUser.name}
              onChange={(e) =>
                setNewUser((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Enter name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={newUser.email}
              onChange={(e) =>
                setNewUser((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter email"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add User
          </button>
        </form>
      </main>
    </div>
  );
};

export default AdminPage;
