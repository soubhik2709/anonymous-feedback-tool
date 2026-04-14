import React from "react";
import style from "../../styles/components/layout/container.module.css";
type ContainerProps = {
    children:React.ReactNode;
}
export default function Container({children}:ContainerProps){
    return(
        <div className={style.container}>
        {children}
        </div>
    )
}






/* 
You didtn suggest me to do create container , but i create it cause better ui

*/