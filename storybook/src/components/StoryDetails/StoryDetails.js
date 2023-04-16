import {useParams} from 'react-router-dom';
import * as storyService from '../../services/storyService';
import * as reviewService from '../../services/reviewService';
import { useEffect, useState } from 'react';

export const StoryDetails = () => {

    const [username, setUsername] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');
    const [reviews, setReviews] = useState([]);

    const [story, setStory] = useState({});

    const {storyId} = useParams();

    useEffect(() => {
        storyService.getOne(storyId)
            .then(result => {
                setStory(result);
                return reviewService.getAll(storyId);
            })
            .then(result => {
                setReviews(result);
            });       
    }, [storyId]);

    const onReviewSubmit = async (e) => {
        e.preventDefault();

        await reviewService.write({
            storyId,
            username,
            review,
            rating
        });

        setUsername('');
        setReview('');
        setRating('');
    };

    return (
        <>
        {/* Story Details */}
        <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src={story.imageUrl} alt="" width="200" height="250" />
            <strong className="d-inline-block mb-2 text-primary">{story.category}</strong>

            <h1 className="display-5 fw-bold text-body-emphasis">{story.title}</h1>
            <h3>By {story.author}</h3>

            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">{story.text}</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Like</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Add to Reading List</button>
            </div>
            </div>
        </div>

        {/* Write Review Form */}
        <div className="container">
            <h3>Write Review</h3>
            <form onSubmit={onReviewSubmit}>

                <div className="form-group pb-2">
                <label htmlFor="exampleFormControlInput1">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username" className="form-control" id="exampleFormControlInput1" />
                </div>

                <div className="form-group pb-2">
                <label htmlFor="exampleFormControlTextarea1">Review</label>
                <textarea value={review} onChange={(e) => setReview(e.target.value)} className="form-control pb-2" name="review" id="exampleFormControlTextarea2" rows="6" placeholder="What did you think about the story..."></textarea>
                </div>

                <div className="form-group pb-2">
                <label htmlFor="exampleFormControlInput1">Rating</label>
                <input value={rating} onChange={(e) => setRating(e.target.value)} type="text" name="rating" className="form-control" id="exampleFormControlInput2" placeholder="From 1 to 5 stars, how much did you enjoy..." />
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4 mt-2">Post Review</button>
                
            </form>
            </div>

            {/* Reviews Collection */}
            <div className="container">
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                        <h6 className="border-bottom pb-2 mb-0">Recent updates</h6>
                        
                        {reviews.map(x => (
                            <div key={x._id} className="d-flex text-body-secondary pt-3">
                            <p className="pb-3 mb-0 small lh-sm border-bottom">
                                <strong className="d-block text-gray-dark">@{x.username}</strong>
                                <strong>{x.rating} Stars</strong> - {x.review}
                            </p>
                            <button type="submit" className="btn btn-primary btn-block mb-4 mt-2 mx-3">Edit</button>
                            <button type="submit" className="btn btn-primary btn-block mb-4 mt-2">Delete</button>
                            </div>
                        ))}

                        {reviews.length === 0 && (
                            <h2>There are no reviews yet</h2>
                        )}

                        {/* <div className="d-flex text-body-secondary pt-3">
                        <p className="pb-3 mb-0 small lh-sm border-bottom">
                            <strong className="d-block text-gray-dark">@username</strong>
                            <strong>5 Stars</strong> - Some more representative placeholder content, related to this other user. Another status update, perhaps.
                        </p>
                        </div> */}
                </div>
            </div>
        </>
        
    );
};