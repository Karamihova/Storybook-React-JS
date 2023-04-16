import { request } from "./requester";
const baseUrl = 'http://localhost:3030/jsonstore/stories';

export const getAll = async () => {
     const games = request('GET', baseUrl);
};