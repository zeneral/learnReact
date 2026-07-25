import { useParams, Link } from "react-router";
import useProduct from "../controller/productController.js";
import DetailBox from "../components/detailBox.jsx"; 
export default function Product() {
    const { id } = useParams();
    const { product, loading, error } = useProduct(id);

    if (loading) return <p className="text-center py-10 text-gray-500">Loading product...</p>;
    if (error) return <p className="text-center py-10 text-red-500">Error: {error}</p>;
    if (!product) return null;

    return (
        <div className="max-w-4xl mx-auto">
            <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">
                ← Back 
            </Link>

           <DetailBox product={product}/> 
        </div>
    );
}
