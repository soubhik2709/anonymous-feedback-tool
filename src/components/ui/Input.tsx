//src/components/ui/Input.tsx
import React from "react";
import FormField from "./FormField";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
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
      className={`w-full px-3 py-2 border rounded ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
    </FormField>
   )
}












/* 
({label,error,required,className="",...props},ref)=>{
why i write here className , and why i write like this ({})




*/
