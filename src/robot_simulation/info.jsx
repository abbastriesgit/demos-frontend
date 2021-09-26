import React from "react";

function Info({isMobile}) {
    return(
        <div className={isMobile?'info-mobile':'info'}>
            <h3>Commands</h3>
            <h5>POSITION X Y Direction</h5>
            <p>
                Starting position and direction
                <br/>Directions : NORTH SOUTH EAST WEST
            </p>
            <h5>FORWARD K</h5>
            <p>
                Moves K step forward
            </p>
            <h5>RIGHT</h5>
            <p>Turns right</p>
            <h5>WAIT</h5>
            <p>Doesn't do anything</p>
            <h5>TURNAROUND</h5>
            <p>Turns 180 deg</p>
        </div>
    );
}
export default Info;