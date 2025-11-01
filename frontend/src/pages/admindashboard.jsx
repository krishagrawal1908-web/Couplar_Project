import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:7001/api/auth/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUsers(res.data))
      .catch(() => alert("Access denied"));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {users.map((u) => (
          <li key={u._id}>{u.username} — {u.role}</li>
        ))}
      </ul>
    </div>
  );
}
