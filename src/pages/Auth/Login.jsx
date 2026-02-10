import { useState } from "react";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import "../../all-css-files/Login.css";
import toast from "react-hot-toast";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loadingToast = toast.loading("Logging...");

      

      const res = await login(form);

      if (res.status === 200) {
       setTimeout(() => {
        toast.success("Login successfuly!", { id: loadingToast });
        navigate("/dashboard");
      }, 1000);
        
      }
    } catch (error) {
      toast.error("Login failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>

          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="User Name"
              autoComplete="username"
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              onChange={handleChange}
            />
          </div>

          <button className="btn" type="submit">
            Login
          </button>

          <div className="link">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
