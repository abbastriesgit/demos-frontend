
function TtBox({color,number,selected,onClick,id}){
console.log(selected)
    if(selected){
        return <div  onClick={()=>onClick(id)} style={{backgroundColor:color,color:"#272727",
            display:"flex",verticalAlign:"middle",
            width:"5rem",height:"5rem",margin:"1px",
            border:"3px solid green"}}>
            <div style={{margin:"auto"}}>{number>0 && number}</div>
        </div>
    }
    return(
        <div className={"zoom"} onClick={()=>onClick(id)} style={{backgroundColor:color,color:"#272727",
                 display:"flex",verticalAlign:"middle",
                 width:"5rem",height:"5rem",margin:"1px",
                 border:"3px solid grey"}}>
            <div style={{margin:"auto"}}>{number>0 && number}</div>
        </div>
    );
}
export default TtBox;