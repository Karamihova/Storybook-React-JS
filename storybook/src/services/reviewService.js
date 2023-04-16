import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/reviews';

export const write = async (data) => {
    const result = await request.post(baseUrl, data);

    return result;
};

export const getAll = async (storyId) => {
    const query = encodeURIComponent(`storyId="${storyId}"`);
    const result = await request.get(`${baseUrl}?where=${query}`);

    const reviews = Object.values(result);
    
    return reviews;
}