import * as request from "./requester";
const baseUrl = 'http://localhost:3030/jsonstore/stories';

export const getAll = async () => {
     const result = await request.get(baseUrl);
     const stories = Object.values(result);
     
     return stories;
};

export const create = async (storyData) => {
     const result = await request.post(baseUrl, storyData);

     return result;
};

export const getOne = async (storyId) => {
     const result = await request.get(`${baseUrl}/${storyId}`);
     return result;
};