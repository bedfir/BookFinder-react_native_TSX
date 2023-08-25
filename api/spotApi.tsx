import axios from 'axios';
import { Spot } from '../models/spot/spot';
import { REACT_APP_API_BASE_URL } from "@env";

const API_BASE_URL = REACT_APP_API_BASE_URL; // Replace with your API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchSpots = async (): Promise<Spot[]> => {
  try {
    const response = await api.get('/spots');
    return response.data;
  } catch (error) {
    console.error('Error fetching spots:', error);
    throw error;
  }
};

export const fetchSpotById = async (id: string): Promise<Spot | null> => {
  try {
    const response = await api.get(`/spot/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching spot with ID ${id}:`, error);
    throw error;
  }
};