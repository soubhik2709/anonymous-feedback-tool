
type YesNoValue = "Yes" | "No";

type YesNoProps = {
  qId:string,
  value:YesNoValue| "",
  onSelect:(value:YesNoValue) =>void;
}

export default function YesNoToggle({qId,value,onSelect}:YesNoProps){

  return(
    <div>
      {(["Yes","No"] as YesNoValue[]).map((opt)=>(
      <label key={opt} className="block mb-2 cursor-pointer">
        <input
        id={`${qId}-${opt}`}
        name={qId} //1
        type="radio"
        value={opt}//2
        checked = {value === opt}
        onChange={(e)=>onSelect(e.target.value as YesNoValue)}
         />
         {opt}
      </label>
      ))}
    </div>
  );

}


/* 
name={qId} //1 --> name is important  otherwise all radio button  will behave independent. Not any one can be selected.

value -  it tells what this option actually is

why this betteer key={opt} than this key={i} ?


*/