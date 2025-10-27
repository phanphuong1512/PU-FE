import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Heart,
  Bell,
  ShoppingCart,
  User,
  ChevronDown,
  LogOut,
} from "lucide-react";
import TopBar from "../../components/common/TopBar";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // 🔹 Ẩn menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* 🟨 Thanh vàng trên cùng */}
      <TopBar />

      {/* 🔳 Header chính */}
      <header className="bg-white shadow-md">
        <div className="w-full max-w-full mx-auto flex items-center justify-between px-2 sm:px-4 lg:px-6 py-2">
          {/* 🟡 Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="PU Shop Logo" className="h-8 w-auto" />
          </Link>

         {/* 🔍 Thanh tìm kiếm */}
<div className="flex items-center flex-1 max-w-4xl mx-2 sm:mx-6 bg-gray-100 rounded-full px-3 py-1.5">
  <Search className="text-gray-500 mr-2" size={16} />
  <input
    type="text"
    placeholder="Tìm sản phẩm, danh mục hoặc thương hiệu..."
    className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500 text-sm"
  />
  <button className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-full p-1.5 ml-2 transition">
    <Search size={16} />
  </button>
</div>


          {/* 🧩 Icon + Buttons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* ❤️ Yêu thích */}
            <Heart
              size={22}
              className="text-gray-700 hover:text-yellow-500 cursor-pointer"
            />

            {/* 🔔 Thông báo */}
            <Bell
              size={22}
              className="text-gray-700 hover:text-yellow-500 cursor-pointer"
            />

            {/* 🛒 Giỏ hàng */}
            <div className="relative cursor-pointer">
              <ShoppingCart
                size={22}
                className="text-gray-700 hover:text-yellow-500 transition"
              />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-semibold px-1.5 py-0.5 rounded-full">
                3
              </span>
            </div>

            {/* 🔑 Đăng nhập */}
            <button className="hidden sm:block border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium text-black bg-white hover:bg-gray-100 transition">
              Đăng nhập
            </button>

            {/* 📝 Đăng ký */}
            <button className="hidden sm:block rounded-full px-4 py-1.5 text-sm font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition">
              Đăng kí
            </button>

            {/* 👤 Dropdown menu */}
            <div className="relative" ref={menuRef}>
              <div
                onClick={() => setShowMenu((prev) => !prev)}
                className="flex items-center space-x-1 border border-gray-300 rounded-full px-3 py-1.5 ml-1 hover:bg-gray-100 cursor-pointer transition"
              >
                <User size={20} className="text-gray-700" />
                <ChevronDown
                  size={16}
                  className={`text-gray-600 transition-transform duration-200 ${
                    showMenu ? "rotate-180" : ""
                  }`}
                />
              </div>

              {showMenu && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-lg border border-gray-100 p-4">
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">
                      Mua thì hời, bán thì lời.
                    </p>
                    <p className="text-gray-500 text-sm mb-3">
                      Đăng nhập cái đã!
                    </p>

                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 border border-gray-300 rounded-lg py-2 font-medium hover:bg-gray-100">
                        Tạo tài khoản
                      </button>
                      <button className="flex-1 bg-yellow-400 text-black rounded-lg py-2 font-medium hover:bg-yellow-500">
                        Đăng nhập
                      </button>
                    </div>

                    <hr className="my-2" />

                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="hover:bg-gray-50 p-2 rounded-lg cursor-pointer flex justify-between items-center">
                        Tin đăng đã lưu <ChevronDown size={14} />
                      </li>
                      <li className="hover:bg-gray-50 p-2 rounded-lg cursor-pointer flex justify-between items-center">
                        Tìm kiếm đã lưu <ChevronDown size={14} />
                      </li>
                      <li className="hover:bg-gray-50 p-2 rounded-lg cursor-pointer flex justify-between items-center">
                        Lịch sử xem tin <ChevronDown size={14} />
                      </li>
                      <li className="hover:bg-gray-50 p-2 rounded-lg cursor-pointer flex justify-between items-center">
                        Đánh giá từ tôi <ChevronDown size={14} />
                      </li>
                    </ul>

                    <hr className="my-2" />

                    <button className="flex items-center justify-center w-full text-red-500 hover:text-red-600 py-2 font-medium">
                      <LogOut size={16} className="mr-2" />
                      Đăng xuất
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
