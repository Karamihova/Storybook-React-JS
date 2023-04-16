import {useState} from 'react';

export const WriteStory = ({
    onWriteStorySubmit
}) => {
    const [values, setValues] = useState({
        title: '',
        author: '',
        category: '',
        imageUrl: '',
        summary: '',
        text: ''
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onWriteStorySubmit(values);
    };

    return (
        <div className="container">
            <h3>Write Story</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group pb-2">
                <label htmlFor="exampleFormControlInput1">Title</label>
                <input value={values.title} onChange={onChangeHandler} type="text" name="title" className="form-control" id="exampleFormControlInput1" placeholder="Story title goes here..." />
                </div>
                <div className="form-group pb-2">
                <label htmlFor="exampleFormControlInput1">Author</label>
                <input value={values.author} onChange={onChangeHandler} type="text" name="author" className="form-control" id="exampleFormControlInput4" placeholder="Write your name or pseudonym here..." />
                </div>
                <div className="form-group pb-2">
                <label htmlFor="exampleFormControlInput1">Cover</label>
                <input value={values.imageUrl} onChange={onChangeHandler} type="text" name="imageUrl" className="form-control" id="exampleFormControlInput2" placeholder="Image URL" />
                </div>
                <div className="form-group pb-2">
                <label htmlFor="exampleFormControlInput1">Category</label>
                <input value={values.category} onChange={onChangeHandler} type="text" name="category" className="form-control" id="exampleFormControlInput3" placeholder="Fantasy" />
                </div>
                <div className="form-group pb-2">
                <label htmlFor="exampleFormControlTextarea1">Summary</label>
                <textarea value={values.summary} onChange={onChangeHandler} className="form-control" name="summary" id="exampleFormControlTextarea1" rows="2" placeholder="Describe in short what your story is about..."></textarea>
                </div>
                <div className="form-group pb-2">
                <label htmlFor="exampleFormControlTextarea1">Story text</label>
                <textarea value={values.text} onChange={onChangeHandler} className="form-control pb-2" name="text" id="exampleFormControlTextarea2" rows="6" placeholder="Your story goes here..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4 mt-2">Post story</button>
                
            </form>
            </div>
    );
};