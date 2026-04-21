// src>pages>DashboardPage.tsx
import { mockForm } from "../features/Dashboard/constant/dashboard.data";
import { TextQuestionCard } from "../features/Dashboard/Components/TextQuestionCard";
import { RatingQuestionCard } from "../features/Dashboard/Components/RatingQuestionCard";
import { DashboardLayout } from "../components/layout/DashboardLayout";
import MetricCard from "../components/ui/MetricCard";
import { getTotalStats } from "../features/Dashboard/utils/dashboard.logic";
export default function DashboardPage() {
  const stats = getTotalStats();
  return (
    <DashboardLayout>
      <h1>{mockForm.title} summary</h1>
      <div
        style={{
          display: "grid",
          gap: "5px",
          gridTemplateColumns: "auto auto auto ",
        }}
      >
        <MetricCard>
          <h4>Total Responses</h4>
          <p>{stats.totalResponse}</p>
        </MetricCard>
        <MetricCard>
          <h4>Completion Rate</h4>
          <p>{stats.completionRate}</p>
        </MetricCard>
        <MetricCard>
          <h4>Form View</h4>
          <p>61</p>
        </MetricCard>
      </div>
      {mockForm.questions.map((q) => {
        if (q.type === "text") return <TextQuestionCard key={q.id} id={q.id} />;
        if (q.type === "rating")
          return <RatingQuestionCard key={q.id} id={q.id} />;

        return null;
      })}
    </DashboardLayout>
  );
}
