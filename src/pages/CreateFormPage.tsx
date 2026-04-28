// import { useState } from "react";
// import { Star } from "lucide-react";
// import "../styles/pages/create-form.css";

// type QuestionType = "radio" | "yesno" | "rating" | "text";

// type Question = {
//   id: number;
//   type: QuestionType;
//   question: string;
//   option: string[] | number[] | string;
// };

// type Answer = {
//   quesId: number;
//   answer: string | number;
// };

// type FormType = {
//   id: number;
//   Title: string;
//   Description: string;
// };

// export default function CreateFormPage() {
//   const [formDetails, setFormDetails] = useState<FormType>({
//     id: Date.now(),
//     Title: "",
//     Description: "",
//   });
//   const [question, setQuestion] = useState<Question[]>([]);
//   const [answer, setAnswer] = useState<Answer[]>([]);

//   const handleFormChange = (field: string, value: string) => {
//     //why dont i give return type?
//     setFormDetails((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const AddQuestion = (type: QuestionType) => {
//     setQuestion((prev) => [
//       ...prev,
//       {
//         id: Date.now(),
//         type,
//         question: "",
//         option:
//           type === "radio"
//             ? ["", "", "", ""]
//             : type === "yesno"
//               ? ["yes", "no"]
//               : type === "rating"
//                 ? [1, 2, 3, 4, 5]
//                 : "",
//       },
//     ]);
//   };

//   const handleQuestionChange = (value: string, id: number) => {
//     //why any return type not write?
//     setQuestion((question) =>
//       question.map((q) =>
//         q.id === id
//           ? {
//               ...q,
//               question: value,
//             }
//           : q,
//       ),
//     );
//   };

//   const handleOptionChange = (value: string, id: number, index: number) => {
//     setQuestion((prev) => {
//       return prev.map((q) => {
//         if (q.id === id) {
//           const newOptions = [...(q.option as string[])];
//           newOptions[index] = value;

//           return { ...q, option: newOptions };
//         } else {
//           return q;
//         }
//       });
//     });
//   };

//   const handleAnswerChange = (value: string, id: number) => {
//     setAnswer((prev) => {
//       const exist = prev.find((a) => a.quesId === id);
//       if (exist) {
//         return prev.map((a) => (a.quesId === id ? { ...a, answer: value } : a));
//       } else {
//         return [...prev, { quesId: id, answer: value }];
//       }
//     });
//   };
//   //   const handleDeleteQue = (id: number) => {
//   //     setQuestion((q: Question[]) => {
//   //       const QusExist = q.find((q) => q.id === id);
//   //       if (QusExist) {
//   //         return q.filter((a) => a.id !== id);
//   //       }
//   //       return q; // if QusExist = undefined , if(undefined) not run but ts require always return  correct type so i return array
//   //     });

//   //     setAnswer((prev) => {
//   //       const AnsExist = prev.find((a) => a.quesId === id);
//   //       if (AnsExist) {
//   //         return prev.filter((a) => a.quesId !== id);
//   //       }
//   //       return prev;
//   //     });
//   //   };

//   const handleDeleteQue = (id: number) => {
//     setQuestion((question) => question.filter((q) => q.id !== id));
//     setAnswer((answer) => answer.filter((a) => a.quesId !== id));
//   };

// const getAnswer = (id:number)=> answer.find((a)=>a.quesId === id)?.answer ?? "";

//   const handleSubmit = () => {
//   const mergedData = question.map((q)=>({
//        quesId: q.id,
//         question: q.question,
//         type: q.type,
//         options: q.option || [],
//         answer: getAnswer(q.id) || null,
//   }));

//   console.log(mergedData);
//   // send to backend
//     // fetch("/api/submit", { method: "POST", body: JSON.stringify(mergedData) })
//   };



//   return (
//     <div className="page">

//       {/* LEFT PANEL*/}
//       <div className="panel-left">
//         {/* Form Details */}
//         <section className="form-details">
//           <h2>Form details</h2>
//           <label>Form title</label>
//           <input
//             placeholder="e.g. Team feedback — Q2 2025"
//             value={formDetails.Title}
//             onChange={(e) => handleFormChange("Title", e.target.value)} //why i dont have to write e type? when need to write?
//           />

//           <label>Description(optional)</label>
//           <input
//             placeholder="Short note shown to responders..."
//             value={formDetails.Description}
//             onChange={(e) => handleFormChange("Description", e.target.value)}
//           />
//         </section>

//         {/* question Section */}

//         <section className="question-list">
//           <h2>Questions</h2>
//           {/* question */}
//           {question.map((q) => (
//             <div key={q.id} className="question-card">
//               <span className="question-type-badge">{q.question}</span>
//               <input
//                 key={q.id}
//                 placeholder="Enter question"
//                 value={q.question}
//                 // type="text"
//                 onChange={(e) => {
//                   handleQuestionChange(e.target.value, q.id);
//                 }}
//               />
//               {/* options Input */}
//               {q.type === "radio" &&
//                 Array.isArray(q.option) &&
//                 (q.option as string[]).map(
//                   (
//                     opt,
//                     index, //why i dont need to write here opt:string,index:number ?
//                   ) => (
//                     <input
//                       key={index}
//                       value={opt}
//                       placeholder={`Your option ${index + 1}`}
//                       onChange={(e) =>
//                         handleOptionChange(e.target.value, q.id, index)
//                       }
//                     />
//                   ),
//                 )}

//               <button onClick={() => handleDeleteQue(q.id)}>Delete</button>
//             </div>
//           ))}
//         </section>

//         {/* buttons */}
//         <section className="add-question">
//           <button onClick={() => AddQuestion("text")}>+ Text</button>
//           <button onClick={() => AddQuestion("rating")}>+ Rating</button>
//           <button onClick={() => AddQuestion("radio")}>+ Multiple choice</button>
//           <button onClick={() => AddQuestion("yesno")}>+ Yes/No</button>
//         </section>


//       </div>

//       {/* --------------------------------------------------------------- */}

//       {/* --RIGHT PANEL (Live Preview)  */}
//       <div  className="panel-right">
//         <h2>Live preview</h2>

//         <div className="preview-form">
//           <h3>{formDetails.Title ||  "Untitled Form"}</h3>
//           <p>{formDetails.Description }</p>

//           {question.map((q,i)=>(
//             <div  key={q.id} className="preview-question">
//               {/* question show here */}
//               <p>{i+1}.{q.question}</p>

//                {/* TEXT */}
//               {q.type === "text" && ( // Array.isArray(q.option) && why not uses?
//                 <input
//                   type="text"
//                   value={answer.find((a) => a.quesId === q.id)?.answer || ""}
//                   onChange={(e) => handleAnswerChange(e.target.value, q.id)}
//                   placeholder="Type your answer here..."
//                 />
//               )}

//               {/* RATING */}
//                {q.type === "rating" &&
//                 Array.isArray(q.option) &&
//                 q.option.map(
//                   (
//                     r, //r is each item.
//                   ) => (
//                     <Star
//                       key={`q${q.id}_${r}`}
//                       onClick={() => handleAnswerChange(String(r), q.id)} //i think this is not string, this could be number?
//                       className={
//                         Number(r) <= Number(getAnswer(q.id)) ? "star active" : "star"}
//                     />
//                   ),
//                 )}

//               {/* MCQ & YES/NO */}
//               {(q.type === "radio" || q.type === "yesno") &&  
//               (q.option as string[]).map((opt,i)=>(
//                   <label key={i}>
//                     <input
//                     type="radio"
//                     name={`q${q.id}`}
//                     checked = {getAnswer(q.id)===opt}
//                     onChange={()=>handleAnswerChange(opt,q.id,)}
//                     />
//                   {opt || `option${i + 1}`}
//                   </label>
//                 ))}

//             </div>
//           ))}
//             <button onClick={() => handleSubmit()}>Submit feedback</button>
//         </div>

//       </div>
//     </div>
//   );
// }




import { useCreateForm } from "../features/CreateForm/hooks/useCreateForm";
import { QuestionEditor } from "../features/CreateForm/components/QuestionEditor";
import { QuestionField } from "../features/submitFeedback/components/QuestionField"; 
import Input from "../components/ui/Input";

export default function CreateFormPage() {
  const {
    formDetails,
    questions,
    handleFormChange,
    addQuestion,
    updateQuestionLabel,
    updateOption,
    deleteQuestion,
  } = useCreateForm();

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* LEFT PANEL: Editor */}
      <div className="w-1/2 p-8 border-r overflow-y-auto">
        <h2 className="text-xl font-bold mb-6">Create Form</h2>
        
        {/* Title and Description */}
        <div className="space-y-4 mb-10">
          <Input 
            label="Form Title" 
            value={formDetails.Title} 
            onChange={(val) => handleFormChange("Title", val)} 
          />
          <Input 
            label="Description" 
            value={formDetails.Description} 
            onChange={(val) => handleFormChange("Description", val)} 
          />
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-4">Questions</h3>
          {questions.map((q) => (
            <QuestionEditor 
              key={q.id}
              q={q}
              onLabelChange={(val) => updateQuestionLabel(q.id, val)}
              onOptionChange={(idx, val) => updateOption(q.id, idx, val)}
              onDelete={() => deleteQuestion(q.id)}
            />
          ))}
        </div>

        <div className="flex gap-2 flex-wrap">

          <button onClick={() => addQuestion("text")} className="px-3 py-1 border rounded-md text-xs hover:bg-gray-50">+ Text</button>

          <button onClick={() => addQuestion("rating")} className="px-3 py-1 border rounded-md text-xs hover:bg-gray-50">+ Rating</button>

          <button onClick={() => addQuestion("radio")} 
          className="px-3 py-1 border rounded-md text-xs hover:bg-gray-50">+ MCQ</button>

          <button onClick={() => addQuestion("yes_no")} className="px-3 py-1 border rounded-md text-xs hover:bg-gray-50">+ YesNo</button>

        </div>
      </div>

      {/* RIGHT PANEL: Preview */}
      <div className="w-1/2 bg-gray-50 p-8 flex justify-center overflow-y-auto">
        <div className="w-full max-w-[500px]">
          <h2 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest text-center">Live Preview</h2>
          <div className="bg-white p-8 rounded-3xl shadow-sm border">
            <h1 className="text-2xl font-bold">{formDetails.Title || "Untitled Form"}</h1>
            <p className="text-gray-500 mb-8">{formDetails.Description}</p>
            
            <div className="space-y-8  ">
              {questions.map((q) => (
                  <QuestionField
                  key={q.id} 
                  q={q} 
                  value={null} // In preview, value is always null
                  onChange={() => {}} // In preview, onChange does nothing
                />
                
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


//               (q.option as string[]).map((opt,i)=>(
//                   <label key={i}>
//                     <input
//                     type="radio"
//                     name={`q${q.id}`}
//                     checked = {getAnswer(q.id)===opt}
//                     onChange={()=>handleAnswerChange(opt,q.id,)}
//                     />
//                   {opt || `option${i + 1}`}
//                   </label>
//                 ))







































/* 
claudelink->
https://claude.ai/share/6f84fbe5-024f-4725-9675-f827a40392db
https://claude.ai/share/c9526a08-2b6a-4fa7-a07d-d24af5b48401
------------------------------------------------------------------------------------------------------
TODO-
1.add require * as true option for questions:
2.Do i need to add the project tilte and des in the main array for here question?

-----------------------------------------------------
        {question.map((q) => {
          // const selected = Number( answer.find((a) => a.quesId === q.id)?.answer ?? 0,); //what  is ??  why i converted into Number? why change to ?? from || ? que:1


ques 1:
 answer.find((a) => a.quesId === q.id)?.answer ?? 0,
        ); //what  is ??  why i converted into Number? why change to ?? from || ?
ans:
?? vs || — || skips the left side if it's falsy (0, false, "", null, undefined). ?? only skips if it's null or undefined. For ratings, a selected value of 0 is valid — || 0 would incorrectly replace it with 0 again, but ?? 0 preserves intentional 0 values. You convert to Number() because the answer is stored as a string ("1", "2" etc.) but you compare with Number(r).
----------------------------------------------------
ques 2:checked={
                    answer.find((a) => a.quesId === q.id)?.answer === opt
                  } //how can  i use selected here?
                  // checked = {selected === opt}//is it correct? 

ans:
checked={selected === opt} — This won't work for radio because selected is a Number and opt is a string. You'd need String(selected) === String(opt), but using the direct answer.find(...)?.answer === opt approach you already have is cleaner.
----------------------------------------------------
3.what is the use of name? name={`answer-${q.id}`}  why its needed?whyits usein input:    name={`q${q.id}`}
4.controlled vs uncontrolled with live bug example:
5.what is value use in the input?why its necessary, ?







-----------------------------------------------------------
Note -->

At the very first tmie anser array is 0 ,when user click option then answer onchange rerender the check part.
checked = {answer[q.id] === opt }
onChange={()=>hadleAnswerChange(q.id,opt)}                  

key -> With key React must track or identify which item changed, added, or removed.with out key react cant update ui while rerendering by comparing previous changes.

id -> use for connect it with label.

value-> input options is going to see on the label by using value.

name -> name is used to group radio buttons together. All radio buttons with the same name act as ONE group.Inside one group:You can select ONLY ONE option. wihtout name You can select BOTH ❌.


*/
