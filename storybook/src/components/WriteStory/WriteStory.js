export const WriteStory = () => {
    return (
        <div className="container">
            <h3>Write Story</h3>
            <form>
                <div className="form-group pb-2">
                <label htmlFor="exampleFormControlInput1">Title</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="form-group pb-2">
                <label htmlFor="exampleFormControlInput1">Cover</label>
                <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Image URL" />
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
                <textarea className="form-control pb-2" id="exampleFormControlTextarea2" rows="6"></textarea>
                </div>
                <button type="button" className="btn btn-primary btn-block mb-4 mt-2">Post story</button>
                
            </form>
            </div>
    );
};