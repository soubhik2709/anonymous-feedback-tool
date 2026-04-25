import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import { AnonymousBadge  } from "../features/submitFeedback/components/AnonymousBadge";
import { FeedbackHeader } from "../features/submitFeedback/components/FeedbackHeader";
import { ProgressBar  } from "../features/submitFeedback/components/ProgressBar";
import { ProgressText } from "../features/submitFeedback/components/ProgressText";
// -----------------------------------------
import TextareaWithCounter from "../features/submitFeedback/inputsCompo/TextareaWithCounter";
import RatingInput from "../features/submitFeedback/inputsCompo/RatingInput";
import MCQOptions from "../features/submitFeedback/inputsCompo/MCQOption";
import YesNoToggle    from "../features/submitFeedback/inputsCompo/YesNoToggle";
// -----------------------
import { mockForm } from "../features/Dashboard/constant/dashboard.data";
type YesNo = "Yes"|"No";
type AnswerValue = string | number |YesNo;
type Answer ={
    [qId:string]:AnswerValue;
};

export default function SubmitFeedbackPage() {
const [answer,setAnswer]=useState<Answer>({});
const handleSubmit = ()=>{
  console.log("The submit Answer si",answer);
}



  return (
    <div className="min-h-screen bg-[#dfcacaa3]">
      <Navbar />
      {/* PageWrapper */}
      <div className="px-4 py-10 border border-red-500">
        <div className="max-w-[600px] mx-auto ">
          <div className="bg-white p-6 rounded-xl shadow">
            <ProgressBar/>
            <ProgressText/>
            <AnonymousBadge />
            <FeedbackHeader/>
            {mockForm.questions.map((q)=>(
              <div key={q.id} className="mb-5">
               <p>{q.label} {q.required && "*"}</p>
              
              {/* TEXT */}
              {q.type === "text" && (
                <TextareaWithCounter
                value={(answer[q.id] as string)|| ""}
                onChange={(val)=>setAnswer((prev)=>({
                  ...prev,
                  [q.id]:val,
                }))}
                />
              )}
              {/* Rating */}
              {q.type === "rating" && (
                <RatingInput
                 rating = {(answer[q.id] as number) || null}
                 onChange={(val)=>setAnswer((prev)=>({
                  ...prev,
                  [q.id]:val,
                 }))}

                />
              )}

              {/* MCQ */}
              {q.type === "multiple_choice" && (
                <MCQOptions
                 qId = {q.id}
                 options={q.options || []}
                 value={(answer[q.id] as string) || ""}
                onSelect={(val)=>setAnswer((prev)=>({
                  ...prev,
                  [q.id]:val,
                }))}
                />
              )}

              {/* YesNo */}
              {q.type === "yes_no" &&(
                <YesNoToggle 
                qId={q.id}
                value={(answer[q.id] as YesNo)|| null}
                onSelect={(val)=>
                setAnswer((prev)=>({
                    ...prev,
                    [q.id]:val,
                  }))
                }
                />
              )}

              </div>
            ))}
            <button
            className="mt-6 w-full bg-purple-600 text-white py-2 rounded-lg"
            onClick={handleSubmit}
            >Submit Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
}
// add correct style.