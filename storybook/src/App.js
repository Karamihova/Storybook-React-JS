function App() {
  return (
    <>
      
      {/* Header */}
      <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">Storybook</a>
        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2">Stories</a></li>
          <li><a href="#" className="nav-link px-2">Reviews</a></li>
          <li><a href="#" className="nav-link px-2">About</a></li>
        </ul>
        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">Login</button>
          <button type="button" className="btn btn-primary">Sign-up</button>
        </div>
      </header>
      </div>

      {/* Hero Section */}

      <main className="container">
      <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 fst-italic">Welcome to Storybook!</h1>
          <p className="lead my-3">A free website where you can write, read and review stories.</p>
          <p className="lead mb-0"><a href="#" className="text-white fw-bold">Learn more...</a></p>
        </div>
    </div>
      </main>

      {/* About */}
      <div className="container">
        <div className="col-md-8">
        <article className="blog-post">
          <h2 className="blog-post-title mb-1">Who we are</h2>
          <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
          <hr/>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <h2>Blockquotes</h2>
          <p>This is an example blockquote in action:</p>
          <blockquote className="blockquote">
            <p>Quoted text goes here.</p>
          </blockquote>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          </article>
        </div>
      </div>
      

      {/* Stories Collection */}
      <div className="container">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            Popular Stories
          </h3>
            <div className="row mb-2">

              <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">World</strong>
                    <h3 className="mb-0">Featured post</h3>
                    <div className="mb-1 text-body-secondary">Nov 12</div>
                    <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="stretched-link">Continue reading</a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">Design</strong>
                    <h3 className="mb-0">Post title</h3>
                    <div className="mb-1 text-body-secondary">Nov 11</div>
                    <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="stretched-link">Continue reading</a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">Design</strong>
                    <h3 className="mb-0">Post title</h3>
                    <div className="mb-1 text-body-secondary">Nov 11</div>
                    <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="stretched-link">Continue reading</a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">Design</strong>
                    <h3 className="mb-0">Post title</h3>
                    <div className="mb-1 text-body-secondary">Nov 11</div>
                    <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="stretched-link">Continue reading</a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  </div>
                </div>
              </div>
              
            </div>
      </div>

      {/* Table */}
      <div className="container">
      <h3>Popular Stories</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Likes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>10</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>4</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Charlie</td>
              <td>7</td>
              <td>9</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Totals</td>
              <td>21</td>
              <td>23</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Sign in */}

      <div className="container">

      <h3 className="text-center">Sign in</h3>
        <form>
          <div className="form-outline mb-4 text-center">
            <input type="email" id="form2Example1" className="form-control text-center" />
            <label className="form-label text-center" htmlFor="form2Example1">Email address</label>
          </div>

          <div className="form-outline mb-4 text-center">
            <input type="password" id="form2Example2" className="form-control text-center" />
            <label className="form-label text-center" htmlFor="form2Example2">Password</label>
          </div>

          <div className="row mb-4 text-center">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
              </div>
            </div>

            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <div className="text-center">
            <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
            <p>Not a member? <a href="#!">Register</a></p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>

      {/* Add Form */}

      <div className="container">
      <form>
        <div className="form-group pb-2">
          <label htmlFor="exampleFormControlInput1">Title</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="form-group pb-2">
          <label htmlFor="exampleFormControlInput1">Cover</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Image URL" />
        </div>
        <div className="form-group pb-2">
          <label htmlFor="exampleFormControlSelect1">Category</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Novel</option>
            <option>Romance</option>
            <option>Thriller</option>
            <option>Pscycology</option>
            <option>Lifestyle</option>
          </select>
        </div>
        <div className="form-group pb-2">
          <label htmlFor="exampleFormControlTextarea1">Summary</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="What your story is about..."></textarea>
        </div>
        <div className="form-group pb-2">
          <label htmlFor="exampleFormControlTextarea1">Story text</label>
          <textarea className="form-control pb-2" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="button" className="btn btn-primary btn-block mb-4 mt-2">Post story</button>
        
      </form>
      </div>

      {/* Details */}
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Title</h1>
            <h2 className="display-8 fw-bold text-body-emphasis lh-1 mb-3">Author</h2>
            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Like</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Review</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}

      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              Storybook
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2023 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-body-secondary" href="#"><i class="fab fa-twitter fa-2x" /></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="#"><i class="fab fa-facebook-square fa-2x" /></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="#"><i class="fab fa-instagram fa-2x"></i></a></li>
          </ul>
        </footer> 
      </div>

    </>
  );
}

export default App;
