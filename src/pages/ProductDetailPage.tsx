import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../services/ProductService";
import {type Product } from "../types/Product";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getProductById(Number(id))
        .then(setProduct)
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <p className="text-center mt-10">Đang tải...</p>;
  if (!product) return <p className="text-center mt-10">Không tìm thấy sản phẩm.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-2xl mt-8">
      <Link to="/" className="text-indigo-600 text-sm">&larr; Quay lại</Link>
      <h1 className="text-2xl font-bold mt-2 mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-3">{product.description}</p>
      <p className="text-lg font-semibold text-indigo-600 mb-2">
        Giá: {product.price.toLocaleString()} ₫
      </p>
      <p className="text-sm text-gray-500">Tồn kho: {product.stock}</p>
      <p className="text-xs text-gray-400 mt-2">Ngày tạo: {new Date(product.createdAt).toLocaleString()}</p>
    </div>
  );
}
