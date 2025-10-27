import type { FC, ReactNode } from "react";

interface CardProps {
  imageUrl: string; // ➕ Thêm prop ảnh
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: FC<CardProps> = ({ imageUrl, children, className = "", onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden
                  transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer ${className}`}
    >
      {/* Ảnh trên cùng */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt="card"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {/* Ví dụ: Badge hoặc thời gian đăng */}
        <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
          21 giây trước
        </div>
      </div>

      {/* Nội dung bên dưới */}
      <div className="p-4 flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
};

export default Card;
