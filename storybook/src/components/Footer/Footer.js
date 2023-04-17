export const Footer = () =>{
    return(
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                Storybook
                </a>
                <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2023 Company, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-body-secondary" href="#"><i className="fab fa-twitter fa-2x" /></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><i className="fab fa-facebook-square fa-2x" /></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><i className="fab fa-instagram fa-2x"></i></a></li>
            </ul>
            </footer> 
      </div>
    );
};