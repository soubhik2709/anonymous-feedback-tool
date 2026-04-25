type ProgressBarProps = {
  percentage: number;
};
export const ProgressBar  = ({percentage}:ProgressBarProps)=>{
    return(
         <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-purple-600" style={{ width: `${percentage || 0}%` }} />
          </div>
    )
}