import { useState } from "react";
import { Star } from "lucide-react";
import "../styles/pages/create-form.css";

type FormType = {
  id: number;
  Title: string;
  Description: string;
};

type QuestionType = "radio" | "yesno" | "rating" | "text";
type Question = {
  id: number;
  type: QuestionType;
  question: string;
  option: string[] | number[] | string;
};
type Answer = {
  quesId: number;
  answer: string | number;
};

export default function CreateFormPage() {
  const [formDetails, setFormDetails] = useState<FormType>({
    id: Date.now(),
    Title: "",
    Description: "",
  });
  const [question, setQuestion] = useState<Question[]>([]); //why write [] after question?
  const [answer, setAnswer] = useState<Answer[]>([]);

  function handleFormChange(field: string, value: string) {
    //why dont i give return type?
    setFormDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function AddQuestion(type: QuestionType) {
    setQuestion((prev) => [
      ...prev,
      {
        id: Date.now(),
        type,
        question: "",
        option:
          type === "radio"
            ? ["", "", "", ""]
            : type === "yesno"
              ? ["yes", "no"]
              : type === "rating"
                ? [1, 2, 3, 4, 5]
                : "",
      },
    ]);
  }

  const handleQuestionChange = (value: string, id: number) => {
    //why any return type not write?
    setQuestion((question) =>
      question.map((q) =>
        q.id === id
          ? {
              ...q,
              question: value,
            }
          : q,
      ),
    );
  };

  const handleOptionChange = (value: string, id: number, index: number) => {
    setQuestion((prev) => {
      return prev.map((q) => {
        if (q.id === id) {
          const newOptions = [...(q.option as string[])];
          newOptions[index] = value;

          return { ...q, option: newOptions };
        } else {
          return q;
        }
      });
    });
  };

  const handleAnswerChange = (value: string, id: number) => {
    setAnswer((prev) => {
      const exist = prev.find((a) => a.quesId === id);
      if (exist) {
        return prev.map((a) => (a.quesId === id ? { ...a, answer: value } : a));
      } else {
        return [...prev, { quesId: id, answer: value }];
      }
    });
  };
  //   const handleDeleteQue = (id: number) => {
  //     setQuestion((q: Question[]) => {
  //       const QusExist = q.find((q) => q.id === id);
  //       if (QusExist) {
  //         return q.filter((a) => a.id !== id);
  //       }
  //       return q; // if QusExist = undefined , if(undefined) not run but ts require always return  correct type so i return array
  //     });

  //     setAnswer((prev) => {
  //       const AnsExist = prev.find((a) => a.quesId === id);
  //       if (AnsExist) {
  //         return prev.filter((a) => a.quesId !== id);
  //       }
  //       return prev;
  //     });
  //   };

  const handleDeleteQue = (id: number) => {
    setQuestion((question) => question.filter((q) => q.id !== id));
    setAnswer((answer) => answer.filter((a) => a.quesId !== id));
  };

  const handleSubmit = () => {
    const mergedData = question.map((q) => {
      const userAnswer = answer.find((a) => a.quesId === q.id); //if id match, find return the obj

      return {
        quesId: q.id,
        question: q.question,
        type: q.type,
        options: q.option || [],
        answer: userAnswer?.answer || null,
      };
    });

    console.log(mergedData);

    // send to backend
    // fetch("/api/submit", { method: "POST", body: JSON.stringify(mergedData) })
  };

  return (
    <div>
      {/* Form Details preview */}
      <div>
        <p>
          <strong>Form details</strong>
        </p>
        <p>Form title</p>
        <input
          placeholder="e.g. Team feedback — Q2 2025"
          value={formDetails.Title}
          onChange={(e) => handleFormChange("Title", e.target.value)} //why i dont have to write e type? when need to write?
        />
        <p>Description </p>
        <input
          placeholder="Short note shown to responders..."
          value={formDetails.Description}
          onChange={(e) => handleFormChange("Description", e.target.value)}
        />
      </div>

      {/* question Section */}
      <p>
        <strong>Question</strong>
      </p>

      {/* question */}
      {question.map((q) => (
        <div key={q.id}>
          <p>Q.{q.question}</p>

          <input
            key={q.id}
            placeholder="Enter question"
            value={q.question}
            type="text"
            onChange={(e) => {
              handleQuestionChange(e.target.value, q.id);
            }}
          />
          {/* option Input */}
          {q.type === "radio" &&
            Array.isArray(q.option) && ( //what is Array.isArray do?
              <div>
                {(q.option as string[]).map(
                  (
                    opt,
                    index, //why i dont need to write here opt:string,index:number ?
                  ) => (
                    <div key={index}>
                      <input
                        value={opt}
                        placeholder={`Your option ${index + 1}`}
                        onChange={(e) =>
                          handleOptionChange(e.target.value, q.id, index)
                        }
                      />
                      <br />
                    </div>
                  ),
                )}
              </div>
            )}
          <br />
          <button onClick={() => handleDeleteQue(q.id)}>Delete</button>
        </div>
      ))}

      {/*Preview  */}
      <div>
        <p>Title<strong>{formDetails.Title || "Untitled Form"}</strong></p>
        <p>Description<strong>{formDetails.Description || "No description yet"}</strong></p>
      </div>
      <p>
        <strong>Preview</strong>
      </p>

      {question.map((q) => {
        const selected = Number(
          answer.find((a) => a.quesId === q.id)?.answer ?? 0,
        ); //what  is ??  why i converted into Number? why change to ?? from || ? que:1

        return (
          <div key={q.id}>
            {/* question show here */}
            <p>Q. {q.question}</p>

            {/* MCQ */}
            {q.type === "radio" &&
              Array.isArray(q.option) && //how array.isArray solve my question?
              q.option.map(
                (
                  opt,
                  index, //opt is ONE item from the options array
                ) => (
                  <div key={index}>
                    <input
                      key={index}
                      type="radio"
                      name={`q${q.id}`}
                      id={`q${q.id}_opt${index}`}
                      checked={
                        answer.find((a) => a.quesId === q.id)?.answer === opt
                      } //how can  i use selected here?
                      // checked = {selected === opt}//is it correct? ques 2

                      onChange={() => {
                        handleAnswerChange(String(opt), q.id);
                      }}
                    />
                    <label htmlFor={`q${q.id}_opt${index}`}>
                      {opt || `option${index + 1}`}
                    </label>
                    <br />
                  </div>
                ),
              )}

            {/* Yes or No  */}
            {q.type === "yesno" && Array.isArray(q.option) && (
              <div>
                {q.option.map((opt, index) => (
                  <div key={index}>
                    <input
                      id={`q${q.id}_${opt}`} // connect with label
                      type="radio"
                      name={`q${q.id}`}
                      value={opt}
                      checked={
                        answer.find((a) => a.quesId === q.id)?.answer === opt
                      } //use selected variable  here
                      onChange={() => handleAnswerChange(String(opt), q.id)} //why i dont do here? string(opt)
                    />

                    <label htmlFor={`q${q.id}_${opt}`}>{opt}</label>
                    <br />
                  </div>
                ))}
              </div>
            )}

            {/* text */}
            {q.type === "text" && ( // Array.isArray(q.option) && why not uses?
              <input
                type="text"
                value={answer.find((a) => a.quesId === q.id)?.answer || ""}
                onChange={(e) => handleAnswerChange(e.target.value, q.id)}
                placeholder="Write your answer"
              />
            )}

            {/* Rating */}
            {q.type === "rating" &&
              Array.isArray(q.option) &&
              q.option.map(
                (
                  r, //r is each item.
                ) => (
                  <Star
                    key={`q${q.id}_${r}`}
                    onClick={() => handleAnswerChange(String(r), q.id)} //i think this is not string, this could be number?
                    className={
                      Number(r) <= Number(selected) ? "star active" : "star"
                    }
                  />
                ),
              )}
          </div>
        );
      })}

      <button onClick={() => AddQuestion("radio")}>MCQ</button>
      <button onClick={() => AddQuestion("yesno")}>Yes/No</button>
      <button onClick={() => AddQuestion("text")}>Text</button>
      <button onClick={() => AddQuestion("rating")}>Rating</button>
      <button onClick={() => handleSubmit()}>Submit</button>
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
