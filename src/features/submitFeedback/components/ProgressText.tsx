type ProgressTextProps ={
    current:number,
    total:number,
    percentage:number,
}
export const ProgressText = ({current,total,percentage}:ProgressTextProps)=>{
    return(
         <div className="flex justify-between text-sm text-gray-700">
            <span>Question {current} of {total}</span>
            <span>{percentage}% complete</span>
          </div>
    )
}