import type { FC, JSX } from "react";
import {
  Apple, Laptop, Gamepad2, Cpu, Monitor, Headphones,
  Mouse, Sparkles, ShoppingBag, Wrench, Camera,
  Baby, Network, ChevronRight, Menu,
} from "lucide-react";

interface MenuItem {
  icon: JSX.Element;
  label: string;
}

const menuItems: MenuItem[] = [
  { icon: <Apple size={18} />, label: "Sản phẩm Apple" },
  { icon: <Laptop size={18} />, label: "Laptop, Tablet, Surface" },
  { icon: <Gamepad2 size={18} />, label: "Gaming Gear & Console" },
  { icon: <Cpu size={18} />, label: "Linh Kiện Máy Tính" },
  { icon: <Monitor size={18} />, label: "Màn Hình & Thiết Bị Văn Phòng" },
  { icon: <Mouse size={18} />, label: "Phím Chuột, Bàn Ghế" },
  { icon: <Headphones size={18} />, label: "Âm Thanh, Tai Nghe, Mic" },
  { icon: <Sparkles size={18} />, label: "Gia Dụng & Sức Khỏe" },
  { icon: <ShoppingBag size={18} />, label: "Thiết Bị Siêu Thị, Bán Hàng" },
  { icon: <Wrench size={18} />, label: "Dịch Vụ Sửa Chữa, Lắp Đặt" },
  { icon: <Camera size={18} />, label: "Camera, Chuông, Khóa, Cháy" },
  { icon: <Baby size={18} />, label: "Đồ Chơi Mô Hình Chính Hãng" },
  { icon: <Network size={18} />, label: "Thiết Bị Mạng & Lưu Trữ" },
];

const SlideBarMenu: FC = () => {
  return (
    <div className="w-70 max-h-[90vh] bg-white shadow-lg rounded-2xl border border-gray-200 overflow-y-auto overflow-x-hidden">
      {/* Header */}
      <div className="flex items-center space-x-3 bg-yellow-400 text-gray-900 px-5 py-3 font-semibold text-[16px] sticky top-0 z-10">
        <Menu size={20} />
        <span className="truncate">Danh mục sản phẩm</span>
      </div>

      {/* Menu List */}
      <ul className="divide-y divide-gray-100">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between px-5 py-3 cursor-pointer transition-all duration-200 hover:bg-yellow-400 hover:text-gray-900 group"
          >
            <div className="flex items-center space-x-3 min-w-0">
              <span className="text-gray-600 group-hover:text-gray-900 flex-shrink-0">
                {item.icon}
              </span>
              <span className="text-[15px] font-medium group-hover:text-gray-900 truncate">
                {item.label}
              </span>
            </div>
            <ChevronRight
              size={16}
              className="text-gray-400 group-hover:text-gray-900 flex-shrink-0"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlideBarMenu;
