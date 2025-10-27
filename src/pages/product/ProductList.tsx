import { useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import Layout from "../../components/layout/Layout";
import Card from "../../components/common/Card";
import { ShoppingCart, Star } from "lucide-react";

export default function ProductList() {
  const { products, loading, error } = useProducts();
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="p-6 mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8 text-center">
          Danh sách sản phẩm
        </h1>

        {loading && <p>Đang tải...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* ✅ Lưới sản phẩm dùng Card mới */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {products.map((p) => (
            <Card
              key={p.productId}
              imageUrl="/laptop.jpg"
              onClick={() => navigate(`/products/${p.productId}`)}
            >
              {/* Nội dung text hiển thị dưới ảnh */}
              <h3 className="font-bold text-sm text-gray-900 mb-1 line-clamp-2">
                {p.name}
              </h3>

              <p className="text-gray-500 text-xs line-clamp-2 mb-2">
                {p.description}
              </p>

              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < 4
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-xs text-gray-500 ml-1">(4.0)</span>
              </div>

              <p className="font-semibold text-yellow-600 text-base mb-1">
                {p.price.toLocaleString()} ₫
              </p>

              <p className="text-green-600 text-xs font-medium mb-2">
                ✅ Sẵn hàng
              </p>

              {/* Nút giỏ hàng nhỏ góc phải */}
              <div className="absolute bottom-3 right-3 bg-white p-1.5 rounded-full shadow-md hover:bg-yellow-100 transition">
                <ShoppingCart className="w-4 h-4 text-gray-700" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
