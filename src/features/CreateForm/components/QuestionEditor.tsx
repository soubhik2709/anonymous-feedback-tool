import { Question } from "../../../types/form.types";
import Input from "../../../components/ui/Input";

interface Props {
  q: Question;
  onLabelChange: (val: string) => void;
  onOptionChange: (index: number, val: string) => void;
  onDelete: () => void;
}

// Left Panel component
export const QuestionEditor = ({
  q,
  onLabelChange,
  onOptionChange,
  onDelete,
}: Props) => {
  return (
    <div className="p-4 bg-gray-50 border rounded-xl mb-4 group">
      <div className="flex justify-between items-center mn-2">
        <span className="text-[10px] uppercase font-bold text-purple-600">
          {q.type}
        </span>
        <button
          onClick={onDelete}
          className="text-red-400 opacity-0 group-hover:opacity-100 transition-all text-xs"
        >
          Delete
        </button>
      </div>
      <Input
        placeholder="Enter your question here ..."
        value={q.label}
        onChange={(val) => onLabelChange(val)}
      />
      {q.type === "radio" &&
        q.options?.map((opt, i) => (
          <div key={i} className="mt-2 pl-4 border-l-2 border-purple-200">
            <input
              className="w-full text-sm p-1 border-b focus:border-purple-500 outline-none"
              value={opt}
              placeholder={`Option ${i + 1}`}
              onChange={(e) => onOptionChange(i, e.target.value)}
            />
          </div>
        ))}
    </div>
  );
};
