import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: '8733d6e7e2025f98914d10d872f02ce9' };

export const getTrends = async () => {
    return (await axios.get('/trending/all/day')).data;
};

export const getSearch = async query => {
    return (await axios.get(`/search/movie?query=${query}`)).data;
};

export const getMovieDetails = async id => {
    return (await axios.get(`/movie/${id}`)).data;
};

export const getMovieCredits = async id => {
    return (await axios.get(`/movie/${id}/credits`)).data;
};

export const getMovieReviews = async id => {
    return (await axios.get(`/movie/${id}/reviews`)).data;
};