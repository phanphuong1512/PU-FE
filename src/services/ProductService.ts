import { api } from "./api";
import type { Product } from "../types/product";

export const productService = {
  getAll: async (): Promise<Product[]> => {
    const res = await api.get<Product[]>("/products");
    return res.data;
  },
  getById: async (id: number): Promise<Product> => {
    const res = await api.get<Product>(`/products/${id}`);
    return res.data;
  },
};
