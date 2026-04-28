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
    <div style={{ background: "#cfefb3", padding: "20px" }}>
      <Badge type="text">Text</Badge>
      <h5>Ans:{value.length}</h5>
      <h3>{label}</h3>
      <ul>
        {textAns.map((ans, index) => (
          <li key={`${index}_${id}`}>{ans}</li>
        ))}
      </ul>
    </div>
  );
};
