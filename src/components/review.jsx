export default function Review({props}){
    const {rating, comment, date, reviewerName, reviewerEmail} = props;
    return (
        <div className="border-b border-gray-200 pb-4">
               <div className="flex items-center justify-between">
                   <span className="font-medium text-gray-800">{reviewerName}</span>
                   <span className="text-yellow-500 text-sm">★ {rating}</span>
               </div>
               <p className="text-gray-600 text-sm mt-1">{comment}</p>
               <span className="text-gray-400 text-xs">
                   {new Date(date).toLocaleDateString()}
               </span>
           </div>
    )
}

