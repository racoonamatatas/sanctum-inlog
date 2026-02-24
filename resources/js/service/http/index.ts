import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const http = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});


export const getRequest = (endpoint: string) => http.get(endpoint);

export const postRequest = <RequestType>(endpoint: string, data: RequestType) => http.post(endpoint, data);

export const putRequest = <RequestType>(endpoint: string, data: RequestType) => http.put(endpoint, data);

export const deleteRequest = (endpoint: string) => http.delete(endpoint);