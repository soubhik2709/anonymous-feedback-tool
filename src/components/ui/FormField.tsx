type FromFieldProps={
    label?:string;
    required?:boolean;
    error?:string;
    children:React.ReactNode;
};

export default function FormField({
label,
required,
error,
children,
}:FromFieldProps){
    return(
        <div className="mb-5">

            {label && (
                <label className="block mb-1 font-medium text-gray-700">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            {children}

            {error && (
           <p className="text-red-500 text-sm mt-1">{error}</p>
            )}

        </div>
    );
}