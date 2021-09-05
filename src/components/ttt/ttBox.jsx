import { useSpring, animated } from 'react-spring'
import {useEffect, useState} from "react";

function TtBox({color,number,selected,onClick,index}){
    let [state,setState] = useState(1);
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0} ,config: { duration: 1000 }})
    if(selected){
        return <animated.div  onClick={()=>{setState(state+1);onClick(index)}} style={{backgroundColor:color,color:"#272727",
            display:"flex",verticalAlign:"middle",
            width:"5rem",height:"5rem",margin:"1px",
            border:"3px solid green",...props}}>
            <div style={{margin:"auto"}}>{number>0 && number}</div>
        </animated.div>
    }
    return(
        <animated.div className={"zoom"} onClick={()=>onClick(index)} style={{backgroundColor:color,color:"#272727",
                 display:"flex",verticalAlign:"middle",
                 width:"5rem",height:"5rem",margin:"1px",
                 border:"3px solid grey",...props}}>
            <div style={{margin:"auto"}}>{number>0 && number}</div>
        </animated.div>
    );
}
export default TtBox;