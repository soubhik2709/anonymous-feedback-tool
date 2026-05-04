import { useState,useEffect } from "react";
import { IQuestion } from "../../../types/form.types";

export const useFeedbackForm = (questions:IQuestion[])=>{
    const [answers,setAnswers] = useState<Record<string,any>>(()=>{
    const saved = localStorage.getItem("feedback_answers");
    return saved ? JSON.parse(saved) : {};
    });//why i use here value any , i have specific types of value only?what if i make answer type?

    const [errors,setErrors]= useState<Record<string,string>>({});
    const [isSubmitted, setIsSubmitted] = useState(() => 
    localStorage.getItem("feedback_submitted") === "true"
  );

// Auto Save to local storage
useEffect(()=>{
    localStorage.setItem("feedback_answers",JSON.stringify(answers));
},[answers]);


const handleUpdateAnswer = (id:string | number, value:any)=>{
    setAnswers((prev)=>({...prev,[id]:value}));
    if(errors[id]){
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });  
    }
};

const validate = ()=>{
    const newErrors:Record<string,string> ={};
    questions.forEach((q)=>{
    const value = answers[q.id];

        if(q.required && (value === undefined || value.toString().trim() === "" || value=== null)){
          
            newErrors[q.id] = "This field is required";
        }
    });
    setErrors(newErrors);
    return newErrors;
}

const resetForm = () => {
    localStorage.removeItem("feedback_submitted");
    localStorage.removeItem("feedback_answers");
    setAnswers({});
    setErrors({});
    setIsSubmitted(false);
  };


return {
    answers,
    errors,
    isSubmitted,
    setIsSubmitted,
    handleUpdateAnswer,
    validate,
    resetForm,
    answeredCount: questions.filter(q => answers[q.id]).length
  };



}