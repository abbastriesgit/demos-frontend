import React from "react";
import tank from "./tank.png"
function Cell({rows,columns,state}) {
    let style = {};
    if(state.direction === 'WEST')
        style = {transform: "rotate(-90deg)"};
    if(state.direction === 'EAST')
        style = {transform: "rotate(90deg)"};
    if(state.direction === 'SOUTH')
        style = {transform: "rotate(180deg)"};
    console.log(state)
    const getWidth= ()=>{
        let w = 500.0/rows;
        return w+'px';
    }
    const getWidthImg= ()=>{
        let w = 450.0/rows;
        return w+'px';
    }
    return (
        <div className={'cell'} style={{width:getWidth(),minWidth:getWidth(),height:getWidth(),minHeight:getWidth()}} >
            {/*{state.x}, {state.y}*/}
            {state.type && state.type==='end' &&
            <img src = {tank} width={getWidthImg()} height={getWidthImg()} style={{...style,margin:"2px"}}/>}
        </div>
    );
}
export default Cell;