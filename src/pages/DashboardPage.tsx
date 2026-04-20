// src>pages>DashboardPage.tsx
import { mockForm } from "../features/Dashboard/constant/dashboard.data";
import { TextQuestionCard } from "../features/Dashboard/Components/TextQuestionCard";
import { RatingQuestionCard } from "../features/Dashboard/Components/RatingQuestionCard";
import { DashboardLayout } from "../components/layout/DashboardLayout";
export default function DashboardPage() {
  return (
<DashboardLayout>
        <h1>{mockForm.title} summary</h1>

      {mockForm.questions.map((q) => {
        if (q.type === "text") return <TextQuestionCard key={q.id} id={q.id} />;
        if (q.type === "rating")return <RatingQuestionCard key={q.id} id={q.id} />;

        return null;
      })}
</DashboardLayout>
  );
}
