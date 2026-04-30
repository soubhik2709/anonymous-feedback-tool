
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
    publishForm,
    isPublishing,
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

         <button
         onClick={publishForm}
         disabled={isPublishing}
         className={` my-1 px-6 py-2 rounded-xl font-semibold text-white transition-all ${
          isPublishing ? "bg-gray-400 cursor-not-allowed":"bg-purple-600 hover:bg-purple-700 shadow-md shadow-purple-200"
         }`}
         
         >{isPublishing ? "Publishing..." : "Publish Form"}</button>
        

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
