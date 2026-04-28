import React from 'react';

type  ToggleProps = {
    checked:boolean;
    onChange:(val:boolean) =>void;
    disabled?:boolean;
};


export default function Toggle({
    checked,
    onChange,
    disabled,
}:ToggleProps){
    return(
        <button
        type='button'
        disabled={disabled}
        onClick={()=>{
            if(!disabled){
                onChange(!checked);
            }
        }}
        className={`inline-flex items-center w-12 h-6 rounded-full  transition-colors ${
        checked ? "bg-purple-600" : "bg-gray-300"
      } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        >
            <span
            className={`inline-block  w-5 h-5 bg-white rounded-full transform transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
            />

        </button>
    )
}
