import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">Storybook</Link>
                </div>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
                <li><Link to="/stories" className="nav-link px-2">Stories</Link></li>
                <li><Link to="/reviews" className="nav-link px-2">Reviews</Link></li>
                <li><Link to="/write-story" className="nav-link px-2">Write</Link></li>
                </ul>
                <div className="col-md-3 text-end">
                <Link to="/login">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                </Link>
                <Link to="register">
                    <button type="button" className="btn btn-primary">Register</button>
                </Link>
                </div>
            </header>
      </div>
    );
};