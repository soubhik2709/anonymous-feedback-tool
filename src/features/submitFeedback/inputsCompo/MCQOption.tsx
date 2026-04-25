type MCQProps = {
  qId: string;
  options: string[];
  value: string;
  onSelect: (value: string) => void;
};

export default function MCQOptions({qId, options, value, onSelect }: MCQProps) {
  return (
    <div>
      {options.map((opt, i) => (
        <label
          key={opt}
          style={{ display: "block", marginBottom: "8px", cursor: "pointer" }}
        >
          <input
            type="radio"
            name={qId}
            value={opt}
            checked={value === opt}
            onChange={(e) => onSelect(e.target.value)}
          />
          {opt}
        </label>
      ))}
    </div>
  );
}
