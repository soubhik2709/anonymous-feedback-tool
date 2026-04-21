//dashboard.logic.ts
import { mockForm, mockResponses } from "../constant/dashboard.data";
// mockStats
type Answer = {
  questionId: string;
  value: string | number;
  type: string;
};
export const findQuestion = (id: string) => {
  return mockForm.questions.find((q) => q.id === id)?.label;
};

export const findAnswer = (id: string): Answer[] => {
  return (
    mockResponses
      //only look at completed response
      .filter((res) => res.completed)
      // get all answer from completed res
      .flatMap((res) => res.answers)
      //only id answers i want
      .filter((ans) => ans.questionId === id)
  );
};

export const findTextAns = (answer: Answer[]): string[] => {
  return answer
    .map((ans) => ans.value)
    .filter((val): val is string => typeof val === "string");
};

export const calculateAverage = (values: (string | number)[]) => {
  const numbers = values.filter((val) => typeof val === "number");

  if (numbers.length === 0) return 0;
  const total = numbers.reduce((acc, curr) => acc + curr, 0);
  return Number((total / numbers.length).toFixed(2));
};

export const calculateDistribution = (values: (string | number)[]) => {
  const numbers = values.filter(
    (val): val is number => typeof val === "number",
  );

  const result: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  for (let num of numbers) {
    // result[num] = (result[num] || 0) + 1; // one line code .question 3
    if (result[num] !== undefined) {
      result[num]++;
    }
  }

  return result;
};

export const findMostAnswered = (distribution: Record<number, number>) => {
  // i didnt define the Record , what is Record , then how this is possible? 5
  let maxVotes = -1;
  // let mostAnsweredRating = 0;
  let result:number[]=[];

  for (const [rating, count] of Object.entries(distribution)) {//4.Object.entries
    const numRating = Number(rating);

    if (count > maxVotes) {
      maxVotes = count;
      result = [numRating]; //reset for bigger number
      // mostAnsweredRating = Number(rating);
    }else if( count === maxVotes){
      result.push(numRating);
    }
  }
  return result;
};

//helper function (purpose- to show the avg rating to the dashboard using getTotalStats )
export const getAllRatingValues = (): number[] => {
  return mockResponses
    // .filter((res) => res.completed) //Decision: Usually, dashboards show data from all submitted answers to be more accurate, even if the user didn't reach the "Thank You" page.
    .flatMap((res) => res.answers)
    .filter((ans) => ans.type === "rating")
    .map((ans) => ans.value)
    .filter((val): val is number => typeof val === "number");
};


export const getTotalStats = ()=>{
  const totalResponse = mockResponses.length; //1
  const completed = mockResponses.filter((obj)=>obj.completed===true).length;
  const completionRate = totalResponse === 0 ? 0 : (completed / totalResponse) * 100;//2

  const ratings = getAllRatingValues();
  const avg = calculateAverage(ratings);
  
  return {totalResponse,completionRate,avg};
}

























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

    ---------------------------------------------------------------------
     3.result[num] = (result[num] || 0) + 1; // how runs?
     JS always evaluates:
     RIGHT SIDE FIRST → then assigns to LEFT SIDE
     Right side = READ current value
     Left side = WRITE new value

 ----------------------------------------------------------------------
4. How does Object.entries() work?
In your code, you used Object.entries(distribution).

An object like { 1: 5, 2: 10 } is hard to loop through directly.

Object.entries() converts it into an Array of Arrays: [ ["1", 5], ["2", 10] ].

This allows you to use the for...of loop and destructure the [rating, count] easily.
---------------------------------------------------------------------------------
5. i didnt define the Record , what is Record , then how this is possible? 
Record is a built-in TypeScript Utility Type. You don't need to define it because TypeScript provides it automatically.
It is a quick way to define an Object.
    */
