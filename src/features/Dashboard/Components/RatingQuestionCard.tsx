import { findQuestion,findAnswer ,calculateAverage } from "../utils/dashboard.logic";

import { Badge } from "../../../components/ui/Badge";

type Props ={
    id:string;
};

export const RatingQuestionCard = ({id}:Props) =>{

    const label = findQuestion(id);
    const answers = findAnswer(id);
    const avg =  calculateAverage(answers);
    
    // console.log("\n the answer is ",answers);
    // console.log("\n the question is ",label);

    return (
        <div>
            <Badge type="rating">Rating</Badge>
            <h2>{label}</h2>
            <div>Average:{avg}</div>
            <ul>
                {answers.map((ans,index)=>(
                    <li key={`${index}_${id}`}>{ans}</li> 
                ))}
            </ul>
        </div>
    )
}