import {useState, useEffect } from "react"

const LIMIT = 30;

export default function useProducts(search = "", category = "") {
   const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false)
    const [total, setTotal] = useState(0);
    const [skip, setSkip] = useState(0);
    const [error, setError] = useState(null);

    const url = `https://dummyjson.com/products/${category != "" ? `category/${category}/` : `search?q=${search}`}`;
    useEffect(() => {
        const timedelay = setTimeout(() => {
           async function fetchProduct(){
               try{
                   setLoading(true);
                   const response = await fetch(url);
    
                   if(!response.ok){
                       throw new Error('Request failed with status ${response.status}');
                   }
    
                   const data = await response.json();
                   setProducts(data.products);
                   setTotal(data.total);
                   setSkip(LIMIT);

               }catch (err){
                   setError(err.message);
               }finally {
                   setLoading(false);
               }
           }
           fetchProduct();           
        }, 400);
        return () => clearTimeout(timedelay);

    }, [search, category])
    
    async function loadMore(){
        setLoadingMore(true);
        try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${search}&limit=${LIMIT}&skip=${skip}`);
            if(!response.ok){
                throw new Error(`Request failed with status ${response.status}`)
            }
            const data = await response.json();
            setProducts((prevProducts) => [...prevProducts, ...data.products]);
            setSkip((prev) => prev + LIMIT)
        }catch(err){
            setError(err.message)
        }finally{
            setLoadingMore(false);
        }

    }

    const hasMore = skip < total;

    return  {products, loading, loadingMore, hasMore, loadMore, skip, error}
}


