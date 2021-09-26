import Cell from "./cell";
import React from "react";

function Row({isMobile,rows,columns,state}) {

    return(
        <div className={'grid-row'}>
            {  state.map(cell=>{
            return <Cell isMobile = {isMobile} key = {cell.k} rows = {rows} columns = {columns} state ={cell}/>
        })}
        </div>

    );
}
export default Row;