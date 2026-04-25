type FeedbackProps = {
  title:string,
  description:string,
}
export const FeedbackHeader =({title,description}:FeedbackProps)=>{
    return(
             <div className="bg-white p-6 rounded-xl shadow space-y-3">
            <h1 className="text-xl font-semibold text-gray-800">
             {title}
            </h1>
            <p className="text-gray-600 text-sm">
             {description}
            </p>
          </div>
    )
}


              
//do i have to write this or should i make it dynamic:  Product Feedback and this Please share your experience with our product. Your feedback helps us improve.  if dynamic then hwo ?  