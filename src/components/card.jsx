import { Link } from "react-router";

export default function ProductCard({ product }) {
    const { id, title, price, discountPercentage, category, thumbnail, rating } = product;
    return (
        <Link
            to={`/product/${id}`}
            className="group flex flex-col bg-slate-400 rounded-lg shadow-sm border
            border-gray-200 overflow-hidden hover:shadow-md transition-shadow
            hover:-translate-y-4 transition-transform duration-200"
        >
            <div className="h-48 flex items-center justify-center bg-gray-200 p-4">
                <img
                    src={thumbnail}
                    alt={title}
                    className="max-h-full max-w-full object-contain 
                    group-hover:scale-105 transition-transform"
                />
            </div>

            <div className="flex flex-col flex-1 p-4 gap-2">
                <span className="text-xs uppercase tracking-wide text-gray-400">
                    {category}
                </span>

                <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                    {title}
                </h3>

                <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-lg font-bold text-gray-900">
                        ${price}
                         <span className="text-sm text-red-600">
                            ({discountPercentage}% off)
                        </span>
                    </span>
                    
                    <span className="flex items-center gap-1 text-sm text-yellow-500">
                        ★ {rating ?? "N/A"}
                    </span>
                </div>
            </div>
        </Link>
    );
}
