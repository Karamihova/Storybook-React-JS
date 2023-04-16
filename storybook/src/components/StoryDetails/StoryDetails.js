import {useParams} from 'react-router-dom';
import * as storyService from '../../services/storyService';
import { useEffect, useState } from 'react';

export const StoryDetails = () => {

    const [story, setStory] = useState({});
    const {storyId} = useParams();

    useEffect(() => {
        storyService.getOne(storyId)
            .then(result => {
                setStory(result);
            });       
    }, [storyId]);

    return (
        <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src={story.imageUrl} alt="" width="200" height="250" />
            <strong className="d-inline-block mb-2 text-primary">{story.category}</strong>

            <h1 className="display-5 fw-bold text-body-emphasis">{story.title}</h1>
            <h3>By {story.author}</h3>

            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">{story.text}</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Like</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Review</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Add to Reading List</button>
            </div>
            </div>
        </div>
    );
};