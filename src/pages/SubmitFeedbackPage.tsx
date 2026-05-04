import { useRef } from "react";
import Navbar from "../components/layout/Navbar";

import { AnonymousBadge } from "../features/submitFeedback/components/AnonymousBadge";
import { FeedbackHeader } from "../features/submitFeedback/components/FeedbackHeader";
import { ProgressText } from "../features/submitFeedback/components/ProgressText";

// -----------------------------------------
import { ProgressBar } from "../features/submitFeedback/components/ProgressBar";
import { QuestionField } from "../features/submitFeedback/components/QuestionField";
import { useFeedbackForm } from "../features/submitFeedback/hooks/useFeedbackForm";
import { IQuestion } from "../types/form.types";
import Button from "../components/ui/Button";

import { mockForm } from "../features/Dashboard/constant/dashboard.data";

// type YesNo = "Yes" | "No";
// type AnswerValue = string | number | YesNo | null;
// type Answer = {
//   [qId: string]: AnswerValue;
// };

const SuccessState = ({ onReset }: { onReset: () => void }) => (
<div className="flex items-center justify-center min-h-[60vh] p-4">
    <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl text-center border border-gray-100 w-full max-w-md">
      
      {/* Icon */}
      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
        ✓
      </div>

      {/* Content */}
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Feedback submitted!
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Your response has been recorded anonymously.
      </p>

      {/* Action */}
      <button
        onClick={onReset}
        className="text-indigo-600 font-bold text-md hover:underline hover:text-indigo-700 transition-colors "
      >
        Submit another response
      </button>
    </div>
  </div>
);

export default function SubmitFeedbackPage() {
  const questions = mockForm.questions as IQuestion[];
  const {
    answers,
    errors,
    isSubmitted,
    setIsSubmitted,
    handleUpdateAnswer,
    validate,
    resetForm,
    answeredCount,
  } = useFeedbackForm(questions);

  const questionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleSubmit = () => {
    const validationErrors = validate();
    const firstErrorId = Object.keys(validationErrors)[0];

    if (firstErrorId) {
      questionRefs.current[firstErrorId]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }
    setIsSubmitted(true);
    localStorage.setItem("feedback_submitted", "true");
  };

  if (isSubmitted) return <SuccessState onReset={resetForm} />;
  const percentage = Math.round(
    (answeredCount / mockForm.questions.length) * 100,
  );

  return (
    <div className="min-h-screen bg-slate-100  ">
      <Navbar />
      <div className="max-w-[600px] mx-auto py-10 px-4  ">
        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200 ">
          <ProgressBar percentage={percentage} />

          <div className="mt-3 mb-6">
            <ProgressText
              current={answeredCount}
              total={questions.length}
              percentage={percentage}
            />
          </div>

          <div className="my-6">
            <AnonymousBadge />
            <FeedbackHeader
              title={mockForm.title}
              description={mockForm.description}
            />
          </div>

          <div className="space-y-6">
            {(mockForm.questions as IQuestion[]).map((q) => (
              <div
                key={q.id}
                ref={(el) => {
                  questionRefs.current[q.id] = el;
                }}
              >
                <QuestionField
                  q={q}
                  value={answers[q.id]}
                  error={errors[q.id]}
                  onChange={(val) => handleUpdateAnswer(q.id, val)}
                />
              </div>
            ))}
          </div>
          <Button disabled={isSubmitted} onClick={handleSubmit}>
            Submit Feedback
          </Button>
        </div>
      </div>
    </div>
  );
}
