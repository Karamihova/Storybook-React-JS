export const Register = () => {
    return (
        <div className="container">
            <h3 className="text-center">Register</h3>
                <form>
                <div className="form-outline mb-4 text-center">
                    <input type="email" id="form2Example1" className="form-control text-center" />
                    <label className="form-label text-center" htmlFor="form2Example1">Email address</label>
                </div>

                <div className="form-outline mb-4 text-center">
                    <input type="password" id="form2Example2" className="form-control text-center" />
                    <label className="form-label text-center" htmlFor="form2Example2">Password</label>
                </div>

                <div className="form-outline mb-4 text-center">
                    <input type="password" id="form2Example3" className="form-control text-center" />
                    <label className="form-label text-center" htmlFor="form2Example2">Confirm Password</label>
                </div>

                <div className="text-center">
                    <button type="button" className="btn btn-primary btn-block mb-4">Register</button>
                    <p>Already have an account? <a href="#!">Login</a></p>
                </div>
                </form>
      </div>
    );
};