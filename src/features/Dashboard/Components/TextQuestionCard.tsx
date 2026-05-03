import {
  findQuestion,
  findAnswer,
  findTextAns,
} from "../utils/dashboard.logic";
import { Badge } from "./Badge";
type Props = {
  id: string;
};

export const TextQuestionCard = ({ id }: Props) => {
  const label = findQuestion(id);
  const value = findAnswer(id);
  const textAns = findTextAns(value);


  return (
    <div className="p-5 bg-[#cfefb3] m-2 rounded-md">
   <div className="flex justify-between">
        <Badge type="text">Text</Badge>
      <span className="text">{value.length} answers</span>
   </div>
      <h3>{label}</h3>
      <ul>
        {textAns.map((ans, index) => (
          <li key={`${index}_${id}`}>{ans}</li>
        ))}
      </ul>
    </div>
  );
};
