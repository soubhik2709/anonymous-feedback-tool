//dashboard.logic.ts
import { mockForm, mockResponses } from "../constant/dashboard.data";
// mockStats

export const findQuestion = (id: string) => {
  return mockForm.questions.find((q) => q.id === id)?.label;
};

export const findAnswer = (id: string) => {
  return (
    mockResponses
      //only look at completed response
      .filter((res) => res.completed)
      // get all answer from completed res
      .flatMap((res) => res.answers)
      //only id answers i want
      .filter((ans) => ans.questionId === id)
      .map((ans) => ans.value)
)
};

export const calculateAverage = (values :(string|number)[]) => {
const numbers = values.filter((val):val is number =>
typeof val === "number");

if (numbers.length === 0) return 0;
const total = numbers.reduce((acc,curr)=> acc + curr,0);
  return Number((total / numbers.length).toFixed(1));
};




//why dont i write here any function return type for typeScript?

/* 
    1. const question = mockForm.questions.find((q)=>q.id === "q1");
        console.log(question);// question 1//why to use find except map, filter?find is use for object but here the obj is inside the obj, tell me each of this?

    -->  map transform all item , filter filters all item and return array, but find is  also  use for array ,and it return one obj here when condtn get true.

    map will return first obj in array format , and other array items undefined
    [
    { id: "q1", ... },
    undefined,
    undefined,
    undefined
    ]

    ---------------------------------------------------------------------
    2. // .map(obj=>(obj.id === id)?(obj.label):(null))//it return all null values with not match id.

        // const answer_one =  mockResponses.map((obj)=>obj.answers.map((ans)=> (ans.questionId === id)?(ans.value):null))// this will give in original array format . so use flatmap 

    */
