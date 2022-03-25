import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../auth/firebase/firebase";
import "../styles.css";

export const SignUp: React.FC = () => {
  const [data, setData] = useState({ email: ``, password: `` });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent & { target: { name: string; value: string } }
  ) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(data.email, data.password);
      navigate("/");
    } catch (e: any) {
      console.dir(e.message);
    }
  };

  return (
    <div className="auth-block">
      <div className="auth-form-block">
        <form onSubmit={handleSubmit} className="form-block">
          <h3>Sign Up</h3>
          <input
            name="email"
            placeholder="email"
            type="email"
            value={data.email}
            onChange={handleChange}
          />
          <input
            name="password"
            placeholder="password"
            type="password"
            value={data.password}
            onChange={handleChange}
          />
          <button>Sign Up</button>
          <Link to="/signin" className="sign-up-link">
            Sign in
          </Link>
        </form>
      </div>
    </div>
  );
};