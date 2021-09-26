import React from "react";
import Row from "./row";

function Grid({rows,columns,states}) {
    let cells = [];
    for(let i =0;i<rows;i++){
        let row = [];
        for(let j =0;j<columns;j++){
            row.push({x:j,y:i});
        }
        cells.push(row);
    }
    if(states.length>0){
        cells[states[0].y][states[0].x]["type"] = 'start'
        cells[states[0].y][states[0].x]["direction"] = states[0].direction;
        cells[states[states.length-1].y][states[states.length-1].x]["type"] = 'end'
        cells[states[states.length-1].y][states[states.length-1].x]["direction"] = states[states.length-1].direction;
    }
    // for(let i=0;i<states.length-1;i++){
    //
    // }

    return(
        <div className={'grid'}>
            <div className={'grid-container'}>
                {cells.map(row=>{
                    return <Row rows = {rows } columns = {columns} state = {row}/>
                })}
            </div>
        </div>
    );
}
export default Grid;