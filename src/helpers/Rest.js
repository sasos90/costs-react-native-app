import Config from "react-native-config/index";

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

const post = (endpoint: string, body: any) => {
    return fetch(`${Config.API_URL}${endpoint}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    }).then(res => res.json());
};

const get = (endpoint: string, body: any) => {
    return fetch(`${Config.API_URL}${endpoint}`, {
        method: 'GET',
        headers
    }).then(res => res.json());
};

const put = (endpoint: string, body: any) => {
    return fetch(`${Config.API_URL}${endpoint}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(body)
    }).then(res => res.json());
};

const deleteMethod = (endpoint: string, body: any) => {
    return fetch(`${Config.API_URL}${endpoint}`, {
        method: 'DELETE',
        headers
    }).then(res => res.json());
};

export let Rest = {
    post, get, put, deleteMethod
};