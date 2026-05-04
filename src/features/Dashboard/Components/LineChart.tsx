import { mockActivityData } from "../constant/dashboard.data"


export const LineChartCard = () => {
const data = mockActivityData.activity.weeklyActivity;
const maxVal = Math.max(...data.map((d)=>d.responseCount));
// console.log("The mx valu is",maxVal);
const padding = 5;
const points = data.map((item,index)=>{
    const x = padding +(index/(data.length -1))*(100-2*padding);//1
    const y =  padding +  (1 - item.responseCount / maxVal) * (100 - 2 * padding);//2
   return {x,y,...item};
    
})

console.log("The point is ",points);

   return (
  <div className="w-full  sm:w-4/5  m-2  h-[250px] bg-slate-200 relative p-5 border shadow-2xl rounded-sm cursor-pointer">
    
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full"
    >
         {/* Horizontal */}
  {[0, 25, 50, 75, 100].map((y, i) => (
    <line
      key={`h-${i}`}
      x1="0"
      y1={y}
      x2="100"
      y2={y}
      stroke="grey"
      strokeWidth="0.5"
    />
  ))}

  {/* Vertical */}
  {points.map((point, i) => (
    <line
      key={`v-${i}`}
      x1={point.x}
      y1="0"
      x2={point.x}
      y2="100"
      stroke="grey"
      strokeWidth="0.5"
    />
  ))}
      {/* Line */}
      <polyline
        fill="none"
        stroke="green"
        strokeWidth="1"
        points={points.map((p) => `${p.x},${p.y}`).join(" ")}
      />

      {/* Labels (INSIDE SVG) */}
      {points.map((point, i) => (
        <text
          key={i}
          x={point.x}
          y={98}
          textAnchor="middle"
          fontSize="5"
          fill="black"
        >
          {point.day}
        </text>
      ))}
    </svg>

    {/* Dots (HTML layer) */}
    {points.map((point, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-blue-900 rounded-full"
        style={{
          left: `${point.x}%`,
          top: `${point.y}%`,
          transform: "translate(-50%, -50%)",
        }}
        title={`${point.day}: ${point.responseCount}`}
      />
    ))}

  </div>
);
     


}

/* 
const x = (index/(data.length -1))*100; 
// we use data.length -1  to reach the end point to 100% from first point to 0%
//we use * 100 so that it can divide create co ordinates

 const y = 100 - (item.responseCount/maxVal)*100;//2
 the number is subtract with 100 cause , how CSS positioning works.
 top: 0%   → top of container
top: 100% → bottom of container

*/