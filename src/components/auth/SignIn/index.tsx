import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../auth/firebase/firebase";
import { State } from "../types";
import "../styles.scss";

export const SignIn: React.FC = () => {
  const [data, setData] = useState<State>({
    email: ``,
    password: ``,
    error: ``,
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> & {
      target: { name: string; value: string };
    }
  ) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      error: ``,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(data.email, data.password);
      navigate("/");
    } catch (e: any) {
      setData((prevState) => ({
        ...prevState,
        error: e.message,
      }));
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-form-wrapper auth-page__auth-form-wrapper">
        <form
          onSubmit={handleSubmit}
          className="auth-form auth-form-wrapper__form"
        >
          <h3 className="auth-form__header">Sign In</h3>
          <input
            name="email"
            placeholder="email"
            type="email"
            value={data.email}
            onChange={handleChange}
            className="auth-form__input"
          />
          <input
            name="password"
            placeholder="password"
            type="password"
            value={data.password}
            onChange={handleChange}
            className="auth-form__input"
          />
          <button className="auth-form__submit-button">Sign In</button>
          <Link to="/signup" className="auth-form__sign-up-link">
            Sign up
          </Link>
          {data.error ? <p>{data.error}</p> : null}
        </form>
      </div>
    </div>
  );
};
