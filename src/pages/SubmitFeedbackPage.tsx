import { useState, useRef, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import { AnonymousBadge } from "../features/submitFeedback/components/AnonymousBadge";
import { FeedbackHeader } from "../features/submitFeedback/components/FeedbackHeader";
import { ProgressBar } from "../features/submitFeedback/components/ProgressBar";
import { ProgressText } from "../features/submitFeedback/components/ProgressText";
// -----------------------------------------
import Textarea from "../features/submitFeedback/inputsCompo/TextareaWithCounter";
import RatingInput from "../features/submitFeedback/inputsCompo/RatingInput";
import MCQOptions from "../features/submitFeedback/inputsCompo/MCQOption";
import YesNoToggle from "../features/submitFeedback/inputsCompo/YesNoToggle";
// -----------------------
import { mockForm } from "../features/Dashboard/constant/dashboard.data";
type YesNo = "Yes" | "No";
type AnswerValue = string | number | YesNo | null;
type Answer = {
  [qId: string]: AnswerValue;
};

export default function SubmitFeedbackPage() {
  const [answer, setAnswer] = useState<Answer>(() => {
    const saved = localStorage.getItem("feedback_answers");
    return saved ? JSON.parse(saved) : {};
  });
  const [error, setError] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(() => {
    return localStorage.getItem("feedback_submitted") === "true";
  });
  const questionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const validate = () => {
    const newError: Record<string, string> = {}; //why need this obj? 1.
    mockForm.questions.forEach((q) => {
      if (q.required) {
        const value = answer[q.id];
        if (value === undefined || value === "" || value === null) {
          newError[q.id] = "This field is required";
        }
      }
    });
    setError(newError);
    console.log("The error is", newError);
    // return Object.keys(newError).length === 0; //define 2.
    return newError;
  };

  // progressBar
  const total = mockForm.questions.length;
  const answered = mockForm.questions.filter((q) => {
    const val = answer[q.id];
    return val !== undefined && val !== "" && val !== null;
  }).length;

  const percentage = Math.round((answered / total) * 100);

  //handle submit
  const handleSubmit = () => {
    const isValid = validate();

    if (Object.keys(isValid).length > 0) {
      const firstErrorId = Object.keys(isValid)[0];
      if (!firstErrorId) {
        const firstErrorId = Object.keys(error)[0];

        if (firstErrorId) {
          questionRefs.current[firstErrorId]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }
      return;
    }

    setSubmitted(true);
    localStorage.setItem("feedback_submitted", "true"); // after form submit, user can not sumbit aggain
    console.log("The submit Answer si", answer);
  };

  /* 
 const isFormValid = mockForm.questions.every((q) => {
    if (!q.required) return true;

    const val = answer[q.id];
    return val !== undefined && val !== "" && val !== null;
  }); 
  */

  useEffect(() => {
    localStorage.setItem("feedback_answers", JSON.stringify(answer));
  }, [answer]);

  //loading effect
  useEffect(() => {
    const saved = localStorage.getItem("feedback_answers");
    if (saved) {
      setAnswer(JSON.parse(saved));
    }
  }, []);

  const handleNewForm = () => {
    localStorage.removeItem("feedback_submitted");
    localStorage.removeItem("feedback_answers");

    setAnswer({});
    setSubmitted(false);
    setError({});
  };

  return submitted ? (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#dfcacaa3]">
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h2 className="text-green-600 text-lg font-semibold">
          ✅ Thank you for your feedback!
        </h2>
      </div>

      <button
        onClick={handleNewForm}
        className="mt-4 px-4 py-2 rounded-lg bg-green-600 text-white"
      >
        Submit Another Response
      </button>
    </div>
  ) : (
    <div className="min-h-screen bg-[#dfcacaa3]">
      <Navbar />
      {/* PageWrapper */}
      <div className="px-4 py-10 border border-red-500">
        <div className="max-w-[600px] mx-auto ">
          <div className="bg-white p-6 rounded-xl shadow">
            <ProgressBar percentage={percentage} />
            <ProgressText
              current={answered}
              total={total}
              percentage={percentage}
            />
            <AnonymousBadge />
            <FeedbackHeader
              title={mockForm.title}
              description={mockForm.description}
            />
            {mockForm.questions.map((q) => (
              <div
                key={q.id}
                className="mb-5"
                ref={(el) => {
                  questionRefs.current[q.id] = el;
                  // console.log("the el is ",el);
                }}
              >
                <p>
                  {q.label} {q.required && "*"}
                </p>

                {/* Error */}
                {error[q.id] && (
                  <p className="text-red-500 text-sm mt-1">{error[q.id]}</p>
                )}

                {/* TEXT */}
                {q.type === "text" && (
                  <Textarea
                    value={(answer[q.id] as string) || ""}
                    onChange={(val) => {
                      setAnswer((prev) => ({
                        ...prev,
                        [q.id]: val,
                      }));
                      setError((prev) => {
                        const updated = { ...prev };
                        delete updated[q.id];
                        return updated;
                      });
                    }}
                  />
                )}
                {/* Rating */}
                {q.type === "rating" && (
                  <RatingInput
                    rating={(answer[q.id] as number) ?? null}
                    onChange={(val) => {
                      setAnswer((prev) => ({
                        ...prev,
                        [q.id]: val,
                      }));
                      setError((prev) => {
                        const updated = { ...prev };
                        delete updated[q.id];
                        return updated;
                      });
                    }}
                  />
                )}

                {/* MCQ */}
                {q.type === "multiple_choice" && (
                  <MCQOptions
                    options={q.options || []}
                    value={(answer[q.id] as string) ?? ""}
                    onSelect={(val) => {
                      setAnswer((prev) => ({
                        ...prev,
                        [q.id]: val,
                      }));

                      setError((prev) => {
                        const updated = { ...prev };
                        delete updated[q.id];
                        return updated;
                      });
                    }}
                  />
                )}

                {/* YesNo */}
                {q.type === "yes_no" && (
                  <YesNoToggle
                    value={(answer[q.id] as YesNo) ?? null}
                    onSelect={(val) => {
                      setAnswer((prev) => ({
                        ...prev,
                        [q.id]: val,
                      }));
                      setError((prev) => {
                        const updated = { ...prev };
                        delete updated[q.id];
                        return updated;
                      });
                    }}
                  />
                )}
              </div>
            ))}
            <button
              className={`mt-6 w-full py-2 rounded-lg text-white 
                   bg-purple-600`}
              onClick={handleSubmit}
              disabled={submitted}
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
