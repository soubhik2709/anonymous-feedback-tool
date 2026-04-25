// src>pages>DashboardPage.tsx
import { mockForm } from "../features/Dashboard/constant/dashboard.data";
import { TextQuestionCard } from "../features/Dashboard/Components/TextQuestionCard";
import { RatingQuestionCard } from "../features/Dashboard/Components/RatingQuestionCard";
import { DashboardLayout } from "../components/layout/DashboardLayout";
import MetricCard from "../components/ui/MetricCard";
import { getTotalStats } from "../features/Dashboard/utils/dashboard.logic";
import { McqQuestionCard } from "../features/Dashboard/Components/McqQuestionCard";
import { YesNoQuestionCard } from "../features/Dashboard/Components/yesNoQuestionCard";
import { ActivityChatCard } from "../features/Dashboard/Components/ActivityChartCard";
import { PieChart } from "../features/Dashboard/Components/PieChart";
import { LineChartCard } from "../features/Dashboard/Components/LineChart";
export default function DashboardPage() {
  const stats = getTotalStats();
  return (
    <DashboardLayout>
      <h1 className="text-xl">{mockForm.title} summary</h1>

      {/* Metric Card */}
      <section className="grid grid-cols-5 gap-1">
        <MetricCard label="Total Responses" value={stats.totalResponse} />
        <MetricCard  label="Completion Rate" value={`${stats.completionRate.toFixed(0)}%`}/>
        <MetricCard label="Avg Rating" value={stats.avg} />
        <MetricCard label="Form View" value={stats.view} />
        <MetricCard label="NonSubmission" value={stats.nonSubCount} />
      </section>

      <div className="flex h-[calc(100vh-120px)] gap-2">

        {/* Anwers(LeftSide) */}
        <section className="p-1 w-1/2 overflow-y-auto bg-[#fff] custom-scrollbar ">
          {mockForm.questions.map((q) => {
            if (q.type === "text")
              return <TextQuestionCard key={q.id} id={q.id} />;
            if (q.type === "rating")
              return <RatingQuestionCard key={q.id} id={q.id} />;
            if (q.type === "multiple_choice") return <McqQuestionCard key={q.id}/>;
            if (q.type === "yes_no") return <YesNoQuestionCard key={q.id}/>;

            return null;
          })}
        </section>

        {/* BackEnd Fetch UI Data(Right Side) */}
        <section className="flex-1 bg-[#f9fafb] p-2.5 rounded-lg">
          <div className="flex">
            <PieChart/>
            <ActivityChatCard/>


          </div>
          <LineChartCard/>
        </section>
      </div>
    </DashboardLayout>
  );
}






/* 
Edit the style later ->
// const stats = getTotalStats();

// return (
//   <DashboardLayout>
    
    // {/* Title */
//     <h1 className="text-xl font-semibold mb-4">
//       {mockForm.title} summary
//     </h1>

//     {/* Metric Cards */}
//     <section className="grid grid-cols-4 gap-4 mb-4">
//       <MetricCard label="Total Responses" value={stats.totalResponse} />
//       <MetricCard
//         label="Completion Rate"
//         value={`${stats.completionRate.toFixed(0)}%`}
//       />
//       <MetricCard label="Form View" value={61} />
//       <MetricCard label="Avg Rating" value={stats.avg} />
//     </section>

//     {/* Main Layout */}
//     <div className="flex h-[calc(100vh-160px)] gap-4">

//       {/* LEFT PANEL */}
//       <section className="w-1/3 overflow-y-auto bg-white p-4 rounded-lg shadow custom-scrollbar">
//         {mockForm.questions.map((q) => {
//           if (q.type === "text")
//             return <TextQuestionCard key={q.id} id={q.id} />;
//           if (q.type === "rating")
//             return <RatingQuestionCard key={q.id} id={q.id} />;
//           if (q.type === "multiple_choice")
//             return <McqQuestionCard key={q.id} />;
//           if (q.type === "yes_no")
//             return <YesNoQuestionCard key={q.id} />;
//           return null;
//         })}
//       </section>

//       {/* RIGHT PANEL */}
//       <section className="flex-1 bg-gray-50 p-4 rounded-lg shadow">
//         {/* future content */}
//       </section>

//     </div>

//   </DashboardLayout>
// );
// */
