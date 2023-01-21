import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const get = async (url: string) => {
	const response = await api.get(url);
	return response.data;
};
