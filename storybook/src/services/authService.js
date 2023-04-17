import * as request from "./requester"
const baseUrl = "http://localhost:3030/users";

export const login = (email, password) => request.post(`${baseUrl}/login`, {email, password});

export const register = (email, password, rePassword) => {
    if(password !== rePassword) {
        throw new Error('Passwords does not match!');
    }

    return request.post(`${baseUrl}/register`, {email, password});
};

export const logout = () => {

}