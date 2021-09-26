import React, {useEffect, useState} from "react";
import Editor from "./editor";
import Grid from "./grid";
import './robot.css'
import Info from "./info";
function RobotSimulator() {
    let [state,setState] = useState({
        positions: [
            {
                x:0,
                y:0,
                direction:'EAST'
            }
        ]
    });
    let [error,setError] = useState(false);
    const rows = 5;
    const columns = 5;
    const mode = 'BOUNDED';
    let [isPending,setIsPending] = useState(false);
    function IsMobile(){
        return window.innerWidth < 1300;

    }
    let [isMobile,setIsMobile] = useState(IsMobile());
    useEffect(
        ()=>window.addEventListener('resize', handleWindowSizeChange),
        [])
    const handleWindowSizeChange=()=>{
        setIsMobile(IsMobile);
    }
    const getCompilationError = ()=>{
        let array = state.validationResponse.validationResults;
        return array.map(err=>{
            if(!err.valid)
                return (
                    <div>
                        <h5>{'Line:'+ err.index + ' '+err.command}</h5>
                        <p>{err.error}</p>
                    </div>
                        );
            else
                return null;
        })
    }

    return(
        <div className={isMobile?'robot-main-mobile':'robot-main'}>
            <Info isMobile={isMobile}/>
            <Editor setState={ setState} rows = {rows}
                    columns = {columns} mode={mode}
                    isPending = {isPending}
                    setIsPending={setIsPending}
                    setError={setError}
                    isMobile={isMobile}
            />
            {error && <div style={{color:'red',textAlign:'left',margin:'auto'}}><h2>Compilation Error</h2> {getCompilationError()}</div>}

            <Grid isMobile={isMobile}
                  rows={rows}
                  columns={columns}
                  states={state.positions}
            />
        </div>
    );
}
export default RobotSimulator;