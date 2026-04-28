import { useState } from "react";
import { FormType, Question, QuestionType } from "../../../types/form.types.js";
// import

export const useCreateForm = () => {
  const [formDetails, setFormDetails] = useState<FormType>({
    id: Date.now(),
    Title: "",
    Description: "",
  });

  const [questions, setQuestions] = useState<Question[]>([]);
  //   const [answer, setAnswer] = useState<Answer[]>([]);

  const handleFormChange = (field: string, value: string) => {
    //why dont i give return type?
    setFormDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addQuestion = (type: QuestionType) => {
    const newQuestion: Question = {
      id: Date.now(),
      type,
      label: "",
      options:
        type === "radio"
          ? ["", "", "", ""]
          : type === "yes_no"
            ? ["yes", "no"]
            : type === "rating"
              ? ["1", "2", "3", "4", "5"]
              : [],
      required: false,
    };
    setQuestions((prev) => [...prev, newQuestion]);
  };

  const updateQuestionLabel = (id: number, value: string):void => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, label: value } : q)),
    );
  };

  const updateOption = (qId: number, index: number, value: string) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id === qId && Array.isArray(q.options)) {
          const newOptions = [...q.options];
          newOptions[index] = value;
          return { ...q, options: newOptions };
        }
        return q;
      }),
    );
  };

  //   handleAnswerChange()

  const deleteQuestion = (id: number) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  return {
    formDetails,
    questions,
    handleFormChange,
    addQuestion,
    updateQuestionLabel,
    updateOption,
    deleteQuestion,
  };
};
