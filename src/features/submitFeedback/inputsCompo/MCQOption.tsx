type MCQProps = {
  options: string[];
  value: string;
  onSelect: (value: string|"") => void;
};

export default function MCQOptions({ options, value, onSelect }: MCQProps) {
      //  console.log("the opt is",options)
  return (
   <div>
      {options.map((opt,index) => (
        <div
          key={index}
          onClick={() => {
            if (value === opt) {
              onSelect(""); // reset
            } else {
              onSelect(opt);
            }
          }}
          className={`p-2 border rounded mb-2 cursor-pointer ${
            value === opt ? "bg-blue-100 border-blue-500" : "border-gray-300"
          }`}
        >
          {opt}
        </div>
      ))}
    </div>
  );
}
