
import { useCreateForm } from "../features/CreateForm/hooks/useCreateForm";
import { QuestionEditor } from "../features/CreateForm/components/QuestionEditor";
import { QuestionField } from "../features/submitFeedback/components/QuestionField"; 
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

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
    <div className="flex min-h-screen bg-slate-200">
      {/* LEFT PANEL: Editor */}
      <div className="w-1/2 min-h-screen flex  flex-col p-8">
        <h2 className="text-base font-bold p-2">Create Form</h2>
        
        {/* Title and Description */}
        <div className="space-y-4 mb-10 bg-white p-7 rounded-2xl">
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


          <h3 className="font-semibold mb-1">Questions</h3>

        <div className=" p-4 mb-6 overflow-auto max-h-64 flex-1 bg-slate-300 rounded-2xl border-2">
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

        <div className="flex gap-2 flex-wrap  ">

          <Button size="md" onClick={() => addQuestion("text")}>+ Text</Button>

          <Button size="md" onClick={() => addQuestion("rating")}>+ Rating</Button>

          <Button size="md" onClick={() => addQuestion("radio")} >+ MCQ</Button>

          <Button size="md" onClick={() => addQuestion("yes_no")} >+ YesNo</Button>

         <Button
         onClick={publishForm}
         disabled={isPublishing}
        size="sm"         
         >{isPublishing ? "Publishing..." : "Publish Form"}</Button>
        

        </div>
      </div>

      {/* RIGHT PANEL: Preview */}
      <div className="w-1/2 bg-slate-200 p-8 flex justify-center overflow-y-auto">
        <div className="w-full max-w-[500px]">
          <h2 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest text-center">Live Preview</h2>

          <div className="bg-white p-8 rounded-3xl shadow-sm border text-center">
            <h1 className="text-2xl font-semibold">{formDetails.Title || "Untitled Form"}</h1>
            <p className="text-gray-500 mb-8">{formDetails.Description || "Untitled Description"}</p>
          </div>
          <p className="text-xs font-bold text-gray-400 mt-4  uppercase tracking-widest text-center ">Question Sets</p>
          <div className="max-h-96 overflow-auto border  mt-2 p-3 bg-slate-300 rounded-2xl">
              {questions.map((q) => (
            <div className="bg-white p-4 rounded-3xl shadow-sm border my-2 ">
                <QuestionField                  
                  key={q.id} 
                  q={q} 
                  value={null} // In preview, value is always null
                  onChange={() => {}} // In preview, onChange does nothing
                />
            </div>
                
              ))}
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
