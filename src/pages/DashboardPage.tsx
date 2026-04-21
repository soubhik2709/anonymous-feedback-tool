// src>pages>DashboardPage.tsx
import { mockForm } from "../features/Dashboard/constant/dashboard.data";
import { TextQuestionCard } from "../features/Dashboard/Components/TextQuestionCard";
import { RatingQuestionCard } from "../features/Dashboard/Components/RatingQuestionCard";
import { DashboardLayout } from "../components/layout/DashboardLayout";
import MetricCard from "../components/ui/MetricCard";
import { getTotalStats } from "../features/Dashboard/utils/dashboard.logic";
import { McqQuestionCard } from "../features/Dashboard/Components/McqQuestionCard";
export default function DashboardPage() {
  const stats = getTotalStats();
  return (
    <DashboardLayout>
      <h1>{mockForm.title} summary</h1>
      <div
        style={{
          display: "grid",
          gap: "5px",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        <MetricCard label="Total Responses" value={stats.totalResponse} />
        <MetricCard
          label="Completion Rate"
          value={`${stats.completionRate.toFixed(0)}%`}
        />
        <MetricCard label="Form View" value={61} />
        {/*  this will come from the backend data:*/}
        <MetricCard label="Avg Rating" value={stats.avg} />
      </div>
      {mockForm.questions.map((q) => {
        if (q.type === "text") return <TextQuestionCard key={q.id} id={q.id} />;
        if (q.type === "rating") return <RatingQuestionCard key={q.id} id={q.id} />;
        if(q.type === "multiple_choice") return <McqQuestionCard />;

        return null;
      })}
    </DashboardLayout>
  );
}
