//src/components/ui/Input.tsx
import React from "react";
import FormField from "./FormField";

type InputProps =Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  onChange:(val:string) => void;
  placeholder?:string;
  label?: string;
  error?: string;
  required?: boolean;
};

export default function Input({ onChange,label,error,required,children, ...props}:InputProps) {
   return(
    <FormField label={label} error={error} required={required}>
      <input
      {...props}
      onChange={(e)=>onChange(e.target.value)}
      className={` outline-none focus:border-blue-400 w-full px-3 py-4 text-lg sm:px-3 sm:py-2 border rounded ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
    </FormField>
   )
}












/* 
({label,error,required,className="",...props},ref)=>{
why i write here className , and why i write like this ({})


what is  this : Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> &


      
is this correct onChange={(e)=>onChange(e.target.value)} or this one is correct: onChange={onChange}
*/
