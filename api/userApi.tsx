import axios from 'axios';
import { User } from '../models/user/user';
import { REACT_APP_API_BASE_URL } from "@env";

const API_BASE_URL = REACT_APP_API_BASE_URL; // Replace with your API base URL

const api = axios.create({
    baseURL: API_BASE_URL,
});



export const fetchUsers = async (): Promise<User[]> => {
    try {
        const response = await api.get('/users');
        return response.data;
    } catch (error) {
        console.log(API_BASE_URL ? 'ok': 'trop null');
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const fetchUserById = async (id: string): Promise<User | null> => {
    try {
        const response = await api.get(`/user/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching user with ID ${id}:`, error);
        throw error;
    }
};