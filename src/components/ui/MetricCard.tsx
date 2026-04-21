type props ={
    children:React.ReactNode;
}

export default function MetricCard({children}:props){
return(
    <div 
    style={{
        padding:"5px",
        margin:"5px",
        background:"#96ecbe",
        color:"#211f1f",
        borderRadius:"7px",
    }}
    >
    {children}
    </div>
)
}