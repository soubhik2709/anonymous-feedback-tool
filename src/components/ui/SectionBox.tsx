import React from "react";
import style from "../../styles/components/ui/sectionBox.module.css";
type SectionBoxContent = {
    children:React.ReactNode;
};

 
export default function SectionBox({children}:SectionBoxContent){
    return(
        
<div className={style.secBox}>
{children}
</div>
     

    )
}

/* 
if any good name  instead of  SectionBox ,

*/