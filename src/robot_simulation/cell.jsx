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
    if(state.type && state.type === 'start')
        style = {...style, opacity:'0.4'};
    else if(state.type && state.type === 'end')
        style = {...style, opacity:'1'};
    else if(state.type && state.type === 'mid')
        style = {...style, opacity:'0.1'};
    else
        style = {...style, opacity:'0'};
    const getWidth= ()=>{
        let w = 500.0/columns;
        return w+'px';
    }
    const getHeight= ()=>{
        let w = 500.0/rows;
        return w+'px';
    }
    const getWidthImg= ()=>{
        let w = 450.0/columns;
        return w+'px';
    }
    const getHeightImg= ()=>{
        let w = 450.0/rows;
        return w+'px';
    }
    return (
        <div className={'cell'} style={{width:getWidth(),minWidth:getWidth(),height:getHeight(),minHeight:getHeight()}} >
            {<img src = {tank} width={getWidthImg()} height={getHeightImg()} style={{...style,margin:"2px"}}/>}
        </div>
    );
}
export default Cell;