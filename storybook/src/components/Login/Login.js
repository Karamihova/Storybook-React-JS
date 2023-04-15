export const Login = () => {
    return (
        <div className="container">
          <h3 className="text-center">Login</h3>
            <form>
              <div className="form-outline mb-4 text-center">
                <input type="email" id="form2Example1" className="form-control text-center" />
                <label className="form-label text-center" htmlFor="form2Example1">Email address</label>
              </div>

              <div className="form-outline mb-4 text-center">
                <input type="password" id="form2Example2" className="form-control text-center" />
                <label className="form-label text-center" htmlFor="form2Example2">Password</label>
              </div>

              <div className="text-center">
                <button type="button" className="btn btn-primary btn-block mb-4">Login</button>
                <p>Not a member? <a href="#!">Register</a></p>
              </div>
            </form>
      </div>
    );
};