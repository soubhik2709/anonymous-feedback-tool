import { mockActivityData } from "../constant/dashboard.data.js"

export const activityChatCard = () => {
    const data = mockActivityData.activity.weeklyActivity.map((obj)=>obj);
    const max = Math.max(...data.map(d=>d.responseCount));

    return (
<>{max}</>
    )
}

















/* 
...mockActivityData ->this 3 dot convert [10, 20, 30]  →  ... →  10, 20, 30 . So output becomes Math.max(10, 20, 30) . Then we got the output.

*/