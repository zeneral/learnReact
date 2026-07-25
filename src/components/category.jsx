export default function CategoryList({categories, category, setCategory}){
    return(
      <div className="flex justify-center gap-3 overflow-x-auto pb-2 mb-6">
                    {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-1.5 text-sm whitespace-nowrap transition-colors
                ${category === cat ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
            {cat}
                </button>
            ))}
            </div>
    )
}
