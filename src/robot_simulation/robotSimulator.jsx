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
    const rows = 5;
    const columns = 5;
    const mode = 'BOUNDED';

    let [isPending,setIsPending] = useState(false);
    return(
        <div className={'robot-main'}>
            <Editor setState={ setState} rows = {rows} columns = {columns} mode={mode} isPending = {isPending} setIsPending={setIsPending}/>
            <Grid rows={rows} columns={columns} states={state.positions}/>
        </div>
    );
}
export default RobotSimulator;