import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import colors from "../constants/colors";
import ApiCalls from "./apiCalls";

function Editor({setState,isPending,setIsPending,rows,columns,mode}) {
    let [code,setCode] = useState([
        "POSITION 0 0 EAST",
        "FORWARD",
        "FORWARD",
        "RIGHT",
        "FORWARD"
    ]);
    const {simulate} = ApiCalls(setIsPending,setState);
    const listToString = (code)=>{
        let string = '';
        for (let i =0;i<code.length;i++){
            string =  string + code[i];
            if(i+1 < code.length)
                string = string+'\n';
        }
        return string;
    }
    const stringToList = (string)=>{
        return string.split("\n");
    }
    useEffect(()=>{
            if(localStorage.getItem("code")!==null){
                setCode(JSON.parse(localStorage.getItem("code")))
            }
        }
    ,[]);
    const callSimulate = ()=>{
        simulate(code,true,rows,columns,mode);
    }
    return(
        <div className={'editor'}>
            <textarea onChange={(e)=>{
                    setCode(stringToList(e.target.value));
                    localStorage.setItem("code",JSON.stringify(stringToList(e.target.value)));
                }}
                     value={listToString(code)}
           className={'textarea'}
           >

           </textarea>
            {!isPending && <Button className={'simulate-btn'} onClick = {callSimulate}> Run >></Button>}
            {isPending && <Button className={'simulate-btn'}>...</Button>}

        </div>

    );
}
export default Editor;