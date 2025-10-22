import axios from "axios";
import { type Product } from "../types/Product";

const API_URL = "https://localhost:5000/api/products"; // chỉnh lại port backend của bạn

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};
