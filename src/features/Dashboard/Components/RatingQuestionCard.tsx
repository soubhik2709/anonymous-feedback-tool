import { findQuestion,findAnswer ,calculateAverage ,calculateDistribution,findMostAnswered } from "../utils/dashboard.logic";

import { Badge } from "../../../components/ui/Badge";

type Props ={
    id:string;
};


export const RatingQuestionCard = ({id}:Props) =>{

    const label = findQuestion(id);
    const answers = findAnswer(id);

    const values = answers.map(ans =>ans.value);

    const avg =  calculateAverage(values);
    const rate = calculateDistribution(values);
    console.log("The rate is",rate);

    const mostAns = findMostAnswered(rate);
    console.log("The mostAns is",mostAns); 

    const totaleVotes = Object.values(rate).reduce((acc,curr)=>acc+curr,0);
    console.log("the totaleVote is",totaleVotes);

    return (
        <div>
            <Badge type="rating">Rating</Badge>
            <h2>{label}</h2>
            <div>Average:{avg}</div>

        </div>
    )
}