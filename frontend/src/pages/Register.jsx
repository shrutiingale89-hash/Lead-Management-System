import { useState } from "react";
import axios from "axios";

function Register({ onBackToLogin }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("AGENT");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://lead-management-system-gtzn.onrender.com/api/auth/register",
        {
          name,
          email,
          password,
          role
        }
      );

      alert("Registration Successful");

      onBackToLogin();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );

    }

  };

  return (

    <div className="container mt-5">

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-3"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <select
          className="form-control mb-3"
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
        >
          <option value="ADMIN">ADMIN</option>
          <option value="MANAGER">MANAGER</option>
          <option value="AGENT">AGENT</option>
        </select>

        <button
          type="submit"
          className="btn btn-success"
        >
          Register
        </button>

        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={onBackToLogin}
        >
          Back To Login
        </button>

      </form>

    </div>

  );

}

export default Register;