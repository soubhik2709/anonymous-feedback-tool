import style from "../../styles/dashboard/Badge.module.css";
type badgeProp = {
    children:React.ReactNode;
    type: "mcq"|"yesno"|"text"|"rating";//is this okay?
}

//im using normal css with module ,is it okay?

export const Badge = ({children,type}:badgeProp)=>{

    return (
 <span className={`${style.base} ${style[type]}`}>
    {children}
 </span>

    )

}