import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Button from "../../components/common/Button";
import { useProducts } from "../../hooks/useProducts";
import Card from "../../components/common/Card";
import SlideBar from "../../components/common/SlideBar";
import { ShoppingCart, Star } from "lucide-react";

export default function HomePage() {
  const navigate = useNavigate();
  const { products, loading, error } = useProducts();

  // 🔹 Slide banner chính (cao hơn)
  const slides = [
    {
      id: 1,
      title: "Ưu đãi vàng - Giá sốc mỗi ngày!",
      subtitle: "Giảm đến 50% cho laptop và PC gaming",
      bgColor: "#FFD700",
    },
    {
      id: 2,
      title: "Thiết kế tinh tế, hiệu năng đỉnh cao",
      subtitle: "Khám phá bộ sưu tập mới 2025",
      bgColor: "#000000",
    },
    {
      id: 3,
      title: "Miễn phí giao hàng toàn quốc",
      subtitle: "Nhanh chóng - An toàn - Tiện lợi",
      bgColor: "#FFFFFF",
    },
  ];

  // 🔹 Slide thứ hai (ngắn hơn)
  const slides2 = [
    {
      id: 1,
      title: "Laptop Gaming RTX 4060",
      subtitle: "Hiệu năng đỉnh cao cho game thủ",
      bgColor: "#FFF8E1",
    },
    {
      id: 2,
      title: "Điện thoại mới nhất 2025",
      subtitle: "Khám phá siêu phẩm iPhone, Samsung, Xiaomi",
      bgColor: "#F1F8E9",
    },
    {
      id: 3,
      title: "Tai nghe chống ồn Sony WH-1000XM6",
      subtitle: "Đắm chìm trong thế giới âm thanh",
      bgColor: "#E3F2FD",
    },
    {
      id: 4,
      title: "Màn hình UltraWide 34 inch",
      subtitle: "Không gian làm việc & giải trí tuyệt đỉnh",
      bgColor: "#FCE4EC",
    },
  ];

  // 🔹 Danh mục
  const categories = [
    {
      title: "PC, máy tính chơi game",
      filters: ["Asus", "Acer", "Dell", "Lenovo", "MacBook"],
    },
    {
      title: "Điện thoại thông minh",
      filters: ["iPhone", "Samsung", "Xiaomi", "Oppo", "Realme"],
    },
    {
      title: "Màn hình & Phụ kiện",
      filters: ["LG", "MSI", "BenQ", "AOC", "ViewSonic"],
    },
    {
      title: "Thiết bị âm thanh",
      filters: ["Sony", "JBL", "Bose", "Razer", "Marshall"],
    },
  ];

  return (
    <Layout>
      <div className="flex w-full">
        <div className="flex-1 px-4 py-10">
          {/* 🟡 Slide banner chính */}
          <div className="w-full mb-8">
            <div className="rounded-2xl overflow-hidden">
              <SlideBar slides={slides} />
            </div>
          </div>
          {/* 🟢 Slide thứ hai và thứ ba nằm cạnh nhau */}
          <div className="w-full mb-12 flex flex-col sm:flex-row gap-4">
            {/* Slide thứ hai (nhỏ hơn) */}
            <div className="flex-1 rounded-2xl overflow-hidden" style={{ height: "200px" }}>
              <SlideBar slides={slides2} />
            </div>

            {/* Slide thứ ba (cũng nhỏ) */}
            <div className="flex-1 rounded-2xl overflow-hidden" style={{ height: "200px" }}>
              <SlideBar slides={slides2} /> {/* hoặc dùng slides3 nếu muốn nội dung khác */}
            </div>
          </div>

          {/* Tiêu đề chính */}
          <h1 className="text-4xl font-bold text-black mb-4 text-center">
            Chào mừng đến PU Shop
          </h1>
          <p className="text-gray-600 mb-6 text-base text-center">
            Mua sắm các sản phẩm công nghệ mới nhất với giá tốt nhất!
          </p>

          <div className="flex justify-center mb-12">
            <Button
              onClick={() => navigate("/products")}
              className="bg-yellow-500 text-black hover:bg-yellow-600"
            >
              Xem tất cả sản phẩm
            </Button>
          </div>

          {/* 🔥 Hiển thị danh mục sản phẩm */}
          {categories.map((cat, index) => (
            <section key={index} className="mb-16">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5">
                <h2 className="text-2xl font-bold text-black mb-3 sm:mb-0">
                  {cat.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {cat.filters.map((f) => (
                    <button
                      key={f}
                      className="text-sm bg-gray-100 px-3 py-1 rounded-full hover:bg-yellow-200 transition"
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {loading && <p>Đang tải...</p>}
              {error && <p className="text-red-500">{error}</p>}

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.slice(0, 5).map((p) => (
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
                          className={`w-3 h-3 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">(4.0)</span>
                    </div>

                    <p className="font-semibold text-yellow-600 text-base mb-1">
                      {p.price.toLocaleString()} ₫
                    </p>

                   

                    {/* Nút giỏ hàng nhỏ góc phải */}
                    <div className="absolute bottom-3 right-3 bg-white p-1.5 rounded-full shadow-md hover:bg-yellow-100 transition">
                      <ShoppingCart className="w-4 h-4 text-gray-700" />
                    </div>
                  </Card>
                ))}
              </div>

            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
}
