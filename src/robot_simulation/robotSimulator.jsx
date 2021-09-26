import React, {useState} from "react";
import Editor from "./editor";
import Grid from "./grid";
import './robot.css'
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
        <div className={'robot-main'}>
            <Editor setState={ setState} rows = {rows}
                    columns = {columns} mode={mode}
                    isPending = {isPending}
                    setIsPending={setIsPending}
                    setError={setError}
            />
            {error && <div style={{color:'red',textAlign:'left',margin:'auto'}}><h2>Compilation Error</h2> {getCompilationError()}</div>}

            <Grid rows={rows} columns={columns} states={state.positions}/>
        </div>
    );
}
export default RobotSimulator;