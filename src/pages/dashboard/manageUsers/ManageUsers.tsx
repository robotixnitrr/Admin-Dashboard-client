import { useEffect, useState } from "react";
import api from "../../../api/axios";
import { toast } from "react-toastify";
import CustomModal from '../../../components/CustomModal';

interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

function ManageUsers() {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState<IUser[]>([]);
  const [newUser, setNewUser] = useState<IUser>({ id: 0, name: "", email: "", role: "user" });

  const fetchUsers = async () => {
    try {
      const response = await api.get("/user");
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Failed to fetch users.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewUser(prevState => ({ ...prevState, [name]: value }));
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/users", newUser);
      setUserData(prevData => [...prevData, response.data]);
      toast.success("User created successfully!");
      setNewUser({ id: 0, name: "", email: "", role: "user" });
      setShowModal(false);
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Failed to create user.");
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      await api.delete(`/users/${id}`);
      setUserData(prevData => prevData.filter(user => user.id !== id));
      toast.success("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user.");
    }
  };

  return (
    <div className="container-fluid bg-white p-2">
      <p className="fs-2 fw-bold">Manage Users</p>
      <button onClick={() => setShowModal(true)} className="btn btn-primary">Create User</button>
      
      {showModal && (
        <CustomModal show={showModal} onClose={() => setShowModal(false)}>
          <h2 className="text-xl font-bold mb-4">Create User</h2>
          <form onSubmit={handleCreateUser}>
            <input type="text" name="name" placeholder="Name" value={newUser.name} onChange={handleInputChange} required className="border p-2 mb-2 w-full" />
            <input type="email" name="email" placeholder="Email" value={newUser.email} onChange={handleInputChange} required className="border p-2 mb-2 w-full" />
            <select name="role" value={newUser.role} onChange={handleInputChange} className="border p-2 mb-2 w-full">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Create User</button>
          </form>
        </CustomModal>
      )}

      <div className="row g-3">
        {userData.map((user) => (
          <div key={user.id} className="col-lg-4 d-flex align-items-stretch">
            <div className="card w-100 rounded-3 shadow-sm transition-transform transform hover:scale-105">
              <div className="card-body">
                <h5 className="card-title text-primary">{user.name}</h5>
                <p className="card-text text-muted">{user.email}</p>
                <p className="card-text"><strong>Role:</strong> {user.role}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>Delete User</button>
                  <span className="badge bg-secondary">{user.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageUsers;