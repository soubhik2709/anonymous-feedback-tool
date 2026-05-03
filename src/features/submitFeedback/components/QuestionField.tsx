import { IQuestion } from "../../../types/form.types";
// import Input from "../../../components/ui/Input"; 
import Textarea from "../inputsCompo/TextareaWithCounter";
import RatingInput from "../inputsCompo/RatingInput";
import MCQOptions from "../inputsCompo/MCQOption";
import YesNoToggle from "../inputsCompo/YesNoToggle";
import FormField from "../../../components/ui/FormField";

interface props {
  //why dont use the type?
  q: IQuestion;
  value: any; //why any ?
  error?: string;
  onChange: (val: any) => void;
}

export const QuestionField = ({ q, value, error, onChange }: props) => {
  // console.log("the question type is",q.type)
return (
    <div className="w-full ">
      {/* We wrap EVERY question type in a FormField. 
        This ensures the label and error message always look the same.
      */}
      <FormField label={q.label} required={q.required} error={error} >
        
        {/* Render Textarea for 'text' type */}
        {q.type === "text" && (
          <Textarea 
            value={value || ""} 
            onChange={onChange} 
          />
        )}

        {/* Render Rating boxes for 'rating' type */}
        {q.type === "rating" && (
          <RatingInput rating={value ?? null} onChange={onChange} />
        )}

        {/* Render MCQ list for 'multiple_choice' type */}
        {q.type === "multiple_choice" && (
          <MCQOptions
          key={q.id}
            options={q.options || []}
            value={value || ""}
            onSelect={onChange}
          />
        )}

        {/* Render Yes/No buttons for 'yes_no' type */}
        {q.type === "yes_no" && (
          <YesNoToggle value={value ?? null} onSelect={onChange} />
        )}
        
      </FormField>
    </div>
  );
};


