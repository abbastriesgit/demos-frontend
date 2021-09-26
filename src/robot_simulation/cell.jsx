import React from "react";
import tank from "./tank.png"
function Cell({isMobile,rows,columns,state}) {
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
        if(isMobile){
            let w = Math.min(window.innerWidth,500)/columns - 5;
            console.log(w)
            return w+'px';
        }
        let w = 500.0/columns;
        console.log(isMobile,w)
        return w+'px';
    }
    const getHeight= ()=>{
        if(isMobile){
            let w = Math.min(window.innerWidth,500)/rows - 5;
            return w+'px';
        }
        let w = 500.0/rows;
        return w+'px';
    }
    const getWidthImg= ()=>{
        if(isMobile){
            let w = Math.min(window.innerWidth,500)/columns -8;
            return w+'px';
        }
        let w = 450.0/columns;
        return w+'px';
    }
    const getHeightImg= ()=>{
        if(isMobile){
            let w = Math.min(window.innerWidth,500)/rows -8;
            return w+'px';
        }
        let w = 450.0/rows;
        return w+'px';
    }
    return (
        <div className={isMobile?'cell-mobile':'cell'} style={{width:getWidth(),minWidth:getWidth(),height:getHeight(),minHeight:getHeight()}} >
            {<img src = {tank} width={getWidthImg()} height={getHeightImg()} style={{...style,margin:"2px"}}/>}
        </div>
    );
}
export default Cell;