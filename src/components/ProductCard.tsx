import { type Product } from "../types/Product";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-2xl shadow-sm hover:shadow-md transition bg-white overflow-hidden">
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{product.description || "Không có mô tả"}</p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <p className="font-bold text-indigo-600">{product.price.toLocaleString()} ₫</p>
          <Link
            to={`/products/${product.productId}`}
            className="text-sm bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
}
