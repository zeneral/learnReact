import {useState} from "react"
import Review from "../components/review.jsx"

export default function DetailBox({ product }){
    const [activeImage, setActiveImage] = useState(0); 
    const [showReviews, setShowReviews] = useState(false);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 item-start">
                <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center relative">
                    <img
                        src={product.images[activeImage]}
                        alt={product.title}
                        className="max-h-50 object-contain"
                    />
                <button className="p-4 border rounded-sm absolute bottom-0 right-0" type="button" onClick={
                    () => {
                        setActiveImage((prev) => {
                            return (prev + 1) % product.images.length;
                        })
                    }
                }>Next</button>

                <button className="p-4 border absolute rounded-sm bottom-0 left-0" type="button" onClick={
                    () => {
                        setActiveImage((prev) => {
                            return (prev - 1) < 0 ? product.images.length - 1 : prev - 1;
                        })
                    }
                }>prev</button>

                </div>

                <div className="flex flex-col gap-4">
                    <span className="text-sm uppercase tracking-wide text-gray-400">
                        {product.category}
                    </span>
                    <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>

                    <details>
                        <summary>Description</summary>
                            <p className="text-gray-600">{product.description}</p>
                    </details>

                    <span className="text-sm flex flex-col">
                            <p>Brand: {product.brand}</p>
                            <p>stock: {product.stock}</p>
                    </span>
                <div className="flex items-center gap-4">
                        <span className="text-sm line-through font-bold text-red-400">
                            ${product.price}
                        </span>
                        <span className="text-lg line-through font-bold text-gray-900">
                            ${(product.price - (product.discountPercentage / 100 * product.price)).toFixed(2)}
                        </span>
                        <span className="text-sm">
                            {product.discountPercentage}% off
                        </span>
                        <span className="flex items-center gap-1 text-yellow-500">
                            ★ {product.rating}
                        </span>
                        
                    </div>
                    
                <span className="flex flex-row gap-5">
                    <button className="mt-4 rounded-md bg-slate-600 text-white px-6 py-3 hover:bg-slate-500 transition-colors">
                       Buy Now 
                    </button>
                    <button className="mt-4 rounded-md bg-slate-600 text-white px-6 py-3 hover:bg-slate-500 transition-colors">
                        Add to Cart
                    </button>
                </span>    
                    
            </div>
            <button className="bg-slate-400 p-4 rounded-sm" type="button" onClick={() => {
                setShowReviews(!showReviews);
            }}>{showReviews ? "Hide Reviews" : "Show Reviews"}
            </button>
            <br/>
            {showReviews && (
                <div>
                   {product.reviews.length === 0 ? (
                       <p className="text-grey-500 text-sm">No reviews yer</p>
                   ): (
                       product.reviews.map((review, index) => {
                               return <Review props={review}/> 
                       })
                   )}
                   </div>
               )}
               </div>
    )
}
