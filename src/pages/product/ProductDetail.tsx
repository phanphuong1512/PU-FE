import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout"; 
import { productService } from "../../services/productService";
import type { Product } from "../../types/product";
import Button from "../../components/common/Button";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    productService
      .getById(Number(id))
      .then(setProduct)
      .catch(() => setError("Không tìm thấy sản phẩm"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Layout><p className="p-4">Đang tải...</p></Layout>;
  if (error) return <Layout><p className="p-4 text-red-500">{error}</p></Layout>;
  if (!product) return <Layout><p className="p-4">Không có sản phẩm</p></Layout>;

  return (
    <Layout>
      <div className="p-4 max-w-3xl mx-auto bg-white shadow rounded">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="font-semibold mb-2">Giá: {product.price.toLocaleString()} VND</p>
        <p className="mb-2">Số lượng: {product.stock}</p>
        <Button onClick={() => window.history.back()} className="mt-4 bg-yellow-500 text-black hover:bg-yellow-600">
          Quay lại
        </Button>
      </div>
    </Layout>
  );
}
