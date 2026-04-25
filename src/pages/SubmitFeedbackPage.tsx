import { useState,useRef } from "react";
import Navbar from "../components/layout/Navbar";
import { AnonymousBadge } from "../features/submitFeedback/components/AnonymousBadge";
import { FeedbackHeader } from "../features/submitFeedback/components/FeedbackHeader";
import { ProgressBar } from "../features/submitFeedback/components/ProgressBar";
import { ProgressText } from "../features/submitFeedback/components/ProgressText";
// -----------------------------------------
import TextareaWithCounter from "../features/submitFeedback/inputsCompo/TextareaWithCounter";
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
  const [answer, setAnswer] = useState<Answer>({});
  const [error, setError] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const questionRefs = useRef<Record<string,HTMLDivElement|null>>({});


  // progressBar
  const total = mockForm.questions.length;
  const answered = mockForm.questions.filter((q) => {
    const val = answer[q.id];
    return val !== undefined && val !== "" && val !== null;
  }).length;

  const percentage = Math.round((answered / total) * 100);

  const handleSubmit = () => {
    const isValid = validate();
    if (!isValid) {
   const firstErrorId = Object.keys(error)[0];

  if (firstErrorId) {
    questionRefs.current[firstErrorId]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return;
    }
    setSubmitted(true);
    console.log("The submit Answer si", answer);
  };

  const validate = () => {
    const newError: Record<string, string> = {}; //why need this obj? 1.
    mockForm.questions.forEach((q) => {
      if (q.required) {
        const value = answer[q.id];
        if (!value) {
          newError[q.id] = "This field is required";
        }
      }
    });
    setError(newError);
    console.log("The error is", error);
    return Object.keys(newError).length === 0; //define 2.
  };

/* 
 const isFormValid = mockForm.questions.every((q) => {
    if (!q.required) return true;

    const val = answer[q.id];
    return val !== undefined && val !== "" && val !== null;
  }); 
  */

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#dfcacaa3]">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-green-600 text-lg font-semibold">
            ✅ Thank you for your feedback!
          </h2>
        </div>
      </div>
    );
  }
  return (
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
              <div key={q.id}
               className="mb-5"
               ref ={(el)=>{questionRefs.current[q.id]=el}}
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
                  <TextareaWithCounter
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
                   bg-purple-600`
                 }
              onClick={handleSubmit}
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// add correct style.

/* 
1. const newError:Record<string,string> ={}; //why need this obj? 1.
There are many types of qustions type are there , everyone has different id , key value pair, and also to show the unique separate error msg we need this object.
------------------------------------------------------
2.return Object.keys(newError).length === 0;//define 2.
Object.key returns the all key in array format of newError object. then count the length, if 0 then true,
this validate function only return either true or false.
---------------------------------------------------
3.How error code line adjust to the right place everytime?
so when i click the submit button then if error occurs , then React re-renders the component, and because each question uses its own q.id, the error is conditionally rendered in the correct position.
----------------------------------------------------
|| → treats 0 as false ❌
?? → only replaces null/undefined ✅
---------------------------------------------------
here i removed qId from (mcqOption,yesnotog,rating,text) because child components should not care about question IDs. so that -removed qId because child components should not care about question IDs.Separation of concerns
*/
