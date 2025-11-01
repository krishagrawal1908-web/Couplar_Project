import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleRegister = async () => {
    await axios.post("http://localhost:7001/api/auth/register", { username, password, role });
    alert("User registered successfully!");
    navigate("/");
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
