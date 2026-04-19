import { findQuestion, findAnswer } from "../utils/dashboard.logic";
import { Badge } from "../../../components/ui/Badge";
type Props = {
  id: string;
};

export const TextQuestionCard = ({ id }: Props) => {
  const label = findQuestion(id);
  const value = findAnswer(id);

  return (
    // Render the Badge at the top (with type="text"). what is
    <div>
      <Badge type="text">Text</Badge>

      <h3>{label}</h3>

      <ul>
        {value.map((ans, index) => (
          <li key={`${index}_${id}`}>{ans}</li>
        ))}
      </ul>
    </div>
  );
};
