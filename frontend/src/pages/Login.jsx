import { useState } from "react";
import axios from "axios";

function Login({ onLogin, onShowRegister }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://lead-management-system-gtzn.onrender.com/api/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      const payload = JSON.parse(
        atob(response.data.token.split(".")[1])
      );

      localStorage.setItem("role", payload.role);
      localStorage.setItem("userId", payload.id);

      onLogin();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );

    }

  };

  return (

    <div className="container mt-5">

      <div className="card p-4 shadow">

        <h2 className="mb-4">
          Login
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
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

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Login
          </button>

        </form>

        <hr />

        <p className="text-center">

          Don't have an account?

        </p>

        <button
          className="btn btn-success"
          onClick={onShowRegister}
        >
          Register
        </button>

      </div>

    </div>

  );

}

export default Login;
