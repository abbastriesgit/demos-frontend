import React from "react";
import Row from "./row";

function Grid({isMobile ,rows,columns,states}) {
    let cells = [];
    for(let i =0;i<rows;i++){
        let row = [];
        for(let j =0;j<columns;j++){
            row.push({x:j,y:i,k: j*1000+i});
        }
        cells.push(row);
    }

    for(let i=1;states && i<states.length-1;i++){
        cells[states[i].y][states[i].x]["type"] = 'mid'
        cells[states[i].y][states[i].x]["direction"] = states[i].direction;
    }
    if(states && states.length>0){
        cells[states[0].y][states[0].x]["type"] = 'start'
        cells[states[0].y][states[0].x]["direction"] = states[0].direction;
        cells[states[states.length-1].y][states[states.length-1].x]["type"] = 'end'
        cells[states[states.length-1].y][states[states.length-1].x]["direction"] = states[states.length-1].direction;
    }
    return(
        <div className={isMobile?'grid-mobile':'grid'}>
            <div className={isMobile?'grid-container-mobile':'grid-container'}>
                {cells.map(row=>{
                    return <Row isMobile={isMobile} key = {row[0].k} rows = {rows } columns = {columns} state = {row}/>
                })}
            </div>
        </div>
    );
}
export default Grid;