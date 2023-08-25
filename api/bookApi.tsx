import axios from 'axios';
import { Book } from '../models/book/book';
import { REACT_APP_API_BASE_URL } from "@env";


const API_BASE_URL = REACT_APP_API_BASE_URL; // Replace with your API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchBooks = async (): Promise<Book[]> => {
  try {
    const response = await api.get('/books');
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const fetchBookById = async (id: string): Promise<Book | null> => {
  try {
    const response = await api.get(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching book with ID ${id}:`, error);
    throw error;
  }
};