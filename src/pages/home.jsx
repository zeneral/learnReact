import useProducts from "../controller/homeController.js"
import ProductCards from "../components/card.jsx"
import {useOutletContext} from "react-router"
import {useState, useEffect} from "react"
export default function Home(){
    const { search, category } = useOutletContext();

    const {products, loading, loadingMore, hasMore, loadMore, skip, error} = useProducts(search, category);

    if(loading){
        return <p className="text-center text-gray-500"> Loading products ... </p>
    }

    if(error){;
        return <p classNmae="text-center text-gray-500">Error: {error}</p>
    }

    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
               {products.map((product) => (
                   <ProductCards key={product.id} product={product} />
               ))}
            </div>
           {hasMore && (
              <div className="flex justify-center mt-8">
                 <button
                     onClick={loadMore}
                     disabled={loadingMore}
                     className="rounded-md bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 disabled:opacity-50 transition-colors"
                 >
                     {loadingMore ? "Loading..." : "Load More"}
                 </button>
          </div>
        )}
        </div>
    );

    return <p> This is home page </p>
}


