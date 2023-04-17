import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export const Login = () => {

    const { onLoginSubmit } = useContext(AuthContext);
    const {values, changeHandler, onSubmit} = useForm({
      email: '',
      password: '',
    }, onLoginSubmit);

    return (
        <div className="container">
          <h3 className="text-center">Login</h3>
            <form method='POST' onSubmit={onSubmit}>
              <div className="form-outline mb-4 text-center">
                <input
                  name="email"
                  type="email"
                  id="form2Example1"
                  className="form-control text-center"
                  value={values.email}
                  onChange={changeHandler}
                />
                <label className="form-label text-center" htmlFor="form2Example1">Email address</label>
              </div>

              <div className="form-outline mb-4 text-center">
                <input
                  name="password"
                  type="password"
                  id="form2Example2"
                  className="form-control text-center"
                  value={values.password}
                  onChange={changeHandler}
                />
                <label className="form-label text-center" htmlFor="form2Example2">Password</label>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-block mb-4">Login</button>
                <p>Not a member? <a href="#!">Register</a></p>
              </div>
            </form>
      </div>
    );
};