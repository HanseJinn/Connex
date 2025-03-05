import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

export const registerUser = async (username: string, password: string) => {
    try {
        const response = await axios.post(API_URL, { username, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};