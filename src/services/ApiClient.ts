import axios from "axios";

const client = axios.create({
    baseURL: 'https://timeless.brainfors.am/api/',
});

client.interceptors.request.use((config: any) => {

    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmJlZmI0NjE1NTZjMjU5MWJjNzViYSIsImlhdCI6MTY1NDAwMjYxMn0.fK91baA38W2UzUUVa98KL1RDJ3QFjUDM2nT4brRMrCc';
    if (accessToken) {
        config.headers['x-authorization'] = accessToken
    }
    return config
});

client.interceptors.response.use(

    (response): any => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.log('401 error')
        }
        if (error.response && error.response.data && error.response.status !== 401) {
            console.log('!401');
        }
        return Promise.reject(error)
    }
);

export default client;