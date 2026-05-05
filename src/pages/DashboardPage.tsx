// src>pages>DashboardPage.tsx
import { mockForm } from "../features/Dashboard/constant/dashboard.data";
import { TextQuestionCard } from "../features/Dashboard/Components/TextQuestionCard";
import { RatingQuestionCard } from "../features/Dashboard/Components/RatingQuestionCard";
import { DashboardLayout } from "../components/layout/DashboardLayout";
import MetricCard from "../features/Dashboard/Components/MetricCard";
import { getTotalStats } from "../features/Dashboard/utils/dashboard.logic";
import { McqQuestionCard } from "../features/Dashboard/Components/McqQuestionCard";
import { YesNoQuestionCard } from "../features/Dashboard/Components/yesNoQuestionCard";
import { ActivityChatCard } from "../features/Dashboard/Components/ActivityChartCard";
import { PieChart } from "../features/Dashboard/Components/PieChart";
import { LineChartCard } from "../features/Dashboard/Components/LineChart";
import { FormSettingCard } from "../features/Dashboard/Components/FormSettingCard.jsx";
export default function DashboardPage() {
  const stats = getTotalStats();
  return (
   <DashboardLayout>
      <header className="p-3 sm:p-3 pb-0 flex-shrink-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          {mockForm.title}
        </h1>

        {/* Metric Cards: Optimized for 5 columns on desktop */}
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1">
          <MetricCard label="Total Responses" value={stats.totalResponse} />
          <MetricCard
            label="Completion Rate"
            value={`${stats.completionRate.toFixed(0)}%`}
          />
          <MetricCard label="Avg Rating" value={stats.avg} />
          <MetricCard label="Form View" value={stats.view} />
          <MetricCard label="Non Submission" value={stats.nonSubCount} />
        </section>
      </header>

      <div className="flex flex-col lg:flex-row flex-1 min-h-0 gap-4 p-4 sm:overflow-hidden">
        
        {/* Anwers(LeftSide) */}
        <section className="w-full lg:w-1/2  h-96 lg:h-[600px]  bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-y-scroll">
          {mockForm.questions.map((q) => {
            if (q.type === "text")
              return <TextQuestionCard key={q.id} id={q.id} />;
            if (q.type === "rating")
              return <RatingQuestionCard key={q.id} id={q.id} />;
            if (q.type === "multiple_choice")
              return <McqQuestionCard key={q.id} />;
            if (q.type === "yes_no") return <YesNoQuestionCard key={q.id} />;

            return null;
          })}
        </section>

        {/* BackEnd Fetch UI Data(Right Side) */}
        <section className="w-full lg:w-1/2 fflex flex-col gap-2 overflow-hidden min-h-0">
          <div className="flex flex-col sm:flex-row gap-2 overflow-y-auto ">
            <PieChart />
            <ActivityChatCard />
          </div>
          {/* <div className="flex flex-col sm:flex-row gap-1"> */}
            <LineChartCard />
            <FormSettingCard />
          {/* </div> */}
        </section>
      </div>
    </DashboardLayout> 


    
  );
}
