import { mockForm } from "../constant/dashboard.data";

export const PieChart = () => {
  const result = mockForm.questions.reduce(
    (acc, curr) => {
      acc[curr.type] = (acc[curr.type] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );
//   console.log("the result is ", result);
//   op-->{text: 1, rating: 1, multiple_choice: 1, yes_no: 1}

const pieData = Object.entries(result).map(([type,count])=>({type,count}))
// console.log(pieData);
// op=> [{…}, {…}, {…}, {…}] -- [0:{type: 'text', count: 1},...]
/* 
// BEFORE
{ text: 1, rating: 2 }

// AFTER
[
  { type: "text", count: 1 },
  { type: "rating", count: 2 }
]
*/

const COLORS:Record<string,string> ={
  text: "#3b82f6",
  multiple_choice: "#10b981",
  rating: "#f59e0b",
  yes_no: "#ef4444",
}
const coloredData = pieData.map(item =>({
    ...item,
    color:COLORS[item.type] || '#999',
}));
// console.log("The coloredData",coloredData);
// op=> [{…}, {…}, {…}, {…}]
// {type: 'text', count: 1, color: '#3b82f6'}

const data = coloredData;
console.log("the data is",data);
//{type: 'text', count: 1, color: '#3b82f6'}, [{…}, {…}, {…}, {…}]

const total = data.reduce((acc,item)=>acc+item.count,0);
// console.log("the total is",total);

let currentAngle = 0;
const gradient = data.map((item)=>{
    const angle = (item.count/total)*360;
    const start = currentAngle;
    const end = currentAngle+angle;
    currentAngle = end;

    return `${item.color} ${start}deg ${end}deg`;
}).join(",");
console.log(gradient); //#3b82f6 0deg 90deg,#f59e0b 90deg 180deg,#999 180deg 270deg,#999 270deg 360deg

  return (
  <div
  className="border border-orange-900 rounded-lg  p-2 flex flex-row items-center gap-2"
  >
{/* pie */}
<div className="flex justify-center"> {/* how to remove extra right side space from here? */}
        <div
    className="w-48 h-48 rounded-full"
    style={{background:`conic-gradient(${gradient})`}}
    >

    </div>
</div>

    {/* legend */}
<div className="space-y-1">
{data.map((item)=>(
    <div key={item.type} className="">
        <div className="h-4 overflow-hidden "
        style={{ backgroundColor: item.color }}>
                <span className="text-xs flex items-center">
              {item.type} ({Math.round((item.count / total) * 100)}%)
            </span>
        </div>
    </div>
))}
</div>

  </div>);
};























/* 
map(([type,count])=>({type,count}));
extracting value from array so we use this [] and for using this ({}) after => () this tell reduce , run insdie the section, when it get inside, it get a obj {} , so it returns obj, if we dont use the () , then function will treat {} is a single block;



*/