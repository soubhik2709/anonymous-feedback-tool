import { mockActivityData } from "../constant/dashboard.data"

export const ActivityChatCard = () => {
    const data = mockActivityData.activity.weeklyActivity.map((obj)=>obj);
    console.log("the data is ",data);

    const max = Math.max(...data.map(d=>d.responseCount));
  console.log("the max is ", max);

  return(

    <div className="border border-red-800  rounded-lg w-full h-[320px] flex justify-between gap-1 p-0.5 bg-yellow-100">
     {data.map((item)=>{
        const height = (item.responseCount /max)*100;
        return(
     <div className="h-full flex flex-1 flex-col items-center">
        {/* Bar contianer */}
      <div
      className="w-full h-full flex justify-center items-end border"
      >
        <div
        className="w-full  bg-blue-500 rounded-t-md  hover:bg-blue-600 transition-all duration-300"
        style={{ height: `${height}%` }}
        title={`${item.day} (${item.date}) → ${item.responseCount}`}
        ></div>
        
      </div>
         {/* Label */}
            <span className="text-sm">{item.day}</span>
     </div>
        )
     })}

    </div>
  )


//   {data.map((item)=>{
//     const height = (item.responseCount/max)*100;


//   })}

//     return (

// <div className="border border-red-800 w-full flex justify-center h-full">

// {/* BAR */}
// <div className="relative w-full flex justify-center h-full border border-yellow-500">
//     <div className="w-6 bg-blue-400"
//     style={{height:`{height}%`}} 
//     ></div>
// </div>

// </div>
  
//     )
}

















/* 
...mockActivityData ->this 3 dot convert [10, 20, 30]  →  ... →  10, 20, 30 . So output becomes Math.max(10, 20, 30) . Then we got the output.

*/