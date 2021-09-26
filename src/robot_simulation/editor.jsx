import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import colors from "../constants/colors";
import ApiCalls from "./apiCalls";

function Editor({isMobile,setState,isPending,setIsPending,rows,columns,mode,setError}) {
    let [code,setCode] = useState([
        "POSITION 0 1 EAST",
        "FORWARD 1",
        "RIGHT",
        "FORWARD 2",
        "TURNAROUND",
        "FORWARD 1",
        "WAIT",
        "RIGHT"
    ]);

    const {simulate} = ApiCalls(setIsPending,setState,setError);
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
        <div className={isMobile?'editor-mobile':'editor'}>
            <textarea onChange={(e)=>{
                    setCode(stringToList(e.target.value));
                    localStorage.setItem("code",JSON.stringify(stringToList(e.target.value)));
                }}
                     value={listToString(code)}
           className={isMobile?'textarea-mobile':'textarea'}
           >

           </textarea>
            {!isPending && <Button className={'simulate-btn'} onClick = {callSimulate}> Run >></Button>}
            {isPending && <Button className={'simulate-btn'}>...</Button>}

        </div>

    );
}
export default Editor;