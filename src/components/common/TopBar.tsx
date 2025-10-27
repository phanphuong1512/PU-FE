import type { FC } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  HelpCircle,
  Building2,
  Gift,
} from "lucide-react";

const TopBar: FC = () => {
  return (
    <div className="w-full bg-yellow-400 text-black text-sm font-medium">
      {/* ✅ bỏ max-w-7xl để dàn full chiều ngang */}
      <div className="flex justify-between items-center px-3 sm:px-6 py-2 overflow-x-auto whitespace-nowrap">
        {/* Bên trái */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Phone size={14} />
          <span>Gọi mua hàng:</span>
          <span className="font-semibold">1900.1903</span>
        </div>

        {/* Bên phải */}
        <div className="flex items-center gap-x-3 flex-nowrap flex-shrink-0">
          <button className="flex items-center space-x-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full hover:opacity-90 transition">
            <Phone size={14} />
            <span>Mua hàng online</span>
          </button>

          <button className="flex items-center space-x-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full hover:opacity-90 transition">
            <Phone size={14} />
            <span>Miền Bắc</span>
          </button>

          <button className="flex items-center space-x-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full hover:opacity-90 transition">
            <Phone size={14} />
            <span>Miền Trung</span>
          </button>

          <button className="flex items-center space-x-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full hover:opacity-90 transition">
            <Phone size={14} />
            <span>Miền Nam</span>
          </button>

          <button className="flex items-center space-x-1 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition">
            <MessageCircle size={14} />
            <span>Feedback</span>
          </button>

          <div className="flex items-center space-x-1 hover:text-gray-700 cursor-pointer transition">
            <MapPin size={14} />
            <span>Tìm cửa hàng</span>
          </div>

          <div className="flex items-center space-x-1 hover:text-gray-700 cursor-pointer transition">
            <HelpCircle size={14} />
            <span>Hỗ trợ</span>
          </div>

          <div className="flex items-center space-x-1 hover:text-gray-700 cursor-pointer transition">
            <Building2 size={14} />
            <span>Dịch vụ</span>
          </div>

          <div className="flex items-center space-x-1 hover:text-gray-700 cursor-pointer transition">
            <Gift size={14} />
            <span>Khuyến mãi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
