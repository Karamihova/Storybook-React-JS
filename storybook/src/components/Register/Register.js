import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";

export const Register = () => {

    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit} = useForm({
        email: '',
        password: '',
        rePassword: ''
    }, onRegisterSubmit);

    return (
        <div className="container">
            <h3 className="text-center">Register</h3>
                <form method="POST" onSubmit={onSubmit}>
                <div className="form-outline mb-4 text-center">
                    <input
                     type="email"
                     name="email"
                     id="form2Example1"
                     className="form-control text-center"
                     value={values.email}
                     onChange={changeHandler}
                    />
                    <label className="form-label text-center" htmlFor="form2Example1">Email address</label>
                </div>

                <div className="form-outline mb-4 text-center">
                    <input
                     type="password"
                     name="password"
                     id="form2Example2"
                     className="form-control text-center"
                     value={values.password}
                     onChange={changeHandler} 
                     />
                    <label className="form-label text-center" htmlFor="form2Example2">Password</label>
                </div>

                <div className="form-outline mb-4 text-center">
                    <input
                     type="password"
                     name="rePassword"
                     id="form2Example3"
                     className="form-control text-center"
                     value={values.rePassword}
                     onChange={changeHandler}
                    />
                    <label className="form-label text-center" htmlFor="form2Example2">Confirm Password</label>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block mb-4">Register</button>
                    <p>Already have an account? <a href="#!">Login</a></p>
                </div>
                </form>
      </div>
    );
};