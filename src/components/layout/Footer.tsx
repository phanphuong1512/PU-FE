import { MapPin, Image, Map, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const shops = [
    {
      id: 1,
      name: "PU SHOP - HAI BÀ TRƯNG",
      address: "Số 131 Lê Thanh Nghị - Bạch Mai - Hà Nội",
      image: "Hình ảnh thực tế từ showroom",
      map: "Xem bản đồ đường đi",
      phone: "1900 1903 (máy lẻ 25399) - (0247) 3020386",
      email: "kdbl.haibatrung@pushop.vn",
      time: "Từ 8h - 20h hàng ngày",
    },
    {
      id: 2,
      name: "PU SHOP - ĐỐNG ĐA",
      address: "Số 284 Thái Hà - Ô Chợ Dừa - Hà Nội",
      image: "Hình ảnh thực tế từ showroom",
      map: "Xem bản đồ đường đi",
      phone: "1900 1903 (máy lẻ 25375) - (0243) 5380088",
      email: "kdbl.dongda@pushop.vn",
      time: "Từ 8h - 21h hàng ngày",
    },
    {
      id: 3,
      name: "PU SHOP - HẢI PHÒNG",
      address: "Số 36 Lê Lợi - Gia Viên - Hải Phòng",
      image: "Hình ảnh thực tế từ showroom",
      map: "Xem bản đồ đường đi",
      phone: "1900 1903 (máy lẻ 25387) - (022) 58330013",
      email: "kdbl.haiphong@pushop.vn",
      time: "Từ 8h30 - 19h hàng ngày",
    },
    {
      id: 4,
      name: "PU SHOP - CẦU GIẤY",
      address: "Số 79 Nguyễn Văn Huyên - Nghĩa Đô - Hà Nội",
      image: "Hình ảnh thực tế từ showroom",
      map: "Xem bản đồ đường đi",
      phone: "1900 1903 (máy lẻ 25378) - (024) 38610088",
      email: "kdbl.caugiay@pushop.vn",
      time: "Từ 8h - 20h hàng ngày",
    },
  ];

  return (
    <footer className="bg-yellow-400 text-black">
      {/* 🔹 PHẦN ĐĂNG KÝ EMAIL THÔNG BÁO */}
      <div className="bg-[#1d2942] text-white text-center py-10 px-6">
        <h3 className="text-lg md:text-xl font-semibold mb-4 uppercase">
          Đăng ký nhận email thông báo khuyến mãi hoặc để được tư vấn miễn phí
        </h3>
        <div className="flex justify-center">
          <div className="flex w-full max-w-md rounded-lg overflow-hidden border border-white">
            <input
              type="text"
              placeholder="Nhập email hoặc số điện thoại của bạn"
              className="flex-1 bg-black text-white placeholder-gray-400 px-4 py-3 outline-none"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 transition">
              Gửi
            </button>
          </div>
        </div>
      </div>

      {/* --- PHẦN CỬA HÀNG --- */}
      <div className="px-6 md:px-16 py-10 bg-white text-black">
        <h2 className="text-2xl font-bold mb-6 text-center uppercase tracking-wide">
          Hệ thống các showroom của PU Shop
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shops.map((shop) => (
            <div
              key={shop.id}
              className="border border-gray-300 rounded-lg overflow-hidden bg-white"
            >
              {/* Header */}
              <div className="flex items-center">
                <div className="bg-yellow-500 text-white font-bold px-3 py-3">
                  {shop.id}
                </div>
                <div className="bg-black text-white font-semibold px-3 py-3 flex-1 text-sm uppercase">
                  {shop.name}
                </div>
              </div>

              {/* Body */}
              <div className="p-4 space-y-2 text-sm">
                <p className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5" /> {shop.address}
                </p>
                <p className="flex items-start gap-2 text-red-600">
                  <Image size={16} className="mt-0.5" /> {shop.image}
                </p>
                <p className="flex items-start gap-2 text-red-600">
                  <Map size={16} className="mt-0.5" /> {shop.map}
                </p>
                <p className="flex items-start gap-2">
                  <Phone size={16} className="mt-0.5" /> {shop.phone}
                </p>
                <p className="flex items-start gap-2">
                  <Mail size={16} className="mt-0.5" /> {shop.email}
                </p>
                <p className="flex items-start gap-2">
                  <Clock size={16} className="mt-0.5" /> Thời gian mở cửa: {shop.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- PHẦN DƯỚI GIỮ NGUYÊN --- */}
      <div className="bg-yellow py-10 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* App */}
          <div>
            <h3 className="font-semibold mb-4">Tải ứng dụng PU Shop</h3>
            <div className="flex items-center space-x-4">
              <img src="/qr_logo.png" alt="QR" className="h-28 w-28 rounded" />
              <div className="flex flex-col space-y-2">
                <img src="/appstore-dowload.webp" alt="App Store" className="h-10 w-32" />
                <img src="/googleplay-dowload.webp" alt="Google Play" className="h-10 w-32" />
              </div>
            </div>
          </div>

          {/* Hỗ trợ KH */}
          <div>
            <h3 className="font-semibold mb-4">Hỗ trợ khách hàng</h3>
            <ul className="space-y-2 text-sm">
              <li>Trung tâm trợ giúp</li>
              <li>An toàn mua bán</li>
              <li>Liên hệ hỗ trợ</li>
            </ul>
          </div>

          {/* Về PU Shop */}
          <div>
            <h3 className="font-semibold mb-4">Về PU Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>Giới thiệu</li>
              <li>Chính sách bảo mật</li>
              <li>Giải quyết tranh chấp</li>
              <li>Tuyển dụng</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Liên kết */}
          <div>
            <h3 className="font-semibold mb-4">Liên kết</h3>
            <div className="flex space-x-3 mb-4">
              <img src="/tiktok_logo.jpg" alt="TikTok" className="h-7 w-7" />
              <img src="/Youtube_logo.png" alt="YouTube" className="h-7 w-7" />
              <img src="/facebook.webp" alt="Facebook" className="h-7 w-7" />
              <img src="/Instagram.webp" alt="Instagram" className="h-7 w-7" />
            </div>
            <p className="text-sm">Email: support@pushop.vn</p>
            <p className="text-sm">CSKH: 19003003 (1.000đ/phút)</p>
            <p className="text-sm mt-2">
              Địa chỉ: Tầng 18, Tòa nhà PU, Quận Đống Đa, TP. Hà Nội
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow text-center pt-2 pb-3 text-sm">
        <p>
          CÔNG TY TNHH PU SHOP - Đại diện pháp luật: Nguyễn Trọng Tấn | GPDKKD:
          0312120782 | GP MXH: 185/GP-BTTTT cấp ngày 09/07/2024
        </p>
        <p>© {new Date().getFullYear()} PU Shop. Chính sách sử dụng.</p>
      </div>
    </footer>
  );
}
