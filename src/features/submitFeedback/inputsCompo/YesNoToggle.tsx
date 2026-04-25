
type YesNoValue = "Yes" | "No";

type YesNoProps = {
  value:YesNoValue| "",
  onSelect:(value:YesNoValue |null) =>void;
}

export default function YesNoToggle({value,onSelect}:YesNoProps){

 return (
    <div className="flex gap-3">
      
      {/* YES */}
      <button
        onClick={() => {
          if (value === "Yes") {
            onSelect(null); // reset
          } else {
            onSelect("Yes");
          }
        }}
        className={`px-4 py-2 rounded border ${
          value === "Yes"
            ? "bg-green-500 text-white border-green-500"
            : "border-gray-300"
        }`}
      >
        Yes
      </button>

      {/* NO */}
      <button
        onClick={() => {
          if (value === "No") {
            onSelect(null); // reset
          } else {
            onSelect("No");
          }
        }}
        className={`px-4 py-2 rounded border ${
          value === "No"
            ? "bg-red-500 text-white border-red-500"
            : "border-gray-300"
        }`}
      >
        No
      </button>

    </div>
  );

}


/* 
name={qId} //1 --> name is important  otherwise all radio button  will behave independent. Not any one can be selected.

value -  it tells what this option actually is

why this betteer key={opt} than this key={i} ?


*/