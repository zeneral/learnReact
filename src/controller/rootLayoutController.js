
export async function getCategoriesList(){
    const categories = [];
    try {
        const response = await fetch(`https://dummyjson.com/products/category-list`);
        if(!response.ok){
            throw new Error(`Request failed with status ${response.status}`)
        }
        const data = await response.json();
        return data
    }catch(err){
        console.log(err);
        return [];
    }

}
