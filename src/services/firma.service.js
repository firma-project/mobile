import axios from 'axios';

const HOST = process.env.APP_MANIFEST.extra.hostAPI;

function getUsers () {
    return axios.get(`${HOST}/users`);
}

function createUser ({
    name,
    email,
    profile,
    uid,
    sessionToken
}) {

    const body = {
        name,
        email,
        profile,
        uid,
        sessionToken,
    }
    return axios.post(`${HOST}/users`, body);
}

function listUsers () {
    return axios.get(`${HOST}/users`);
}

function listProducts () {
    return axios.get(`${HOST}/store/products`);
}

export {
    getUsers,
    createUser,
    listProducts,
    listUsers,
}