type TextareaProps = {
  // qId:string;//not require 1
  value:string;
  onChange :(value:string)=>void;
}

export default function TextareaWithCounter({value,onChange}:TextareaProps) {
  return (
    <div className="w-full">
      <textarea
        className="w-full border rounded-lg p-3 resize-none"
        placeholder="Type Your answer..."
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        maxLength={500}
      />
      <div className="text-right text-sm text-gray-500 mt-1">
        {value.length} / 500
      </div>
    </div>
  );
}




//what is  resize-none in style? 
// qId:string;//not require 1 ->Textarea is a single input (not a group like radio)It doesn’t need name grouping. The parent already uses qId to store the answer


